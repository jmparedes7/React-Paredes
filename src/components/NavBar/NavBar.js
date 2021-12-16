import './NavBar.css'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

/*import Button from 'react-bootstrap/Button'*/


const NavBar = () => {
    return (
        <nav className='NavBar'>
            <div>
                <h3>HOLA :)</h3>
            </div>

            <div className='Categorias'>
                <NavLink to='/categoria/1'>INICIO</NavLink>
                <NavLink to='/categoria/2'>Juegos</NavLink>
                <NavLink to='/categoria/3'>Nosotros</NavLink>
            </div>

        <CartWidget />
            
        </nav>
    )
}

export default NavBar