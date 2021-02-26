import { AppRouter } from "./components/routers/AppRouter";
import "./styles/styles.scss";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
