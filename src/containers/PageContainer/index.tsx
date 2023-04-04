import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useQuery } from 'react-query';
import { selectedItem } from '../../modules/slices';
import { getDataRequest } from '../../api';
import { goOnTop } from '../../helpers';
import { Job, News } from '../../types';
import {
    ErrorAlertComponent,
    LoadingComponent,
    PageListComponent,
} from '../../components';

interface PageContainerProps {
    queryParametr1: string;
    queryParametr2: string;
    children?: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({
    children,
    queryParametr1,
    queryParametr2,
}: PageContainerProps): JSX.Element => {
    const { isLoading, error, data, refetch } = useQuery([queryParametr1, queryParametr2], getDataRequest, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

    const ref = useRef<null | HTMLDivElement>(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleReloadPage = useCallback(() => {
        goOnTop(ref);
        refetch();
    }, [refetch]);

    const handleSelectItem = useCallback((item: News | Job) => {
        dispatch(selectedItem(item));
        navigate(`/${queryParametr1}/${item.data.id}`);
    }, [dispatch, navigate, queryParametr1]);

    if (!data) return <LoadingComponent />;

    return (
        <>
            {children}
            <div ref={ref}></div>

            <PageListComponent
                data={data}
                queryParametr1={queryParametr1}
                handleSelectItem={handleSelectItem}
                handleReloadPage={handleReloadPage}
            />

            {error && <ErrorAlertComponent />}
            {isLoading && <LoadingComponent />}
        </>
    );
};
