import { useCallback, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import CachedIcon from '@mui/icons-material/Cached';
import { IconButton, Tooltip } from '@mui/material';
import { selectedNews } from '../../modules/slices';
import { useRequestNews } from '../../helpers';
import { NewStory } from '../../types';
import {
    ErrorAlertComponent,
    LoadingComponent,
    NewsListComponent
} from '../../components';


export const HomeContainer: React.FC = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data, loading, requestError, makeRequest } = useRequestNews();

    useEffect(() => { makeRequest() }, [makeRequest]);

    const handleReloadNews = useCallback(() => makeRequest(), [makeRequest]);

    const handleSelectNews = useCallback((news: NewStory) => {
        dispatch(selectedNews(news));
        navigate(`/news/${news.data.id}`);

        console.log(news);
        
    }, [dispatch, navigate]);

    if (!data) return <LoadingComponent />;

    return (
        <>
            <NewsListComponent data={data} handleSelectNews={handleSelectNews} />

            <Tooltip title="Reload news">
                <IconButton
                    size="large"
                    color="primary"
                    sx={{ position: "fixed", bottom: "20px", left: "50%" }}
                    onClick={handleReloadNews}
                >
                    <CachedIcon />
                </IconButton>
            </Tooltip>

            {requestError && <ErrorAlertComponent />}
            {loading && <LoadingComponent />}
        </>
    );
};
