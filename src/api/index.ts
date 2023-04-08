import axios, { AxiosResponse } from 'axios';
import { ResponseData } from '../types';

const firstElement = 0;
const lastElement = 100;

const getUrl = (topic: string) => `https://hacker-news.firebaseio.com/v0/${topic}.json?print=pretty`;

type DataRequestProps = {
    queryKey: string[];
}

export const getDataRequest = async ({
    queryKey
}: DataRequestProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [queryParametr1, queryParametr2] = queryKey;

    const { data }: AxiosResponse<number[]> = await axios.get(getUrl(queryParametr2));

    const last100Data: number[] = data.slice(firstElement, lastElement);

    const responseData = await axios.all(
        last100Data.map((el: number) => axios.get(getUrl(`item/${el}`)))
    );

    return responseData as ResponseData[];
};
