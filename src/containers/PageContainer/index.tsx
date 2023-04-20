import {
    useRef,
    useState,
    useCallback,
} from 'react';
import { useQuery } from 'react-query';
import { goOnTop } from '../../helpers';
import { useDispatch } from "react-redux";
import { getDataRequest } from '../../api';
import { ResponseData } from '../../types';
import { useNavigate } from 'react-router-dom';
import { useColorScheme } from '@mui/material';
import { setListitem } from '../../modules/slices';
import { ErrorAlertComponent, PageListComponent } from '../../components';

interface PageContainerProps {
    qK1: string;
    qK2: string;
    children?: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({
    qK1,
    qK2,
    children,
}: PageContainerProps): JSX.Element => {
    const { mode } = useColorScheme();
    const [listPage, setListPage] = useState<number>(1);

    const { data, error, refetch, isRefetching } = useQuery(
        [qK1, qK2, +(`${listPage}0`)],
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
        navigate(`/${qK1}/${item.data.id}`);
    }, [dispatch, navigate, qK1]);

    const handleChangeListPage = useCallback((
        e: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setListPage(value);
    }, []);

    return (
        <>
            {children}
            <div ref={ref}></div>

            <PageListComponent
                qK1={qK1}
                qK2={qK2}
                data={data}
                mode={mode}
                listPage={listPage}
                isRefetching={isRefetching}
                handleSelectItem={handleSelectItem}
                handleReloadList={handleReloadList}
                handleChangeListPage={handleChangeListPage}
            />

            {error && <ErrorAlertComponent />}
        </>
    );
};
