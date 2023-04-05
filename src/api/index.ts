import axios, { AxiosResponse } from 'axios';

const firstElement = 0;
const lastElement = 100;

const getUrl = (topic: string) => `https://hacker-news.firebaseio.com/v0/${topic}.json?print=pretty`;

type FetDataRequestProps = {
    queryKey: string[];
}

export const getDataRequest = async ({
    queryKey
}: FetDataRequestProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, prodId] = queryKey;

    const { data }: AxiosResponse<number[]> = await axios.get(getUrl(prodId));

    const last100Data: number[] = data.slice(firstElement, lastElement);

    const responseData = await axios.all(
        last100Data.map((el: number) => axios.get(getUrl(`item/${el}`)))
    );

    return responseData;
};
