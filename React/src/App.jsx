import Login from "./Pages/LoginPage/Login"
import Signup from "./Pages/SignupPage/Signup"
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Home from "./Pages/HomePage/Home.jsx";

function App() {
  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  );
}

export default App
