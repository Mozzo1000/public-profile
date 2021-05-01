import React, { useState }from 'react'
import PropTypes from 'prop-types';

export default function Register({ setToken }) {
    const [firstName, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [status, setStatus] = useState();
    
    const registerUser = (credentials) => {
        return fetch('/v1/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then(data => {
            console.log(data)
            if(data.ok) {
                setStatus('Account registration complete, please login!');
                data.json().then((data2) => {
                    console.log(data2)
                    setToken(data2['access_token']);
                });
            }else if(data.status === 409) {
                setStatus('There is already an account registered with this email.')
            }else {
                setStatus('Unknown error occurred, please try again later.')
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        registerUser({
            "email": email,
            "password": password,
            "first_name": firstName
        });
    }

    return (
        <div>
            <p>{status}</p>
            <h1>Register account</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>First name</p>
                    <input type="text" onChange={e => setFirstName(e.target.value)}></input>
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)}></input>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}></input>
                </label>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}
Register.propTypes = {
    setToken: PropTypes.func.isRequired
  }