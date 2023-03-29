import { IconButton } from "@mui/material";
import Moon from "@mui/icons-material/DarkMode";
import Sun from "@mui/icons-material/LightMode";
import { Mode } from "fs";

interface ThemeSwitcherComponentProps {
    mode?: Mode;
    handleChangeTheme: () => void;
}

export const ThemeSwitcherComponent: React.FC<ThemeSwitcherComponentProps> = ({
    mode,
    handleChangeTheme,
}: ThemeSwitcherComponentProps): JSX.Element => {
    return (
        <IconButton onClick={handleChangeTheme}>
            {mode === "light" ? <Moon /> : <Sun color="secondary" />}
        </IconButton>
    );
};
