import {
    Box,
    List,
    Divider,
    ListItem,
    ListItemText,
    ListItemButton,
} from '@mui/material';
import { Mode } from "fs";
import { ErrorPage } from '../../pages';
import { ResponseData } from '../../types';
import { getTimeFromNow } from '../../helpers';
import { ErrorBoundary } from "react-error-boundary";
import { ListSubheaderComponent } from '../../components';

interface PageListComponentProps {
    data: ResponseData[],
    mode?: Mode,
    listPage: number,
    isRefetching: boolean;
    queryParametr1: string;
    queryParametr2: string;
    handleReloadList: () => void;
    handleSelectItem: (el: ResponseData) => void;
    handleChangeListPage: (e: React.ChangeEvent<unknown>, value: number) => void;
}

export const PageListComponent: React.FC<PageListComponentProps> = ({
    data,
    mode,
    listPage,
    isRefetching,
    queryParametr1,
    queryParametr2,
    handleReloadList,
    handleSelectItem,
    handleChangeListPage
}: PageListComponentProps): JSX.Element => {
    return (
        <List
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheaderComponent
                    mode={mode}
                    listPage={listPage}
                    isRefetching={isRefetching}
                    queryParametr1={queryParametr1}
                    queryParametr2={queryParametr2}
                    handleReloadList={handleReloadList}
                    handleChangeListPage={handleChangeListPage}
                />
            }
        >
            <ErrorBoundary fallback={<ErrorPage />}>
                {data.map((el: ResponseData, i: number) => (
                    <Box key={i}>
                        <ListItem disablePadding dense>
                            <ListItemButton onClick={() => handleSelectItem(el)}
                            >
                                <ListItemText
                                    primary={
                                        <Box display="flex">
                                            {listPage === 1
                                                ?
                                                `${++i}. `
                                                :
                                                `${(listPage - 1) * 10 + ++i}. `
                                            }
                                            {el.data.title}
                                        </Box>
                                    }
                                    secondary={
                                        `${el.data.score} point from ${el.data.by} ${getTimeFromNow(el.data.time)}`
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </Box>
                ))}
            </ErrorBoundary>
        </List>
    );
};
