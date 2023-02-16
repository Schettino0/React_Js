import { Carrito } from "../components/Carrito/Carrito";
import { NavBar } from "../components/NavBar/NavBar";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";
import { LoginScreen } from "../components/LoginScreen/LoginScreen";
import { useLoginContext } from "../components/context/LoginContext";
import { RegisterScreen } from "../components/RegisterScreen/RegisterScreen";
import { Checkout } from "../components/Checkout/Checkout";
import { MyOrders } from "../components/MyOrders/MyOrders";

export const AppRouter = () => {
    const { user } = useLoginContext()
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="*" element={<Navigate to={"/"} />} />
                <Route path="/productos/:categoriaid" element={<ItemListContainer />} />
                <Route path="item/:itemid" element={<ItemDetailContainer />} />
                <Route path="/React_Js" element={<Navigate to={"/"} />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/checkout" element={< Checkout />} />
                <Route path="/myorders" element={<MyOrders />} />
                {
                    user.logged
                        ? " "
                        : <>

                            <Route path="/login" element={< LoginScreen />} />
                            <Route path="/register" element={< RegisterScreen />} />

                        </>
                }
            </Routes>


        </BrowserRouter>

    )

}
