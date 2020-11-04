import React from 'react'
import { Link } from 'react-router-dom';
import "./Display.css"
import { useStateValue } from './StateProvider'
function Display() {
    const[{user}, dispatch] = useStateValue();
    return (
        <div className="display">
            <h1>Thanks for login  { !user ? 'Guest': user.email} </h1>
            <Link className="display_link" to="/">
             <button className="btn btn-primary">{user ? 'sign out': 'sign In'}</button> 
            </Link>
        </div>
    )
}

export default Display
