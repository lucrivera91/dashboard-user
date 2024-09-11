import { useAuth0 } from "@auth0/auth0-react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import { PuffLoader } from "react-spinners";

export const Dashboard = () => {
  const { isLoading, user } = useAuth0();

  return (
    <Container
      fluid
      className="bg-dark text-light"
      style={{ paddingTop: "80px", paddingBottom: "10px", minHeight: "100vh" }}
    >
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="profile">Perfil de Usuario</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Ver Usuarios</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="profile">
                {isLoading ? (
                  <Container
                    fluid
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "70vh" }}
                  >
                    <PuffLoader color="#26de86" />
                  </Container>
                ) : (
                  <Container fluid>
                    <Card className="ms-auto me-auto" bg="dark" text="light">
                      <Card.Body>
                        <Row>
                          <Col sm={2}>
                            <Card.Img
                              variant="top"
                              src={user.picture}
                              style={{ width: "150px"}}
                            />
                          </Col>
                          <Col sm={10}>
                            <ListGroup
                              className="list-group-flush"
                              data-bs-theme="dark"
                            >
                              <ListGroup.Item>
                                Email: {user.email}
                              </ListGroup.Item>
                              <ListGroup.Item>
                                Nombre: {user.name}
                              </ListGroup.Item>
                              <ListGroup.Item>
                                Usuario: {user.nickname}
                              </ListGroup.Item>
                            </ListGroup>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Container>
                )}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                Second tab content <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                dolores odit exercitationem incidunt maiores dicta eius
                doloremque porro recusandae. Provident ipsa quia at nam nobis
                ut. Earum illo incidunt sapiente. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Cumque cupiditate, temporibus
                similique, distinctio nulla quis dignissimos odio quae iure fuga
                repellat. Quos, vero explicabo? Id atque optio mollitia veniam
                in.
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};
