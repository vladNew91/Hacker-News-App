type Response = {
    data: {
        by: string;
        id: number;
        score: number;
        time: number;
        title: string;
        type: string;
        url: string;
    }
}

export type News = Response & {
    data: {
        descendants?: number
    };
}

export type Job = Response & {
    data: {
        text?: string;
    };
}
