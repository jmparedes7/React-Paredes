import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Route, Routes } from "react-router-dom";

function app() {
  return (

  <BrowserRouter>
      <div className="App">
        <NavBar />
        <ItemListContainer/>
      </div>
  </BrowserRouter>
  );
}

export default app;