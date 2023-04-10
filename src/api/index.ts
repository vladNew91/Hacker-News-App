import axios, { AxiosResponse } from 'axios';
import { QueryFunctionContext } from 'react-query';

const firstElement = 0;
const lastElement = 100;

const getUrl = (topic: string) => `https://hacker-news.firebaseio.com/v0/${topic}.json?print=pretty`;

export const getDataRequest = async ({
    queryKey
}: QueryFunctionContext<string[]>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [queryParametr1, queryParametr2] = queryKey;

    const { data }: AxiosResponse<number[]> = await axios.get(getUrl(queryParametr2));

    const last100Data: number[] = data.slice(firstElement, lastElement);

    const responseData = await axios.all(
        last100Data.map((el: number) => axios.get(getUrl(`item/${el}`)))
    );

    return responseData;
};

export const loadItemCommentsRequest = async ({
    queryKey,
}: QueryFunctionContext<[string, number[]]>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [queryParametr1, queryParametr2] = queryKey;

    if (!queryParametr2) return;

    return axios.all(
        queryParametr2.map((el: number) => axios.get(getUrl(`item/${el}`)))
    );
};
