import React, { useState }from 'react'
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

export default function Login({ setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [status, setStatus] = useState();
    const history = useHistory();

    const loginUser = (credentials) => {
        return fetch('/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then(data => {
            console.log(data)
            if(data.ok) {
                data.json().then((data2) => {
                    console.log(data2)
                    setToken(data2);
                    history.push('/')
                });
            }else {
                setStatus('Unknown error occurred, please try again later.')
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        loginUser({
            "email": email,
            "password": password
        });
    }

    return (
        <div>
            <p>{status}</p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }