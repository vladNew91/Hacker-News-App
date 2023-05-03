import { useQuery } from "react-query";
import { ReloadListComponent } from "../../components";
import { getStoriesRequest } from "../../api";

interface ReloadListContainerProps {
    qK1: string;
    qK2: string;
    handleReloadList: () => void;
}

export const ReloadListContainer: React.FC<ReloadListContainerProps> = ({
    qK1,
    qK2,
    handleReloadList,
}: ReloadListContainerProps): JSX.Element => {
    const { isRefetching } = useQuery(
        [qK1, qK2, undefined],
        getStoriesRequest,
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
