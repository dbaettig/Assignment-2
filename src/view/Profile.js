import React, { useContext } from "react";
import { UserContext } from "../shared/global/provider/UserProvider";
const Profile = props => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  return (
    <div className="profilePageWrapper">
      <h1>Profile</h1>
      <h2>Welcome {authenticatedUser}</h2>
    </div>
  );
};
export default Profile;
