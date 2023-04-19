import {
    Area,
    YAxis,
    Tooltip,
    AreaChart,
    ResponsiveContainer,
} from "recharts";
import { useQuery } from "react-query";
import { cryptoRequest } from "../../api";
import { Skeleton, Typography } from "@mui/material";
import { ErrorAlertComponent } from "../../components";

interface ChartContainerProps {
    qK2: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
    qK2
}: ChartContainerProps): JSX.Element => {
    const { data, error } = useQuery(
        ["crypto", qK2],
        cryptoRequest,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    const price = `${data?.data.at(-1)?.priceUsd}`.split('.')[0];

    if (!data) return (
        <Skeleton
            width="100%"
            height={300}
            variant="rectangular"
        ></Skeleton>
    );

    return (
        <>
            <Typography>
                {qK2} / USD
                <Typography variant="body2" color="text.secondary">
                    24h Change
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Current: {price}
                </Typography>
            </Typography>

            <ResponsiveContainer height={200}>
                <AreaChart data={data.data}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>

                    {/* <Tooltip /> */}

                    <Area dataKey="priceUsd" stroke="#2451B7" fill="url(#color)" />
                    <YAxis type="number" domain={["dataMin - 20", 'dataMax + 20']} hide />
                </AreaChart>
            </ResponsiveContainer>

            {error && <ErrorAlertComponent />}
        </>
    );
};
