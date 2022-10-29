

import React from 'react'

import { Link } from 'react-router-dom'

import '../pages/Login.css'

const Login = () => {
  return (
    <div className="login">
      <h3>Login</h3>
      <form action="">
        <div className="name">
          <input type="text" placeholder='Enter Your Email...' />
        </div>
        <div className="email">
          <input type="password" placeholder='Enter Your Password...' />
        </div>

        <button className='login__btn'>Login</button>

        <h5>Dont have an account yet?  <Link to='signup'><span >Create an account</span> </Link> </h5>


      </form>
    </div>
  )
}

export default Login