


import React from 'react'


import { Link } from 'react-router-dom'

import '../pages/SignUp.css'

const SignUp = () => {
  return (
    <div className="signup">
      <h3>Login</h3>
      <form action="">
        <div className="name">
          <input type="text" placeholder='Enter Your Email...' />
        </div>
        <div className="email">
          <input type="password" placeholder='Enter Your Password...' />
        </div>

        <button className='login__btn'>Sign Up</button>

        <h5>Already have an account?  <Link to='login'><span >Click to login</span> </Link> </h5>


      </form>
    </div>
  )
}

export default SignUp