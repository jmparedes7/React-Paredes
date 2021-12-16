import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({productos}) => {
    console.log ('aca estan los productos de ItemList', productos)

    return (
        <ul className='ListGroup'>
            {productos.map(productos =><Item key={productos.id} productos={productos}/>)}

        </ul>
    )
}

export default ItemList