import { useCallback, useRef } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectedNews } from '../../modules/slices';
import { getNewsRequest } from '../../api';
import { goOnTop } from '../../helpers';
import { NewStory } from '../../types';
import {
    ErrorAlertComponent,
    LoadingComponent,
    NewsListComponent,
} from '../../components';

export const HomeContainer: React.FC = (): JSX.Element => {
    const { isLoading, error, data, refetch } = useQuery("news", getNewsRequest, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

    const ref = useRef<null | HTMLDivElement>(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleReloadNews = useCallback(() => {
        goOnTop(ref);
        refetch();
    }, [refetch]);

    const handleSelectNews = useCallback((news: NewStory) => {
        dispatch(selectedNews(news));
        navigate(`/news/${news.data.id}`);
    }, [dispatch, navigate]);

    if (!data) return <LoadingComponent />;

    return (
        <>
            <div ref={ref}></div>

            <NewsListComponent
                data={data}
                handleSelectNews={handleSelectNews}
                handleReloadNews={handleReloadNews}
            />

            {error && <ErrorAlertComponent />}
            {isLoading && <LoadingComponent />}
        </>
    );
};
