import {
    Card,
    CardContent,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
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

                    <Grid item xs={8}>
                        <Stack>
                            <Typography component="span">
                                <Typography variant="body1">
                                    {`${data.location.name},`}
                                </Typography>

                                <Typography variant="body2">
                                    {data.location.country}
                                </Typography>

                                <Typography color="text.secondary" variant="body2">
                                    {data.current.condition.text}
                                </Typography>
                            </Typography>
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
