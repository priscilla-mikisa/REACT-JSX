import './index.css'
import { useState } from 'react';
import { login } from './utils';
import Users from '../Users';


const Login = ()=>{
    const [username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    // const[isOpen, setIsOpen] = useState(true)
    const handleSubmit = async(event) =>{
        event.preventDefault();
        const results = await login({username,password});
        console.log({results});
    }
    return(
        <form onSubmit={handleSubmit} action='Users/index.js'>
           <h2>Login</h2>
            <input placeholder="Enter username" type="text" onChange={(event)=>setUsername(event.target.value)}/>
                <br/>
            <input placeholder="Enter password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
            <br/>
            {/* <a href={`/${Users}`}> */}
            <button type="submit" >Login</button>
            {/* </a> */}
        </form>
    )
}
export default Login;