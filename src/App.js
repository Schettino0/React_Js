import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { ItemDetail, ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/productos/:categoriaid" element={<ItemListContainer/>}/>
        <Route path="item/:itemid" element={<ItemDetailContainer/>} />
          <Route path="/React_Js" element={ <Navigate to={"/"}/> } />

      </Routes>
    </BrowserRouter>
  )
}
export default App;

