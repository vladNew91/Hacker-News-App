import { ReloadListContainer } from "../../containers";
import { ListSubheader } from "@mui/material";

interface ListSubheaderComponentProps {
    length: number;
    queryParametr1: string;
    queryParametr2: string;
    listSubheaderBg: string;
    handleReloadList: () => void;
}

export const ListSubheaderComponent: React.FC<ListSubheaderComponentProps> = ({
    length,
    queryParametr1,
    queryParametr2,
    listSubheaderBg,
    handleReloadList,
}: ListSubheaderComponentProps): JSX.Element => {
    return (
        <ListSubheader sx={{ background: listSubheaderBg }}>
            <>Last {length} {queryParametr1}</>
            <ReloadListContainer
                queryParametr1={queryParametr1}
                queryParametr2={queryParametr2}
                handleReloadList={handleReloadList}
            />
        </ListSubheader>
    );
};
