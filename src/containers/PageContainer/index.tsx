import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useQuery } from 'react-query';
import { selectedItem } from '../../modules/slices';
import { getDataRequest } from '../../api';
import { ResponseData } from '../../types';
import { goOnTop } from '../../helpers';
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
    const { isLoading, error, data, refetch } = useQuery(
        [queryParametr1, queryParametr2],
        getDataRequest,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    const ref = useRef<null | HTMLDivElement>(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleReloadList = useCallback(() => {
        goOnTop(ref);
        refetch();
    }, [refetch]);

    const handleSelectItem = useCallback((item: ResponseData) => {
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
                queryParametr2={queryParametr2}
                handleSelectItem={handleSelectItem}
                handleReloadList={handleReloadList}
            />

            {error && <ErrorAlertComponent />}
            {isLoading && <LoadingComponent />}
        </>
    );
};
