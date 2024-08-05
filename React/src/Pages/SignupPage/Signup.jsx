import React ,{useState} from 'react'
import Input from '../../base/Input/Input'
import './signup.css'
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [userData,setUserData] = useState();
    const dispatch = useDispatch();
    const handleSignup = () => {
        axios.post("http://127.0.0.1:6969/users/", {
            name: name,
            email: email,
            password: password,
        })
        .then((result) => {
            console.log(result);
            setUserData(result.data);
        })
        dispatch({ type: 'SET_RESPONSE', payload: userData });
    };

    
  return (
    <div className="signup-page-container">
        <div className="signup-left-side">
            <div className="signup-container">
                <h1 id='margin-top'>Welcome Back To</h1>
                <h1 id='margin-botton'>TheGeekFlux!</h1>
                <p>Already have an account ?</p>
                <button id='signup-page-button'>LOG IN</button>
            </div>
        </div>





        <div className="signup-right-side">
            <div className="signup-text-container">
                <h1 id='signup-text'>Create Account</h1>
                <form className='signup-form' onSubmit={handleSignup}>
                    <Input type={"text"} placeholder={"Name"} onchange={(e)=>{console.log(e.target.value);
                    setName(e.target.value)
                    }}/>
                    <Input type={"text"} placeholder={"Email"} onchange={(e)=>{console.log(e.target.value);
                    setEmail(e.target.value)
                    }}/>
                    <Input type={"password"} placeholder={"Password"} onchange={(e)=>{console.log(e.target.value);
                    setPassword(e.target.value)
                    }}/>
                    <button id='signup-button'>SIGN UP</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup