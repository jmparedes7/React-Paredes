import { createContext , useState } from "react"
export const context = createContext()
const { Provider } = context

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState ([])
    const [cantidad, setCantidad] = useState ([0])

    const agregarProduc = (producto, cantidad) => {

        const productoID = producto.id
        
        if (isInCart(productoID)) {
            const productoCarrito = carrito.find(producto => producto.id === productoID)
            productoCarrito.cantidad = productoCarrito.cantidad + cantidad

            const indiceProductoCarrito = carrito.findIndex(producto => producto.id === productoID)

            const nuevoCarrito = [...carrito]
            nuevoCarrito.splice(indiceProductoCarrito, 1)

            setCarrito([...nuevoCarrito, productoCarrito])
        } else {
            setCarrito([...carrito, producto])
        }
    }


    const eliminarProduc = (id) => {}

    const vaciarCarrito = () => {
        setCarrito([])
        setCantidad ([0])
    }

    const isInCart = (id) => {
        return carrito.find(producto => producto.id === id)
    }

    const valorContexto = { 
        carrito,
        cantidad,
        agregarProduc,
        eliminarProduc,
        vaciarCarrito
     }

     return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CartContext
