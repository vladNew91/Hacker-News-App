import { CircularProgress, IconButton, Tooltip } from "@mui/material";
import CachedIcon from '@mui/icons-material/Cached';
import { useQuery } from "react-query";

interface ReloadNewsComponentProps {
    handleReloadNews: () => void;
}

export const ReloadNewsComponent: React.FC<ReloadNewsComponentProps> = ({
    handleReloadNews,
}: ReloadNewsComponentProps): JSX.Element => {
    const { isFetching } = useQuery("news", {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

    const iconReload: JSX.Element = (
        isFetching ? <CircularProgress sx={{ m: 0.38 }} size={14} /> : <CachedIcon fontSize={'small'} />
    );

    return (
        <Tooltip title="Reload news">
            <IconButton
                color="primary"
                onClick={handleReloadNews}
            >
                {iconReload}
            </IconButton>
        </Tooltip>
    );
};
