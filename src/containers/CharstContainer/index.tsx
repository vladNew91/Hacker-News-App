import {
    AreaChart,
    Area,
    Tooltip,
    ResponsiveContainer,
    XAxis,
} from "recharts";

const data = [
    {
        year: "2013",
        price: 4000,
    },
    {
        year: "2014",
        price: 3000,
    },
    {
        year: "2015",
        price: 2000,
    },
    {
        year: "2016",
        price: 2780,
    },
    {
        year: "2017",
        price: 1890,
    },
    {
        year: "2018",
        price: 2390,
    },
    {
        year: "2019",
        price: 3490,
    }
];

export const CharstContainer: React.FC = (): JSX.Element => {
    return (
        <ResponsiveContainer height={300}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                        <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                    </linearGradient>
                </defs>

                <Tooltip />

                <Area dataKey="price" stroke="#2451B7" fill="url(#color)" type="monotone" />

                <XAxis
                    axisLine={false}
                    tickLine={false}
                    dataKey="year"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};
