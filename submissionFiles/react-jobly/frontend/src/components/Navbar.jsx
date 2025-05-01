import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";

export default function Navbar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  function logout() {
    localStorage.removeItem("token");
    setCurrentUser(null);
  }
  return (
    <>
      <ul className="flex w-full justify-center items-center gap-20 p-4 bg-green-800">
        {currentUser ? (
          <p>Welcome {currentUser.username}</p>
        ) : (
          <p>React Jobly</p>
        )}

        <Link to="/jobs" className="hover:text-amber-400">
          Jobs
        </Link>
        <Link to="/companies" className="hover:text-amber-400">
          Companies
        </Link>

        {currentUser && (
          <Link to="/profile" className="hover:text-amber-400">
            Profile
          </Link>
        )}
        {!currentUser && (
          <Link to="/register" className="hover:text-amber-400">
            Register
          </Link>
        )}

        {currentUser ? (
          <button
            onClick={() => {
              logout();
            }}
            className="hover:text-amber-400">
            Logout
          </button>
        ) : (
          <Link to="/login" className="hover:text-amber-400">
            Login
          </Link>
        )}
      </ul>
    </>
  );
}
