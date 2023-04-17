import { Grid, Stack } from "@mui/material";
import {
    CharstContainer,
    ChatGPTContainer,
    TopStoriesContainer,
    WeatherContainer,
} from "../../containers";

export const HomePage: React.FC = (): JSX.Element => {
    return (
        <Grid container xl={12} height="100%" wrap="wrap">
            <Grid item xs={12} md={4} p={2} pt={0}>
                <TopStoriesContainer />
            </Grid>

            <Grid item xs={12} md={4} p={2}>
                <ChatGPTContainer />
            </Grid>

            <Grid item xs={12} md={4} p={2}>
                <Stack spacing={2}>
                    <WeatherContainer />
                    <CharstContainer />
                    <CharstContainer />
                </Stack>
            </Grid>
        </Grid>
    );
};
