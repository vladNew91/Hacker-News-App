import axios from 'axios';
import { QueryFunctionContext } from 'react-query';
import { Configuration, OpenAIApi } from "openai";
import { CoinData, Story, Weather } from '../types';

const elementsOnPage = 10;

const getUrl = (topic: string) => (
    `https://hacker-news.firebaseio.com/v0/${topic}.json?print=pretty`
);

export const getStoryRequest = async (id: number) => {
    const data = await fetch(getUrl(`item/${id}`));
    const res: Story = await data.json();

    return res;
};

export const getStoriesRequest = async ({
    queryKey
}: QueryFunctionContext<[string, string, number | undefined]>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, qK2, qK3 = 1] = queryKey;

    const data = await fetch(getUrl(qK2));
    const result: number[] = await data.json();

    const sliceData: number[] = result.slice(qK3 - elementsOnPage, qK3);

    const storiesData = await Promise.all(
        sliceData.map(async (el: number) => {
            const data: Story = await getStoryRequest(el);
            return data;
        })
    );

    return storiesData;
};

export const loadItemCommentsRequest = async ({
    queryKey,
}: QueryFunctionContext<[string, number[]]>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, qK2] = queryKey;

    if (!qK2) return;

    return Promise.all(
        qK2.map(async (el: number) => {
            const data: Story = await getStoryRequest(el);
            return data;
        })
    );
};

export const requestGpt = async (text?: string) => {
    const configuration = new Configuration({
        // apiKey: process.env.CHATGPT_API_KEY,
        apiKey: "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",
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
    const [_, qK2 = "London"] = queryKey;

    const PATH = "https://api.weatherapi.com/v1/current.json?key=";
    // const API_KEY = process.env.WEATHER_API_KEY;
    const API_KEY = "bea343cf63cc4d958a9130923212710";

    const { data } = await axios.get(`${PATH}${API_KEY}&q=${qK2}&aqi=no`);

    return data as Weather;
};

export const cryptoRequest = async ({
    queryKey,
}: QueryFunctionContext<string[]>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, qK2] = queryKey;

    const { data } = await axios.get(
        `https://api.coincap.io/v2/assets/${qK2.toLocaleLowerCase()}/history?interval=m1`
    );

    return data as CoinData;
};
