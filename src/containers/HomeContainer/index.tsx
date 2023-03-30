import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectedNews } from '../../modules/slices';
import { useRequestNews } from '../../helpers';
import { NewStory } from '../../types';
import {
    ErrorAlertComponent,
    LoadingComponent,
    NewsListComponent,
    ReloadNewsComponent
} from '../../components';


export const HomeContainer: React.FC = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data, loading, requestError, makeRequest } = useRequestNews();

    console.log(data);
    

    useEffect(() => { makeRequest() }, [makeRequest]);

    const divElement = useRef<null | HTMLDivElement>(null);

    const goOnTop = useCallback(() => divElement?.current?.scrollIntoView({ behavior: 'smooth' }), []);

    const handleReloadNews = useCallback(() => {
        makeRequest();
        goOnTop();
    }, [makeRequest, goOnTop]);

    const handleSelectNews = useCallback((news: NewStory) => {
        dispatch(selectedNews(news));
        navigate(`/news/${news.data.id}`);
    }, [dispatch, navigate]);

    if (!data) return <LoadingComponent />;

    return (
        <>
            <div ref={divElement}></div>
            <NewsListComponent data={data} handleSelectNews={handleSelectNews} />
            <ReloadNewsComponent handleReloadNews={handleReloadNews} />

            {requestError && <ErrorAlertComponent />}
            {loading && <LoadingComponent />}
        </>
    );
};
