import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import cls from "classnames";
import { BiQuestionMark, BiCommentDots, BiChevronDown } from "react-icons/bi";
import css from "./MenuNavbar.module.scss";

export default function MenuNavbar() {
  return (
    <Navbar bg="light" expand="md" className="mb-5 rounded-lg">
      <Form inline>
        <Form.Control placeholder="Search..." size="sm" />
      </Form>

      <div className="ml-auto d-inline-flex align-items-center">
        <BiQuestionMark className={css.navbarIconItem} />
        <BiCommentDots className={css.navbarIconItem} />
        <span
          className={cls(
            "font-weight-bolder text-capitalize",
            css.navbarUsername
          )}
        >
          Libardo rengifo
          <Dropdown className="d-inline-block w-auto ml-1" drop="left">
            <Dropdown.Toggle className="d-inline-block p-0 m-0 bg-transparent border-0">
              <BiChevronDown />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="pl-3">
                <small> Change password</small>
              </Dropdown.Item>
              <Dropdown.Item className="pl-3">
                <small> Change username</small>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </span>
        <img
          src="https://picsum.photos/35/35"
          alt="Your account"
          className="img-fluid rounded-circle d-block ml-2"
        />
      </div>
    </Navbar>
  );
}
