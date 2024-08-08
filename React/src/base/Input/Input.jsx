import React from 'react'
import './input.css'

function Input({type, placeholder , onchange}) {
  return (
    <input id='login-signin-input' type={type} placeholder={placeholder} onChange={onchange} required/>
  )
}

export default Input