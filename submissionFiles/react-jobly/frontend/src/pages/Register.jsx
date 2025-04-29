import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import JoblyApi from "../../api";

export default function Register() {
  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  //even though using express.json() in backend still have to send application/json in headers
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await JoblyApi.register(formData);
      console.log(response);
      setFormData(INITIAL_STATE);
      navigate("/login");
    } catch (error) {
      console.log(error);
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
      <h1 className="text-2xl text-center">Register</h1>
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
        <input
          type="text"
          id="firstName"
          onChange={handleChange}
          value={formData.firstName}
          name="firstName"
          placeholder="Enter your first name"
          className={styles}
        />
        <input
          type="text"
          id="lastName"
          onChange={handleChange}
          value={formData.lastName}
          name="lastName"
          placeholder="Enter your last name"
          className={styles}
        />

        <input
          type="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
          name="email"
          placeholder="Enter email"
          className={styles}
        />
        <button className="py-3 px-4 rounded-md bg-blue-500 cursor-pointer">
          Register
        </button>
      </form>
    </div>
  );
}
