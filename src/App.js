import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css" 
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";



function App() {
  return (
    <div>
      <NavBar /> 
      <ItemListContainer saludo= "Hola, Bienvenido!"/>
    </div>
  );
}

export default App;

