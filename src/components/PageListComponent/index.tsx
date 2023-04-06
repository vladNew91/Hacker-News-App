import { ListSubheaderComponent } from '../../components';
import { ErrorBoundary } from "react-error-boundary";
import { getTimeFromNow } from '../../helpers';
import { ErrorPage } from '../../pages';
import { Job, News } from '../../types';
import {
    Box,
    Divider,
    ListItemButton,
    ListItemText,
    ListItem,
    List,
} from '@mui/material';

interface PageListComponentProps {
    data: News[] | Job[],
    queryParametr1: string;
    queryParametr2: string;
    handleReloadList: () => void;
    handleSelectItem: (el: News | Job) => void;
}

export const PageListComponent: React.FC<PageListComponentProps> = ({
    data,
    queryParametr1,
    queryParametr2,
    handleReloadList,
    handleSelectItem,
}: PageListComponentProps): JSX.Element => {
    return (
        <List
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheaderComponent
                    length={data.length}
                    queryParametr1={queryParametr1}
                    queryParametr2={queryParametr2}
                    handleReloadList={handleReloadList}
                />
            }
        >
            <ErrorBoundary fallback={<ErrorPage />}>
                {data.map((el: News | Job, i: number) => (
                    <Box key={i}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleSelectItem(el)}
                            >
                                <ListItemText
                                    primary={`${++i}. ${el.data?.title}`}
                                    secondary={
                                        `${el.data?.score} point from ${el.data?.by} ${getTimeFromNow(el.data?.time)}`
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
