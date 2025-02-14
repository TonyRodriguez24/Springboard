import React from "react";

import useFields from "./hooks/useFields";
import { requestFormReset } from "react-dom";

const SignupForm = () => {
    const [formData, handleChange, resetForm] = useFields({
        username: '',
        password: '',
        email: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        resetForm()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            name='username' 
            onChange={handleChange} 
            value={formData.username} />

        </form>
    )
}

export default SignupForm;