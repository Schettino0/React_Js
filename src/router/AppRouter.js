import { Carrito } from "../components/Carrito/Carrito";
import { NavBar } from "../components/NavBar/NavBar";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";
import { LoginScreen } from "../components/LoginScreen/LoginScreen";
import { useLoginContext } from "../components/context/LoginContext";
import { RegisterScreen } from "../components/RegisterScreen/RegisterScreen";

export const AppRouter = () => {
    const { user } = useLoginContext()
    return (
        <BrowserRouter>
            {
                user.logged
                    ? <>
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />
                            <Route path="*" element={<Navigate to ={"/"} />} />
                            <Route path="/productos/:categoriaid" element={<ItemListContainer />} />
                            <Route path="item/:itemid" element={<ItemDetailContainer />} />
                            <Route path="/React_Js" element={<Navigate to={"/"} />} />
                            <Route path="/carrito" element={<Carrito />} />
                        </Routes>
                    </>
                    : <>
                        <Routes>
                            <Route path="/login" element={< LoginScreen />} />
                            <Route path="/register" element={< RegisterScreen />} />
                            <Route path="*" element={<Navigate to={"/login"} />} />
                    </Routes>
                    </>
            }
        </BrowserRouter>

    )

}
