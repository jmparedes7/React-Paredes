import ItemCount from '../ItemCount/ItemCount'
import ItemDetail from '../ItemDetail'
import './Item.css'

const Item = ({productos}) => {

    const agregarCarrito = () => {
        console.log ("agregaste al carrito")
    }
    return (
        <div className = "Card">
            <div className = "Conteiner">
                <h2 className = "ItemHeader">
                    {productos.nombre}
                </h2>
             </div>

            <img src = {productos.imagen} className="ItemImg"/>

            <p className= "Info">
                Precio: {productos.precio}
            </p>

            <div className='Count'>
                <ItemCount stock={productos.stock} onAdd={agregarCarrito} initial={1} />
            </div>

        </div>
    )
}

export default Item