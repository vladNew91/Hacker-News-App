import {
    Box,
    List,
    Divider,
    ListItem,
    Skeleton,
    ListItemText,
    ListItemButton,
} from '@mui/material';

export const PageListSkeletonComponent: React.FC = (): JSX.Element => {
    return (
        <List>
            {Array.from(Array(10).keys()).map((el: number, i: number) => (
                <Box key={i}>
                    <ListItem disablePadding dense>
                        <ListItemButton>
                            <ListItemText
                                primary={<Skeleton />}
                                secondary={<Skeleton />}
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </Box>
            ))}
        </List>
    );
};
