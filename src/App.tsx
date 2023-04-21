import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Experimental_CssVarsProvider as ThemeProvider } from '@mui/material/styles';
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query';
import { LayoutComponent } from './components';
import { CssBaseline } from '@mui/material';
import { queryClient } from './modules';
import { Provider } from 'react-redux';
import { store } from './modules';
import { theme } from './styles';
import {
  HomePage,
  JobsPage,
  NewestPage,
  ItemPage,
  BestPage,
} from './pages';
import './index.css';

export const App: React.FC = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Router>
            <LayoutComponent>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/best" element={<BestPage />} />
                <Route path="/newest" element={<NewestPage />} />
                <Route path="/:page/:itemId" element={<ItemPage />} />
              </Routes>
            </LayoutComponent>
          </Router>
        </Provider>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
