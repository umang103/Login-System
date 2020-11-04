import React, { useState } from 'react'
import { auth } from './Firebase';
import { Link, useHistory } from "react-router-dom"
import "./Login.css"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");


    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/display')
        })
        .catch(error => alert(error.message))
    }
  
    return (
         <div className="login">
             <div className="login_form">

               <h1>Sign In</h1>
               <form>
                 <div className="form-group">
                 <label for="exampleInputEmail1">Email address</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                 </div>
                 <div className="form-group">
                 <label for="exampleInputPassword1">Password</label>
                 <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                <button type="submit" onClick={signIn} className=" login_signInButton btn btn-primary">Sign In</button>
                <div className="login_text">
                 <p> Don't have an account? </p>
                 <Link className="login_link" to = "/signup">
                 <p>Sign Up</p>
                 </Link>
                 </div>
               </form>
             
          </div>      
        </div>
    )
}

export default Login
