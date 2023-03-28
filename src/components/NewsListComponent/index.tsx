import {
    Box,
    Divider,
    ListItemButton,
    ListItemText,
    ListItem,
    List,
    ListSubheader
} from '@mui/material';
import { getTimeFromNow } from '../../helpers';
import { NewStory } from '../../types';

interface NewsListComponentProps {
    data: NewStory[],
    handleSelectNews: (el: NewStory) => void;
}

export const NewsListComponent: React.FC<NewsListComponentProps> = ({
    data,
    handleSelectNews,
}: NewsListComponentProps): JSX.Element => {
    return (
        <List
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                >
                    Last 100 news
                </ListSubheader>
            }
        >
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
        </List>
    );
};
