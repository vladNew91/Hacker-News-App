import moment from "moment";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const getTimeFromNow = (unix_timestamp: number) => {
    return moment(new Date(unix_timestamp * 1000)).fromNow();
};

export const goOnTop = (el: React.MutableRefObject<HTMLElement | null>) => {
    el?.current?.scrollIntoView({ behavior: 'smooth' });
};

export const useGoToPage = () => {
    const navigate = useNavigate();

    const goToPage = useCallback((path: string) => navigate(path), [navigate])

    return { goToPage };
};
