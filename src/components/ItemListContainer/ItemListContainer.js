import React from "react";
import ItemList from "../ItemList/ItemList";
import productos from "../Productos/Productos";
import './ItemListContainer.css'

const itemListConteiner = () => {
    return (

        
            <div className="ItemListContainer">
                <div>
                    <input type ="text"/>
                    <button>Buscar</button>
                </div>
                <ItemList productos={productos} />
            </div>
    )
}
export default itemListConteiner