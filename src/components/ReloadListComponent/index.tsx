import { CircularProgress, IconButton, Tooltip } from "@mui/material";
import CachedIcon from '@mui/icons-material/Cached';

interface ReloadListComponentProps {
    isFetching: boolean;
    handleReloadList: () => void;
}

export const ReloadListComponent: React.FC<ReloadListComponentProps> = ({
    isFetching,
    handleReloadList,
}: ReloadListComponentProps): JSX.Element => {
    const iconReload: JSX.Element = (
        isFetching ? <CircularProgress sx={{ m: 0.38 }} size={14} /> : <CachedIcon fontSize={'small'} />
    );

    return (
        <Tooltip title="Reload">
            <IconButton
                color="primary"
                onClick={handleReloadList}
            >
                {iconReload}
            </IconButton>
        </Tooltip>
    );
};
