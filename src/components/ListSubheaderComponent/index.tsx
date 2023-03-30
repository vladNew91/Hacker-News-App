import { ListSubheader } from "@mui/material";
import { ReloadNewsComponent } from "../../components";

interface ListSubheaderComponentProps {
    handleReloadNews: () => void;
}

export const ListSubheaderComponent: React.FC<ListSubheaderComponentProps> = ({
    handleReloadNews,
}: ListSubheaderComponentProps): JSX.Element => {
    return (
        <ListSubheader>
            Last 100 news
            <ReloadNewsComponent handleReloadNews={handleReloadNews} />
        </ListSubheader>
    );
};