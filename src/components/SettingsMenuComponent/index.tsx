import { Menu, MenuItem } from "@mui/material";
import { ThemeSwitcherContainer } from "../../containers";

interface SettingsMenuComponentProps {
    anchorEl: HTMLElement | null;
    isMenuOpen: boolean;
    handleMenuClose: () => void;
}

export const SettingsMenuComponent: React.FC<SettingsMenuComponentProps> = ({
    anchorEl,
    isMenuOpen,
    handleMenuClose,
}: SettingsMenuComponentProps): JSX.Element => {
    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <ThemeSwitcherContainer />
                <p>Dark mode</p>
            </MenuItem>
        </Menu>
    );
};
