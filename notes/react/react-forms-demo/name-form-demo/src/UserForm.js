import React, { useState } from "react";

export default function UserForm() {
    const INITIAL_STATE = {
        username: '',
        email: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        const { username, email } = formData
        e.preventDefault();
        alert(`Created user, ${username} ${email}`)
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input
                id='username'
                name="username"
                placeholder='username'
                type='text'
                value={formData.username}
                onChange={handleChange} />

            <label htmlFor='email'>Email</label>
            <input
                id='email'
                name="email"
                placeholder='email'
                type='email'
                value={formData.email}
                onChange={handleChange} />


            <button>Add to list</button>
        </form>
    )
}