import {
  BiHomeAlt,
  BiBarChart,
  BiFolder,
  BiCalendar,
  BiCog,
  BiLogOut,
} from "react-icons/bi";
import SideMenuItem from "./SideMenuItem";
import cs from "classnames";
import css from "./SideMenu.module.scss";

export default function SideMenu() {
  return (
    <nav className={cs("list-group", css.sideMenu)}>
      <SideMenuItem to="/" text="Overview" icon={BiHomeAlt} />
      <SideMenuItem to="/stats" text="Stats" icon={BiBarChart} />
      <SideMenuItem to="/projects" text="Projects" icon={BiFolder} />
      <SideMenuItem to="/calendar" text="Calendar" icon={BiCalendar} />
      <SideMenuItem to="/calendar" text="Calendar" icon={BiCalendar} />
      <SideMenuItem
        to="/settings"
        text="Settings"
        icon={BiCog}
        style={{ marginTop: "12rem" }}
      />
      <SideMenuItem to="/logout" text="Logout" icon={BiLogOut} />
    </nav>
  );
}
