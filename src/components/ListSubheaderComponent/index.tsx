import { ListSubheader, Pagination } from "@mui/material";
import { ReloadListContainer } from "../../containers";
import { Mode } from "fs";

interface ListSubheaderComponentProps {
    qK1: string;
    qK2: string;
    mode?: Mode;
    listPage: number;
    isRefetching: boolean;
    handleReloadList: () => void;
    handleChangeListPage: (e: React.ChangeEvent<unknown>, value: number) => void;
}

export const ListSubheaderComponent: React.FC<ListSubheaderComponentProps> = ({
    qK1,
    qK2,
    mode,
    listPage,
    isRefetching,
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
            <>Last {qK1}</>

            <ReloadListContainer
                qK1={qK1}
                qK2={qK2}
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
