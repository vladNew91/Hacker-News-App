import axios, { AxiosResponse } from 'axios';
import { QueryFunctionContext } from 'react-query';
import { Configuration, OpenAIApi } from "openai";

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

export const requestGpt = async (text?: string) => {
    const configuration = new Configuration({
        apiKey: process.env.CHATGPT_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    const { data } = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
    });

    return data;
};

export const weatherRequest = async ({
    queryKey,
}: QueryFunctionContext<string[]>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [queryParametr1, queryParametr2] = queryKey;

    const PATH = "http://api.weatherapi.com/v1/current.json?key=";
    const API_KEY = "bea343cf63cc4d958a9130923212710";

    const { data } = await axios.get(`${PATH}${API_KEY}&q=${queryParametr2 || "London"}&aqi=no`);

    return data;
};
