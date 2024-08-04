import React from 'react'
import './login.css'
import Input from '../../base/Input/Input'

function Login() {
  return (
    <div className="login-page-container">
        <div className="login-left-side">
            <div className="login-container">
                <h1 id='login-text'>Log In</h1>
                <form className='login-form'>
                    <Input type={"text"} placeholder={"Email"}/>
                    <Input type={"password"} placeholder={"Password"}/>
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
                <button id='signup-page-button'>SIGN UP</button>
            </div>
        </div>
    </div>
  )
}

export default Login