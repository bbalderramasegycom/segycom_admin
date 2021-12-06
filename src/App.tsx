import { Provider } from "react-redux";
import { AppRoutes } from "./components/routes/AppRoutes";
import { store } from './components/state/store/store';

const init = () => {
  return localStorage.getItem('user') || { logged: false };
}

function App() {
  return (
    <Provider store={ store }>
      <AppRoutes />
    </Provider>
  );
}

export default App;
