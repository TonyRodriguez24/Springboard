import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul className="flex w-full justify-center items-center gap-20 p-4 bg-green-800 ">
        <p className="text-2xl">React Jobly Project</p>
        <Link to="/jobs" className="hover:text-amber-400">
          Jobs
        </Link>
        <Link to="/companies" className="hover:text-amber-400">
          Companies
        </Link>
        <Link to="/profile" className="hover:text-amber-400">
          Profile
        </Link>
        <Link to="/register" className="hover:text-amber-400">
          Register
        </Link>
        <Link to="/login" className="hover:text-amber-400">
          Login
        </Link>
      </ul>
    </>
  );
}
