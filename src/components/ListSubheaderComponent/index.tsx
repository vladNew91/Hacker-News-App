import { ListSubheader } from "@mui/material";
import { ReloadListContainer } from "../../containers";

interface ListSubheaderComponentProps {
    queryParametr1: string;
    queryParametr2: string;
    listSubheaderBg: string;
    handleReloadList: () => void;
}

export const ListSubheaderComponent: React.FC<ListSubheaderComponentProps> = ({
    queryParametr1,
    queryParametr2,
    listSubheaderBg,
    handleReloadList,
}: ListSubheaderComponentProps): JSX.Element => {
    return (
        <ListSubheader sx={{ background: listSubheaderBg }}>
            <>{queryParametr1}</>

            <ReloadListContainer
                queryParametr1={queryParametr1}
                queryParametr2={queryParametr2}
                handleReloadList={handleReloadList}
            />
        </ListSubheader>
    );
};
