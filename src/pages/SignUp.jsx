
import React, { useState } from 'react'


import { Link } from 'react-router-dom'

import '../pages/SignUp.css'

import '../pages/Login.css'


import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { setDoc, doc } from 'firebase/firestore';

import { auth } from '../Firebase-config'
import { storage } from '../Firebase-config';
import { db } from '../Firebase-config';

import { toast } from 'react-toastify'



const SignUp = () => {

  const registerUser = async(e) => {
    e.preventDefault()
    setLoading(true)

    createUserWithEmailAndPassword(auth, email, password).then(userInfo => {
      const userDetails = userInfo.user
      const storageRef = ref(storage, `images/${Date.now() + username}`)
      const uploadTask = uploadBytesResumable(storageRef, file)
      console.log(userDetails)

      
    }).catch(error => {
      toast.error('something went wrong')
    })
    // try {
    //   const userCredential = await createUserWithEmailAndPassword(auth, email, password)

    //   const user = userCredential.user

    //   console.log(user)
    //   console.log('helo')

  
      
    // } catch (error) {
      
    // }
  }


  const [username, setUsername] = useState('')
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <div className="login">
      <h3>Register</h3>
      <form action=""  onSubmit={registerUser}>
        <div className="name">
          <input type="text" placeholder='Username...' value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="name">
          <input type="email" placeholder='email...' value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="email">
          <input type="password" placeholder='Enter Your Password...'  value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        

        <div className="file">
          <input type="file" onChange={e => setFile(e.target.files[0])}/>
        </div>
        

        <button className='login__btn'>Sign Up</button>

        <h5>Already have an account?  <Link to='/login'><span >Click to login</span> </Link> </h5>
      </form>
    </div>
  )
}

export default SignUp