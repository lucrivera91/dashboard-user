import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Image, Navbar } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

export const NavBar = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } =
    useAuth0();

  return (
    <Navbar className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <i className="bi bi-people-fill me-1" />
          Gestión de Usuarios
        </Navbar.Brand>
        {isLoading ? (
          <Button
            className="me-2"
            variant="outline-secondary"
            title="Cargando..."
          >
            <ClipLoader size={27} color="#26de86" />
          </Button>
        ) : (
          <>
            {isAuthenticated ? (
              <>
                <Button className="ms-auto me-2" variant="outline-info">
                  <Image fluid roundedCircle src={user.picture} width="40px" title={user.name} />
                </Button>
                <Button
                  className="me-2"
                  variant="outline-danger"
                  title="Cerrar sesión"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <i className="bi bi-power" style={{ fontSize: "1.5rem" }} />
                </Button>
              </>
            ) : (
              <Button
                className="me-2"
                variant="outline-primary"
                title="Iniciar Sesión"
                onClick={() => loginWithRedirect()}
              >
                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "1.5rem" }}
                />
              </Button>
            )}
          </>
        )}
      </Container>
    </Navbar>
  );
};
