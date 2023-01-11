import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Celulares } from "./components/Celulares/Celulares";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/productos/:categoryid" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>


  )
}
export default App;

