import axios, { AxiosError, AxiosResponse } from 'axios';

const firstElement = 0;
const onehungredElement = 100;

const URL = "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty";
const URL_ITEM = "https://hacker-news.firebaseio.com/v0/item/";

export async function getNewsRequest() {
    const { data }: AxiosResponse<number[]> = await axios.get(URL);

    const top100NewsArray: number[] = data.slice(firstElement, onehungredElement);

    const newsData = await axios.all(
        top100NewsArray.map(
            (el: number) => axios.get(`${URL_ITEM}${el}.json?print=pretty`)
        )
    ).catch((err: AxiosError) => console.log(err));

    return newsData;
}
