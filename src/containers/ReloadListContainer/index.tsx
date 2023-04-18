import { useQuery } from "react-query";
import { ReloadListComponent } from "../../components";

interface ReloadListContainerProps {
    queryParametr1: string;
    queryParametr2: string;
    handleReloadList: () => void;
}

export const ReloadListContainer: React.FC<ReloadListContainerProps> = ({
    queryParametr1,
    queryParametr2,
    handleReloadList,
}: ReloadListContainerProps): JSX.Element => {
    const { isRefetching } = useQuery(
        [queryParametr1, queryParametr2],
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        });

    return (
        <ReloadListComponent
            isFetching={isRefetching}
            handleReloadList={handleReloadList}
        />
    );
};
