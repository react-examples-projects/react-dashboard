import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MenuBavbar from "../MenuNavbar/MenuNavbar";
import SideMenu from "../SideMenu/SideMenu";

function Layout({ children }) {
  return (
    <Container className="my-5">
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
          {children}
        </Col>
      </Row>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
    .isRequired,
};

export default Layout;
