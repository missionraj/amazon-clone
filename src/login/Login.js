import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from '../firebase';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password).then((auth)=> { 
            // logged in and redirect
            history.push("/");
        })
        .catch(e => alert(e.message))        
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
            history.push("/");
        }).catch(e=>alert(e.message)) 
    }
    return (
        <div className="login">

            <Link to="/" >
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG3.png" className="login__logo"/>
            </Link>
            <div className="login_container"> 
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event=>setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)}  type="password"/>
                    <button onClick={login} className="login_signInButton">Sign in</button>
                </form>
                <p> By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>
                <button onClick={register} className="login_registerButton"> create Your Amazon Account </button>
            </div>
        </div>
    )
}

export default Login
