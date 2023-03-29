import { useCallback } from "react";
import { useColorScheme } from "@mui/material";
import { ThemeSwitcherComponent } from "../../components";

export const ThemeSwitcherContainer: React.FC = (): JSX.Element => {
    const { mode, setMode } = useColorScheme();

    const handleChangeTheme = useCallback(() => mode === 'light' ? setMode("dark") : setMode("light"), [mode, setMode]);

    return <ThemeSwitcherComponent mode={mode} handleChangeTheme={handleChangeTheme} />
};
