import { useCallback, useState } from 'react';
import { useGoToPage } from '../../helpers';
import { AppBarComponent } from '../../components';

export const AppBarContainer: React.FC = (): JSX.Element => {
    const { goToPage } = useGoToPage();
    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        useState<null | HTMLElement>(null);

    const isMenuOpen: boolean = !!anchorEl;
    const isMobileMenuOpen: boolean = !!mobileMoreAnchorEl;

    const handleNestedMenuOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleMobileMenuClose = useCallback(() => setMobileMoreAnchorEl(null), []);

    const handleMenuClose = useCallback(() => {
        setAnchorEl(null);
        handleMobileMenuClose();
    }, [handleMobileMenuClose]);

    const handleMobileMenuOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    }, []);

    const handleCloseMenuItem = useCallback((path: string) => {
        goToPage(path);
        handleMenuClose();
    }, [goToPage, handleMenuClose]);

    return (
        <AppBarComponent
            goToPage={goToPage}
            anchorEl={anchorEl}
            isMenuOpen={isMenuOpen}
            handleMenuClose={handleMenuClose}
            isMobileMenuOpen={isMobileMenuOpen}
            mobileMoreAnchorEl={mobileMoreAnchorEl}
            handleCloseMenuItem={handleCloseMenuItem}
            handleNestedMenuOpen={handleNestedMenuOpen}
            handleMobileMenuOpen={handleMobileMenuOpen}
            handleMobileMenuClose={handleMobileMenuClose}
        />
    );
};
