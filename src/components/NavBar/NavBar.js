import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../Media/logo.png"
import { CartWidget } from '../CartWidget/CartWidget';
import "../NavBar/NavBar.scss"

export const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"> <img className="header__logo" alt="logo" src={logo} /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav >
                        <Nav.Link className="nav__item" href="#inicio">Inicio</Nav.Link>
                        <Nav.Link className="nav__item" href="#celulares">Celulares</Nav.Link>3
                        <Nav.Link className="nav__item" href="#monitores">Monitores</Nav.Link>
                        <Nav.Link className="nav__item" href="#perifericos">Perifericos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget contador="5" />
            </Container>
        </Navbar>

    )
}
