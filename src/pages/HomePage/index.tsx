import {
    ChatGPTContainer,
    WeatherContainer,
    TopStoriesContainer,
    BitcoinChartContainer,
    EthereumChartContainer,
} from "../../containers";
import { Grid, Stack } from "@mui/material";

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
                    <BitcoinChartContainer />
                    <EthereumChartContainer />
                </Stack>
            </Grid>
        </Grid>
    );
};
