

import React, {useState} from 'react'

import { Link } from 'react-router-dom'

import '../pages/Login.css'

const Login = () => {

  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')

  return (
    <div className="login">
      <h3>Login</h3>
      <form action="">
        <div className="name">
          <input type="email" placeholder='Enter Your Email...' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="email">
          <input type="password" placeholder='Enter Your Password...' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className='login__btn'>Login</button>

        <h5>Dont have an account yet?  <Link to='/signup'><span >Create an account</span> </Link> </h5>


      </form>
    </div>
  )
}

export default Login