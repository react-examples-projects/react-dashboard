import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MenuBavbar from "../MenuNavbar/MenuNavbar";
import SideMenu from "../SideMenu/SideMenu";
import cs from "classnames";
import css from "./Layout.module.scss";
function Layout({ children }) {
  return (
    <Container className={cs("my-5", css.container)}>
      <Row>
        <Col
          md={12}
          lg={3}
          className={cs("mt-5 border-right pr-0", css.layoutSideColumn)}
        >
          <h1 className={cs("font-weight-bold", css.layoutTitle)}>.studio</h1>
          <SideMenu />
        </Col>

        <Col md={12} lg={9} className="mt-5 pl-4">
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
