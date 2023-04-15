import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { Weather } from "../../types";

interface WeatherComponentProps {
    data: Weather;
}

export const WeatherComponent: React.FC<WeatherComponentProps> = ({
    data,
}: WeatherComponentProps): JSX.Element => {
    return (
        <Card>
            <CardContent>
                <Grid container alignItems="center" spacing={1} wrap="nowrap">
                    <Grid item xs="auto">
                        <img
                            width={80}
                            src={data.current.condition.icon}
                            alt="icon"
                            loading="lazy"
                        />
                    </Grid>

                    <Grid item xs={7}>
                        <Stack>
                            <Typography variant="h6">{data.current.condition.text}</Typography>
                            <>{`${data.location.name}, ${data.location.country}`}</>
                        </Stack>
                    </Grid>

                    <Grid item xs={4} display="flex" justifyContent="end">
                        <Typography variant="h4">{`${data.current.temp_c}℃`}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
