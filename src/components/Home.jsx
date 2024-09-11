import { Button, Container } from "react-bootstrap";

export const Home = () => {
  return (
    <Container
      fluid
      className="bg-dark text-light"
      style={{ padding: "80px 0 10px 0", minHeight: "100vh" }}
    >
      <Container>
        <h1>Perfil de Usuario</h1>
        <p>
          Bienvenido a la página web de Gestión de Usuarios.
        </p>
        <p>Debe iniciar sesión para gestionar los usuarios</p>
        <Button>Iniciar Sesión</Button>
      </Container>
    </Container>
  );
};
