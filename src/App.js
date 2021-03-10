import { AppRouter } from "./components/routers/AppRouter";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
