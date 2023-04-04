import { ListSubheader } from "@mui/material";
import { ReloadNewsComponent } from "../../components";

interface ListSubheaderComponentProps {
    length: number;
    queryParametr1: string;
    handleReloadNews: () => void;
}

export const ListSubheaderComponent: React.FC<ListSubheaderComponentProps> = ({
    length,
    queryParametr1,
    handleReloadNews,
}: ListSubheaderComponentProps): JSX.Element => {
    return (
        <ListSubheader>
            Last {length} {queryParametr1}
            <ReloadNewsComponent handleReloadNews={handleReloadNews} />
        </ListSubheader>
    );
};