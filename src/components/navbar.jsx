import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link} from "react-router-dom"
import CartWidget from './cartwidget';

function NavBarExample() {
  return (
    <>
    <Navbar expand="lg" className="navBg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Limon Bar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">Sobre Nostros</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    <section>
        <Outlet></Outlet>
    </section>
    </>
    
  );
}

export default NavBarExample;