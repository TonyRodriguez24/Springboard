import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ColorsForm({ setColors }) {
  const INITIAL_STATE = { name: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setColors((prevColors) => [...prevColors, formData]);

    navigate("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Color Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ColorsForm;
