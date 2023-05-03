export type Story = {
    id: number;
    deleted?: boolean;
    type?: "job" | "story" | "comment" | "poll" | "pollopt";
    by?: string;
    time: number;
    text?: string;
    dead?: boolean;
    parent?: number;
    poll?: number;
    kids?: number[];
    url?: string;
    score?: number;
    title?: string;
    parts?: number[];
    descendants?: number;
}

export type Weather = {
    current: {
        condition: {
            icon: string;
            text: string;
        };
        temp_c: number;
    };
    location: {
        country: string;
        name: string;
        tz_id: string;
    };
}

export type CoinData = {
    data: {
        priceUsd: number;
    }[];
}
