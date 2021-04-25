import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SideMenu from "./components/SideMenu/SideMenu";
import MenuBavbar from "../../components/MenuNavbar/MenuNavbar";

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={3} lg={3} className="mt-5 border-right pr-0">
          <h1
            style={{ fontSize: "1.3rem", marginBottom: "4rem" }}
            className="font-weight-bold"
          >
            .studio
          </h1>
          <SideMenu />
        </Col>

        <Col md={9} lg={9} className="mt-5 pl-4">
          <MenuBavbar />
          <h4 className="font-weight-bold mb-4">Overview</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            similique provident molestias consequuntur error voluptas eos
            explicabo, autem ut a iusto soluta quod officia laboriosam, cum
            nihil reiciendis, molestiae voluptatibus.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
