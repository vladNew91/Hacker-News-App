import { ListSubheaderComponent } from '../../components';
import { ErrorBoundary } from "react-error-boundary";
import { getTimeFromNow } from '../../helpers';
import { NewStory } from '../../types';
import {
    Box,
    Divider,
    ListItemButton,
    ListItemText,
    ListItem,
    List,
} from '@mui/material';

interface NewsListComponentProps {
    data: NewStory[],
    handleReloadNews: () => void;
    handleSelectNews: (el: NewStory) => void;
}

export const NewsListComponent: React.FC<NewsListComponentProps> = ({
    data,
    handleReloadNews,
    handleSelectNews,
}: NewsListComponentProps): JSX.Element => {
    return (
        <List
            aria-labelledby="nested-list-subheader"
            subheader={<ListSubheaderComponent handleReloadNews={handleReloadNews} />}
        >
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
                {data.map((el: NewStory, i: number) => (
                    <Box key={el.data.id}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleSelectNews(el)}
                            >
                                <ListItemText
                                    primary={`${++i}. ${el.data.title}`}
                                    secondary={`${el.data.score} point from ${el.data.by} ${getTimeFromNow(el.data.time)}`}
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
