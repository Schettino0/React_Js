import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { CartProvider } from "./components/context/CartContext";
import { LoginProvider } from "./components/context/LoginContext";
import {AppRouter} from "./router/AppRouter";


function App() {

  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>

  )
}
export default App;

