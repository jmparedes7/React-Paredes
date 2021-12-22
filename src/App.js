import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import CartContext from "./components/Context/CartContext";


function app() {
  return (

    <BrowserRouter>
      <CartContext>
          <div className="App">
            <NavBar />
            <ItemListContainer/>
          </div>
      </CartContext>   
    </BrowserRouter>
  );
}

export default app;