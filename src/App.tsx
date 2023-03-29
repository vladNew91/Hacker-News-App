import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Experimental_CssVarsProvider as ThemeProvider } from '@mui/material/styles';
import { LayoutComponent } from './components';
import { HomePage, NewsPage } from './pages';
import { CssBaseline } from '@mui/material';
import { theme } from './styles';
import './index.css';

export const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news/:newsId" element={<NewsPage />} />
          </Routes>
        </LayoutComponent>
      </Router>
    </ThemeProvider>
  );
};
