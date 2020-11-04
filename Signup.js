import React, { useState } from 'react'
import { auth } from './Firebase';
import { Link, useHistory } from "react-router-dom"
import "./Signup.css"
function Signup() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
           alert("User is created")
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="signup">
          <div className="signup_form">
               <h1>Sign Up</h1>
               <form> 
               <div className=" space row">
                <div className="col">
                <input type="text" className="form-control" placeholder="First name"/>
               </div>
               <div className="col">
                <input type="text" className="form-control" placeholder="Last name"/>
              </div>
              </div>
               <div className="form-group">
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                 <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
               </div>
             
              <button onClick={register} className=" btn btn-primary signup_registerButton">Sign Up</button>
               <div className="signup_text">
                 <p> Have an account? </p>
                 <Link className="signup_text_link" to = "/">
                 <p>Sign In</p>
                 </Link>
                 </div>
             </form>
             
          </div>      
        </div>
    )
}

export default Signup
