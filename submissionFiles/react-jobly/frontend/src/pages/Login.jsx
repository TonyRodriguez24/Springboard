import { useContext, useState } from "react";
import JoblyApi from "../../api";
import UserContext from "../UserContext";

export default function Login() {
  const INITIAL_STATE = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const {setCurrentUser} = useContext(UserContext)

  const handleSubmit = async (e) => {
    try {
       e.preventDefault();

       const response = await JoblyApi.login(formData);
        setCurrentUser({ username: formData.username})
       setFormData(INITIAL_STATE);
    } catch (error) {
      console.log(error)
    }
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const styles = "p-4 bg-gray-800 border-2 border-black rounded-md";

  return (
    <div className="p-3 flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl text-center">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col lg:w-1/6 gap-6">
        <input
          type="text"
          id="username"
          onChange={handleChange}
          value={formData.username}
          name="username"
          placeholder="Enter username"
          className={styles}
        />
        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
          name="password"
          placeholder="Enter password"
          className={styles}
        />

        <button className="py-3 px-4 rounded-md bg-blue-500 cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
}
