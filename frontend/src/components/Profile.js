import React from 'react';
import { Link } from 'react-router-dom'

const Profile = ({ username, email, created_jobs, helping_jobs, logOut }) => {
    return(
        <div>
            <h3>Username: {username}</h3>
            <h3>{email}</h3>
            <h3>Tasks created:{created_jobs.length}</h3>
            <h3>Tasks booked:{helping_jobs.length}</h3>
            {/* implement photo upload */}
            <h3>add link to instructions & edit informations</h3>
            <button><Link className="wordLink" to="/instructions" >INSTRUCTIONS</Link></button>
            <button>EDIT YOUR DETAILS</button>
            <div><button onClick={logOut}>LOG OUT</button></div> 

        </div>
    )
}

export default Profile