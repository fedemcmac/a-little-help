import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = ({ handleSubmit }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                handleSubmit({ username, email, password })
                setUsername('')
                setEmail('')
                setPassword('')
            }}>
                <input placeholder="Username" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} /><br />
                <input placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                <input placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
                <input className="ButtonPinkCenter" type="submit" value="SIGN UP"/>
            </form>
            <p className="toggleSignupLoginText" >Already have an account?
                <Link className="wordLink" to="/welcome/login"> Login</Link>
            </p>
        </div>
    )
}
// IF BROKEN ADD WITHROUTER
export default Signup