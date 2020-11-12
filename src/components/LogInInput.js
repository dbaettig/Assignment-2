import React, { useState, useContext } from "react";
import { UserContext } from "../shared/global/provider/UserProvider";
import { useHistory } from "react-router-dom";

const LogInInput = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const history = useHistory();

  const handleLogin = () => {
    setAuthenticatedUser(username);
    localStorage.setItem("username", username);
    if (username) {
      history.push("/profile/");
    }
  };
  return (
    <div className="inputWrapper">
      <input
        placeholder="username"
        onChange={e => setUsername(e.target.value)}
        type="name"
        value={username}
      />
      <br />
      <button onClick={() => handleLogin()}>Log in</button>
    </div>
  );
};

export default LogInInput;
