import React from 'react'
import Input from '../../base/Input/Input'
import './signup.css'

function Signup() {
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
                <form className='signup-form'>
                    <Input type={"text"} placeholder={"Name"}/>
                    <Input type={"text"} placeholder={"Email"}/>
                    <Input type={"password"} placeholder={"Password"}/>
                    <button id='signup-button'>SIGN UP</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup