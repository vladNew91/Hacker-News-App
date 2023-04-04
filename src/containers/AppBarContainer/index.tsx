import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { AppBarComponent } from '../../components';

export const AppBarContainer: React.FC = (): JSX.Element => {
    const navigate = useNavigate();

    const goToPage = useCallback((url: string) => navigate(url), [navigate]);

    return <AppBarComponent goToPage={goToPage} />;
};
