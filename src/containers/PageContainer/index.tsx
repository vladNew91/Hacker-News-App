import React, { useCallback, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setListitem } from '../../modules/slices';
import { useColorScheme } from '@mui/material';
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
    const { mode } = useColorScheme();
    const [listPage, setListPage] = useState<number>(1);

    const { isLoading, error, data, refetch, isRefetching } = useQuery(
        [queryParametr1, queryParametr2, +(`${listPage}0`)],
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
        dispatch(setListitem(item));
        navigate(`/${queryParametr1}/${item.data.id}`);
    }, [dispatch, navigate, queryParametr1]);

    const handleChangeListPage = useCallback((
        e: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setListPage(value);
    }, []);

    if (!data) return <LoadingComponent />;

    return (
        <>
            {children}
            <div ref={ref}></div>

            <PageListComponent
                data={data}
                mode={mode}
                listPage={listPage}
                isRefetching={isRefetching}
                queryParametr1={queryParametr1}
                queryParametr2={queryParametr2}
                handleSelectItem={handleSelectItem}
                handleReloadList={handleReloadList}
                handleChangeListPage={handleChangeListPage}
            />

            {error && <ErrorAlertComponent />}
            {isLoading && <LoadingComponent />}
        </>
    );
};
