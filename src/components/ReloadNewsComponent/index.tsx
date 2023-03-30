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
                size="large"
                color="primary"
                sx={{ position: "fixed", bottom: "20px", left: "50%" }}
                onClick={handleReloadNews}
            >
                <CachedIcon />
            </IconButton>
        </Tooltip>
    );
};
