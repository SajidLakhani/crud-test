import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom'
import './styles.css'
function Login () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
        const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('user-info')){
            history.push("/view")
        }
    }, [])

   const handleSubmit = (e) => {
        e.preventDefault();
     
    }

    return (
        <div>
            <h1 className = 'heading'>Login</h1>
            <form className = "form" onSubmit={handleSubmit}>
            <input className = 'field' onChange = {(e)=>setEmail(e.target.value)}
             type="text" placeholder="Email"/><br/>
            <input className = 'field' onChange = {(e)=>setPassword(e.target.value)}
             type="password" placeholder="Password"/><br/>
            <button className = "button" onClick = {Login}>Login</button>
            </form>
        </div>
    );
};

export default Login;