import React from 'react'
import './input.css'

function Input({type, placeholder}) {
  return (
    <input id='login-signin-input' type={type} placeholder={placeholder}/>
  )
}

export default Input