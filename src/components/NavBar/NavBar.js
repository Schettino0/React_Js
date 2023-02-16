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
                <Link className='me-2 carrito' to="/carrito"><CartWidget contador={contador} /> </Link>
                {
                    user.logged
                        ? <>
                            <Link to={"/myorders"} className='btn btn-dark me-2'>Mis Ordenes</Link>
                            <Link to={"/"} className='btn btn-danger' onClick={logout} >Logout</Link>
                        </>
                        : <>
                            <Link to="/login" className='btn btn-primary me-3'>Ingresar</Link>
                            <Link to="/register" className='btn btn-primary me-3'>Registrar</Link>
                        </>
                }

            </Container>
        </Navbar >

    )
}
