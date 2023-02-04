import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../Media/logo.png"
import { CartWidget } from '../CartWidget/CartWidget';
import "../NavBar/NavBar.scss"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useLoginContext } from '../context/LoginContext';

export const NavBar = () => {
    const { cart } = useContext(CartContext)
    const { user, logout } = useLoginContext()
    const contador = cart.length
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/"><Navbar.Brand> <img className="header__logo" alt="logo" src={logo} /> </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav >
                        <Link className="me-3 text-white text-decoration-none btn btn-dark" to="/"> Inicio </Link>
                        <Link className="me-3 text-white text-decoration-none btn btn-dark" to="productos/celular">Celulares </Link >
                        <Link className="me-3 text-white text-decoration-none btn btn-dark" to="productos/monitor">Monitores </Link >
                        <Link className="me-3 text-white text-decoration-none btn btn-dark" to="productos/periferico">Perifericos </Link >
                    </Nav>
                </Navbar.Collapse>
                <Link  className='me-2 carrito' to="/carrito"><CartWidget contador={contador} /> </Link>
                <button  className='btn btn-danger me-3' onClick={logout}>Logout</button>


            </Container>
        </Navbar >

    )
}
