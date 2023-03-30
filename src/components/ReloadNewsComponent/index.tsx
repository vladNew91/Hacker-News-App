import { IconButton, Tooltip } from "@mui/material";
import CachedIcon from '@mui/icons-material/Cached';

interface ReloadNewsComponentProps {
    handleReloadNews: () => void;
}

export const ReloadNewsComponent: React.FC<ReloadNewsComponentProps> = ({
    handleReloadNews,
}: ReloadNewsComponentProps): JSX.Element => {
    return (
        <Tooltip title="Reload news">
            <IconButton
                size="small"
                color="primary"
                onClick={handleReloadNews}
            >
                <CachedIcon />
            </IconButton>
        </Tooltip>
    );
};
