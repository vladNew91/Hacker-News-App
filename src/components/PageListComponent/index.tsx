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
import { ListSubheaderComponent, PageListSkeletonComponent } from '../../components';

interface PageListComponentProps {
    qK1: string;
    qK2: string;
    mode?: Mode;
    listPage: number;
    data?: ResponseData[];
    isRefetching: boolean;
    handleReloadList: () => void;
    handleSelectItem: (el: ResponseData) => void;
    handleChangeListPage: (e: React.ChangeEvent<unknown>, value: number) => void;
}

export const PageListComponent: React.FC<PageListComponentProps> = ({
    qK1,
    qK2,
    data,
    mode,
    listPage,
    isRefetching,
    handleReloadList,
    handleSelectItem,
    handleChangeListPage
}: PageListComponentProps): JSX.Element => {
    return (
        <List
            subheader={
                <ListSubheaderComponent
                    qK1={qK1}
                    qK2={qK2}
                    mode={mode}
                    listPage={listPage}
                    isRefetching={isRefetching}
                    handleReloadList={handleReloadList}
                    handleChangeListPage={handleChangeListPage}
                />
            }
        >
            <ErrorBoundary fallback={<ErrorPage />}>
                {!data
                    ?
                    <PageListSkeletonComponent />
                    :
                    data.map((el: ResponseData, i: number) => (
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
                                            `${el.data.score} point from ${el.data.by}
                                            ${getTimeFromNow(el.data.time)}`
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
