import React, { useState } from "react";

export default function NewBoxForm({ addBox }) {
  const INITIAL_STATE = {
    backgroundColor: "",
    width: "",
    height: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.backgroundColor || !formData.width || !formData.height) {
      alert("all are required");
      return;
    }

    addBox({
      backgroundColor: formData.backgroundColor,
      width: formData.width,
      height: formData.height,
    });

    setFormData(INITIAL_STATE);
  };

  const handleChange = (e) => {
      //in handle change we get the event target and set the target name : value
      //call setFormData({...formData, [name]: value})
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h1>New Box Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="backgroundColor">Background color</label>
        <input
          id="backgroundColor"
          type="text"
          name="backgroundColor"
          placeholder="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />

        <label htmlFor="width">Width</label>
        <input
          id="width"
          type="text"
          name="width"
          placeholder="width"
          value={formData.width}
          onChange={handleChange}
        />

        <label htmlFor="height">Height</label>
        <input
          id="height"
          type="text"
          name="height"
          placeholder="height"
          value={formData.height}
          onChange={handleChange}
        />

        <button>Add New Box</button>
      </form>
    </>
  );
}
