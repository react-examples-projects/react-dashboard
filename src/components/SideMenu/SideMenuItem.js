import { NavLink } from "react-router-dom";
import classnames from "classnames";
import css from "./SideMenu.module.scss";
import PropTypes from "prop-types";

function SideMenuItem({ className, text, icon: Icon, children, ...props }) {
  return (
    <NavLink
      to="/"
      className={classnames(
        "mb-4 d-flex align-items-center",
        css.sideMenuItem,
        className
      )}
      activeClassName={css.active}
      {...props}
    >
      <Icon className="mr-3" />
      {text}
      {children}
    </NavLink>
  );
}

SideMenuItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
    .isRequired,
};

export default SideMenuItem;
