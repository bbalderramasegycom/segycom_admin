import { Provider } from "react-redux";
import { AppRoutes } from "./components/routes/AppRoutes";
import { store } from './components/state/store/store';
import { ThemeProvider } from '@mui/material';
import { themeConfig } from "./styles/theme";

const init = () => {
  return localStorage.getItem('user') || { logged: false };
}

const App = () => {

  const theme = themeConfig;

  return (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
