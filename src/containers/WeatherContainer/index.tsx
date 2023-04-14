import { useQuery } from "react-query";
import { weatherRequest } from "../../api";
import { ErrorAlertComponent } from "../../components";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export const WeatherContainer: React.FC = (): JSX.Element => {
    const { data, error } = useQuery(["weather"], weatherRequest);

    console.log(data);

    return (
        <>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <img
                                width={80}
                                src={data.current.condition.icon}
                                alt="icon"
                                loading="lazy"
                            />
                            {`${data.current.temp_c}℃`}<br/>
                            {`${data.location.name}, ${data.location.country}`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {error && <ErrorAlertComponent />}
        </>
    );
};
