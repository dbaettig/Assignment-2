import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../view/Home";
import Profile from "../view/Profile";
import LogIn from "../view/LogIn";
import { UserContext } from "../shared/global/provider/UserProvider";

const Routing = props => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const checkUserAuthentication = () => {
    setAuthenticatedUser(localStorage.getItem("username"));
  };

  useEffect(() => {
    checkUserAuthentication();
  });

  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path="/logIn" component={LogIn} />
        <Route exact path="/profile" component={Profile} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default Routing;
