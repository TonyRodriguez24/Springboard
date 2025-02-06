import React, { useState } from "react";

const SimpleForm = () => {
    const INITIAL_STATE = {
        email: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const [isInvalid, setIsInvalid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);
    const handleChange = (e) => {
        setIsTouched(true)
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email } = formData;

        alert(`Added you to mailing list king ${email}`)
        setFormData(INITIAL_STATE)
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Email</label>
            <input
                id="email"
                type='email'
                name='email'
                placeholder="email name"
                value={formData.email}
                onChange={handleChange}
            />
            {isInvalid && isTouched && <span style={{ color: 'red' }}>Email can't be blank</span>}
            <button>Add Item</button>
        </form>
    )


}

export default SimpleForm;
