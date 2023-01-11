import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../Media/logo.png"
import { CartWidget } from '../CartWidget/CartWidget';
import "../NavBar/NavBar.scss"
import { Link } from 'react-router-dom';

export const NavBar = () => {


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"> <img className="header__logo" alt="logo" src={logo} /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav >
                        <Link className="me-3 text-white text-decoration-none btn btn-dark" to="/"> Inicio </Link>
                        <Link className="me-3 text-white text-decoration-none btn btn-dark" to="productos/celular">Celulares </Link >
                        <Link className="me-3 text-white text-decoration-none btn btn-dark" to="productos/monitor">Monitores </Link >
                        <Link className="me-3 text-white text-decoration-none btn btn-dark" to="productos/periferico">Perifericos </Link >
                    </Nav>
                </Navbar.Collapse>
                <CartWidget contador="0" />
            </Container>
        </Navbar >

    )
}
