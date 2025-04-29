import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserContext from "./UserContext";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Navbar />
      <Outlet />
    </UserContext.Provider>
  );
}

export default App;
