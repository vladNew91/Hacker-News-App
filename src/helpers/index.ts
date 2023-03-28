import { useCallback, useState } from "react";
import { getDataRequest } from "../api";
import { NewStory } from "../types";
import moment from "moment";

export const getTimeFromNow = (unix_timestamp: number) => {    
    return moment(new Date(unix_timestamp * 1000)).fromNow();
};

export const useRequestNews = () => {
    const [data, setData] = useState<NewStory[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [requestError, setRequestError] = useState<boolean>(false);

    const toggleLoading = useCallback(() => setLoading(state => !state), []);

    const makeRequest = useCallback(async () => {
        setRequestError(false);
        toggleLoading();

        try {
            const newsData = await getDataRequest();

            setData(newsData);
        } catch (error) {
            setRequestError(true);
            // makeRequest();
        }

        toggleLoading();
    }, [toggleLoading]);

    return { data, loading, requestError, makeRequest };
};
