import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <Container
      fluid
      className="bg-dark text-light"
      style={{ paddingTop: "80px", paddingBottom:"10px", minHeight: "100vh" }}
    >
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Perfil de Usuario</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Ver Usuarios</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                First tab content <br /> Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Vero dolores odit exercitationem incidunt
                maiores dicta eius doloremque porro recusandae. Provident ipsa
                quia at nam nobis ut. Earum illo incidunt sapiente. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Cumque cupiditate,
                temporibus similique, distinctio nulla quis dignissimos odio
                quae iure fuga repellat. Quos, vero explicabo? Id atque optio
                mollitia veniam in.
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
