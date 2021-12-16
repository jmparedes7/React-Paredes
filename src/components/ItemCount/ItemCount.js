import { useState } from "react"

const ItemCount =({stock, initial, onAdd}) => {
    
    stock = 10
    initial= 1
    const [contador = initial, setContador] = useState(1);


const aumentarCont = () => {
if (contador < stock) {
    setContador(contador+1)
} else {
    alert("No hay suficiente stock")
}
}


const restarCont = () => {

    if (contador > initial) {
        setContador(contador-1);
    }

}

const agregarCarrito = () => {
    if (contador < stock) {
        setContador (contador + 1);
    }
}

    return (
        <span>
            <h1>{contador}</h1>
            <button onClick={restarCont}>-</button>
            <button onClick={agregarCarrito}>Al carrito</button>
            <button onClick={aumentarCont}>+</button>
        </span>
    )
    
}


export default ItemCount