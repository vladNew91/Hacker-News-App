import { useQuery } from "react-query";
import { weatherRequest } from "../../api";
import { ErrorAlertComponent } from "../../components";
import { WeatherComponent, WeatherSkeletonComponent } from "../../components";

export const WeatherContainer: React.FC = (): JSX.Element => {
    const { data, error } = useQuery(
        ["weather"],
        weatherRequest,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    if (!data) return <WeatherSkeletonComponent />;

    return (
        <>
            <WeatherComponent data={data} />

            {error && <ErrorAlertComponent />}
        </>
    );
};
