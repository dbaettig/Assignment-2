import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../shared/global/provider/UserProvider";

const Navigation = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("username");
    setAuthenticatedUser("");
    history.push("/");
  };

  return (
    <div className="navigationWrapper">
      <ul className="navigationList">
        <li className="navigationListItem home">
          <Link to="/">Home</Link>
        </li>
        <li className="navigationListItem profile">
          <Link to={"/profile"}>{authenticatedUser ? "Profile" : ""}</Link>
        </li>
        <li className="navigationListItem login">
          {!authenticatedUser ? (
            <Link to="/logIn">Login</Link>
          ) : (
            authenticatedUser
          )}
        </li>
        <li className="navigationListItem logout" onClick={() => logout()}>
          {authenticatedUser ? "Logout" : " "}
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
