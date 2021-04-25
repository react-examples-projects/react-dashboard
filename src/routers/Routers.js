import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../pages/home/App";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
