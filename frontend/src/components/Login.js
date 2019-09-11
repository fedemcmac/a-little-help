import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({ handleSubmit }) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div>
            <form onSubmit={e => {
            e.preventDefault();
            handleSubmit({ email, password });
            setEmail('')
            setPassword('')
        }}>                
                <input placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/><br />
                
                <input placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required/><br /><br />
                <input className="ButtonPinkCenter" type="submit" value="LOGIN"/>
            </form>

            <p className="toggleSignupLoginText" >Don't have an account?
            <Link id="signupLink" className="wordLink" to="/welcome/signup"> Sign Up</Link>
            </p>
        </div>
    )
}
export default Login