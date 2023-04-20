import axios, { AxiosResponse } from 'axios';
import { QueryFunctionContext } from 'react-query';
import { Configuration, OpenAIApi } from "openai";
import { CoinData, Weather } from '../types';

const elementsOnPage = 10;

const getUrl = (topic: string) => `https://hacker-news.firebaseio.com/v0/${topic}.json?print=pretty`;

export const getDataRequest = async ({
    queryKey
}: QueryFunctionContext<[string, string, number | undefined]>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, qK2, qK3 = 1] = queryKey;

    const { data }: AxiosResponse<number[]> = await axios.get(getUrl(qK2));

    const sliceData: number[] = data.slice(qK3 - elementsOnPage, qK3);

    const responseData = await axios.all(
        sliceData.map((el: number) => axios.get(getUrl(`item/${el}`)))
    );

    return responseData;
};

export const loadItemCommentsRequest = async ({
    queryKey,
}: QueryFunctionContext<[string, number[]]>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, qK2] = queryKey;

    if (!qK2) return;

    return axios.all(
        qK2.map((el: number) => axios.get(getUrl(`item/${el}`)))
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
