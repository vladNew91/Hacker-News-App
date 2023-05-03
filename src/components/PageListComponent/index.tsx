import {
    Box,
    List,
    Divider,
    ListItem,
    ListItemText,
    ListItemButton,
} from '@mui/material';
import { Mode } from "fs";
import { Story } from '../../types';
import { ErrorPage } from '../../pages';
import { getTimeFromNow } from '../../helpers';
import { ErrorBoundary } from "react-error-boundary";
import { ListSubheaderComponent, PageListSkeletonComponent } from '../../components';

interface PageListComponentProps {
    qK1: string;
    qK2: string;
    mode?: Mode;
    listPage: number;
    data?: Story[];
    isRefetching: boolean;
    handleReloadList: () => void;
    handleSelectItem: (el: Story) => void;
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
                    data.map((el: Story, i: number) => (
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
                                                {el.title}
                                            </Box>
                                        }
                                        secondary={
                                            `${el.score} point from ${el.by}
                                            ${getTimeFromNow(el.time)}`
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
