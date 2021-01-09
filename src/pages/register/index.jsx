import React from 'react'
import Form from '../../components/form'

export default function Register() {
    
    return (
        <div className="container register-container">
            <h1>Welcome to Register!</h1>
            <Form name={'Sign up'} hasRememberBox={false}/>
        </div>
    )
}