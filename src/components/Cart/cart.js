import { useContext, useState, useEffect } from "react";
import { contexto } from '../../context/CartContext';
import { Link } from "react-router-dom"
import Item from "../Item/Item";

const Cart = () => {

    const [carrito, setcarritoCart] = useState([]);

    const { carrito, vaciarCarrito, eliminarProduc } = useContext(contexto)

    let total = 0

    useEffect(() => {
        setcarritoCart(carrito)
    }, [carrito, carritoCart]);

    carritoCart.forEach(producto => {
        total += producto.precio * producto.cantidad
    });

    return (
        <aside className="block col-1">
            <h2>CARRITO</h2>
            <div> {carrito.length === 0 && <div>EL CARRITO ESTA VACIO</div>} </div>
            {carrito.map((Item) => (
                <div key={Item.id} className= "row">
                <div>{Item.nombre}</div>
                <div>{Item.imagen}</div>
            </div>
        

       </aside>
    
        
)
}

export default Cart