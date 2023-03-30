import moment from "moment";

export const getTimeFromNow = (unix_timestamp: number) => {
    return moment(new Date(unix_timestamp * 1000)).fromNow();
};

export const goOnTop = (el: React.MutableRefObject<HTMLElement | null>) => {
    el?.current?.scrollIntoView({ behavior: 'smooth' });
};
