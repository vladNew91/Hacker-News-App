import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Experimental_CssVarsProvider as ThemeProvider } from '@mui/material/styles';
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query';
import { LayoutComponent } from './components';
import { HomePage, NewsPage } from './pages';
import { CssBaseline } from '@mui/material';
import { queryClient } from './modules';
import { theme } from './styles';
import './index.css';

export const App: React.FC = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
