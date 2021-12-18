import { useState } from "react";
import productos from "./Productos/Productos";
import ItemCount from "./ItemCount/ItemCount";


const ItemDetail = () => {
    
    const [Cantidad, setCantidad] = useState(1);
    const [CantidadToAdd, setCantidadToAdd] = useState(0)

    const handleOnAdd = () => {
        setCantidadToAdd (Cantidad + CantidadToAdd);
        console.log (`Agregaste al carrito la cantidad ${Cantidad}`)
    }

    return(
        <div className = "Card">
            <div className = "Conteiner">
                <h2 className = "ItemHeader">{productos.nombre}</h2>
            </div>        
                
            <img src = {productos.imagen} className="ItemImg"/>

            <p className= "Info">Precio: {productos.precio}</p>

            <ItemCount onAdd={handleOnAdd} setCount={setCantidad}/>

        </div>



        
    )
}


export default ItemDetail