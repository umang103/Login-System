import React, {useEffect} from 'react'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
import Signup from './Signup';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';
import Display from './Display';
function App() {
const[ {user}, dispatch ] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
          console.log("the user is >>>> ", authUser);
          if(authUser) {
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
          } else {
            dispatch({
              type: 'SET_USER',
              user: null
            })
          }
        })
      }, [])
    return (
         <div className="app">
             <Router>
             <Switch>
               <Route path = "/signup">
                 <Signup/>
               </Route>
               <Route path = "/display">
                <Display/>
               </Route>
               <Route path = "/">
                <Login/>
               </Route>
            </Switch>
            </Router>         
          </div>
        
    )
}

export default App
