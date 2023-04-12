import { AccountCircle } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';

interface MobileMenuComponentProps {
    isMobileMenuOpen: boolean;
    mobileMoreAnchorEl: HTMLElement | null;
    handleCloseMenuItem: (path: string) => void;
    handleNestedMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleMobileMenuClose: () => void;
}

export const MobileMenuComponent: React.FC<MobileMenuComponentProps> = ({
    isMobileMenuOpen,
    mobileMoreAnchorEl,
    handleCloseMenuItem,
    handleNestedMenuOpen,
    handleMobileMenuClose,
}: MobileMenuComponentProps): JSX.Element => {
    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={() => handleCloseMenuItem("/")}>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <AutoStoriesIcon />
                </IconButton>

                <p>Top</p>
            </MenuItem>

            <MenuItem onClick={() => handleCloseMenuItem("/best")}>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <AutoStoriesIcon />
                </IconButton>

                <p>Best</p>
            </MenuItem>

            <MenuItem onClick={() => handleCloseMenuItem("/newest")}>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <AutoStoriesIcon />
                </IconButton>

                <p>Newest</p>
            </MenuItem>

            <MenuItem onClick={() => handleCloseMenuItem("/jobs")}>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <AutoStoriesIcon />
                </IconButton>

                <p>Jobs</p>
            </MenuItem>

            <MenuItem onClick={handleNestedMenuOpen}>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <SettingsIcon />
                </IconButton>

                <p>Settings</p>
            </MenuItem>

            <MenuItem>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>

                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
};
