import { useColorScheme } from "@mui/material";
import { ListSubheaderComponent } from "../../components";

interface ListSubheaderContainerProps {
    queryParametr1: string;
    queryParametr2: string;
    handleReloadList: () => void;
}

export const ListSubheaderContainer: React.FC<ListSubheaderContainerProps> = ({
    queryParametr1,
    queryParametr2,
    handleReloadList,
}: ListSubheaderContainerProps): JSX.Element => {
    const { mode } = useColorScheme();

    const listSubheaderBg: string = mode === "light" ? "#fafafa" : "#392400";

    return (
        <ListSubheaderComponent
            queryParametr1={queryParametr1}
            queryParametr2={queryParametr2}
            listSubheaderBg={listSubheaderBg}
            handleReloadList={handleReloadList}
        />
    );
};
