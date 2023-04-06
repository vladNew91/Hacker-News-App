import { ListSubheader } from "@mui/material";
import { ReloadListContainer } from "../../containers";

interface ListSubheaderComponentProps {
    length: number;
    queryParametr1: string;
    queryParametr2: string;
    handleReloadList: () => void;
}

export const ListSubheaderComponent: React.FC<ListSubheaderComponentProps> = ({
    length,
    queryParametr1,
    queryParametr2,
    handleReloadList,
}: ListSubheaderComponentProps): JSX.Element => {
    return (
        <ListSubheader>
            <>Last {length} {queryParametr1}</>
            <ReloadListContainer
                queryParametr1={queryParametr1}
                queryParametr2={queryParametr2}
                handleReloadList={handleReloadList}
            />
        </ListSubheader>
    );
};
