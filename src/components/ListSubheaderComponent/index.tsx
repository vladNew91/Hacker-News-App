import { ListSubheader, Pagination } from "@mui/material";
import { ReloadListContainer } from "../../containers";
import { Mode } from "fs";

interface ListSubheaderComponentProps {
    mode?: Mode,
    listPage: number;
    isRefetching: boolean;
    queryParametr1: string;
    queryParametr2: string;
    handleReloadList: () => void;
    handleChangeListPage: (e: React.ChangeEvent<unknown>, value: number) => void;
}

export const ListSubheaderComponent: React.FC<ListSubheaderComponentProps> = ({
    mode,
    listPage,
    isRefetching,
    queryParametr1,
    queryParametr2,
    handleReloadList,
    handleChangeListPage,
}: ListSubheaderComponentProps): JSX.Element => {
    return (
        <ListSubheader
            sx={{
                background: mode === "light" ? "#fafafa" : "#392400",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
            }}
        >
            <>Last {queryParametr1}</>

            <ReloadListContainer
                queryParametr1={queryParametr1}
                queryParametr2={queryParametr2}
                handleReloadList={handleReloadList}
            />

            <Pagination
                count={6}
                size="small"
                hidePrevButton
                hideNextButton
                page={listPage}
                disabled={isRefetching}
                onChange={handleChangeListPage}
            />
        </ListSubheader>
    );
};
