import { Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Admin dashboard</Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="me-auto">
                    <Navbar.Text className='mx-1'>
                        <Link to="/products">Products</Link>
                    </Navbar.Text>
                    <Navbar.Text className='mx-1'>
                        <Link to="/user/cart">cart</Link>
                    </Navbar.Text>
                    <Navbar.Text className='mx-1'>
                        <Link to="/admin/dashboard">Admin dashboard</Link>
                    </Navbar.Text>
                    <Navbar.Text className='mx-1'>
                        <Link to="/admin/login">Admin login</Link>
                    </Navbar.Text>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login"></a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;