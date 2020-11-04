import React from 'react'
import ReactDOM from 'react-dom'
import App from'./App'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {StateProvider} from "./StateProvider"
import reducer , {initialState} from "./reducer"
ReactDOM.render(
<React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
</React.StrictMode>,document.getElementById("root"))