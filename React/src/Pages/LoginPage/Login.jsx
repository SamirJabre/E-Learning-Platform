import React  , { useState }from 'react'
import './login.css'
import Input from '../../base/Input/Input'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login({setUserInfo , userInfo}) {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try{
            const response = await fetch('http://127.0.0.1:6969/users/login',{
                method : 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log("Logged in successfully");
                setUserInfo(data);
                console.log(userInfo);
                navigate('/home')
            } else {
              alert('Error: ' + data.error);
            }

        }
        

        catch(error){
            console.error('Error:', error);
        }

    }




  return (
    <>
    <div className="login-page-container">
        <div className="login-left-side">
            <div className="login-container">
                <h1 id='login-text'>Log In</h1>
                <form className='login-form' onSubmit={handleLogin}>
                    <Input type={"text"} placeholder={"Email"} onchange={(e)=>{console.log(e.target.value);
                    setEmail(e.target.value)
                    }}/>
                    <Input type={"password"} placeholder={"Password"} onchange={(e)=>{console.log(e.target.value);
                    setPassword(e.target.value)
                    }}/>
                    <button id='login-button'>LOG IN</button>
                    <a id='forgot-password' href="#">Forgot your password?</a>
                </form>
            </div>
        </div>





        <div className="login-right-side">
            <div className="login-text-container">
                <h1 id='margin-top'>Welcome To</h1>
                <h1 id='margin-botton'>TheGeekFlux!</h1>
                <p>New Here ?</p>
                <button id='signup-page-button' onClick={()=>{navigate('/signup')}}>SIGN UP</button>
            </div>
        </div>
    </div>
    </>
  );
}

export default Login