import React from "react";
import Routing from "./routes/Routing";
import { UserProvider } from "./shared/global/provider/UserProvider";
import Navigation from "./components/Navigation";

function App() {
  return (
    <UserProvider>
      <Routing>
        <Navigation />
      </Routing>
    </UserProvider>
  );
}

export default App;
