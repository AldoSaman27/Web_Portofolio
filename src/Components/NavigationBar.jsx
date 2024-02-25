import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="/" className="fw-bold">Aldo Saman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                            <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
                            <Nav.Link onClick={() => navigate('/skill')}>Skills</Nav.Link>
                            <Nav.Link onClick={() => navigate('/project')}>Project</Nav.Link>
                            <Nav.Link onClick={() => navigate('/contact')}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar;