import { Button, Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="bg-body-tertiary"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <i className="bi bi-people-fill me-1" />
          Gestión de Usuarios
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ms-auto me-3"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          className="me-2"
          variant="outline-primary"
          title="Iniciar Sesión"
        >
          <i className="bi bi-person-circle" style={{ fontSize: "1.5rem" }} />
        </Button>
      </Container>
    </Navbar>
  );
};
