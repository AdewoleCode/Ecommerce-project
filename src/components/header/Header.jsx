import React from 'react'
import '../header/Header.css'

import { Link, NavLink, useNavigate } from 'react-router-dom'

import { BsHeartHalf } from 'react-icons/bs'
import { RiShoppingBagLine } from 'react-icons/ri'
import { HiMenu } from 'react-icons/hi'

import Logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { useSelector } from 'react-redux'
import UseAuth from '../../custom-hooks/UseAuth'

import { signOut } from 'firebase/auth'
import  auth  from '../../Firebase-config'

import { toast } from 'react-toastify'




const nav__links = [
  {
    path: "home",
    display: "Home"
  },
  {
    path: "shop",
    display: "Shop"
  },
  {
    path: "cart",
    display: "Cart"
  }
]





const Header = () => {

  const logout = () => {
    signOut(auth).then(()=> {
      toast.success('logged out')
      navigate('/home')
    }).catch((error)=> {
      toast.error(error.message)
    })
  }




  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const navigate = useNavigate()
  
  const currentUser = UseAuth()


  const navigateToCart = () => {
    navigate('/cart')
  }




  return (
    <section className='header-section'>
      <header className='header'>
        <div className="div">
          <div className='nav__wrapper'>
            <div className='logo'>
              <img src={Logo} alt='' />
              <div>
                <h1>Multimart</h1>
                {/* <p>Since 2008</p> */}
              </div>
            </div>

            <div className='navigation'>
              <ul className='menu'>
                {nav__links.map((nav, index) => (
                  <li className='nav__item' key={index}><NavLink to={nav.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{nav.display}</NavLink></li>
                ))}

                {/* <li className='nav__item'><NavLink to='/home'>Home</NavLink></li>
              <li className='nav__item'><NavLink to='/shop'>Shop</NavLink></li>
              <li className='nav__item'><NavLink to='/cart'>Cart</NavLink></li> */}
              </ul>
            </div>



            <div className='nav__icons'>
            <h3>{currentUser.displayName}</h3>
            {
              console.log(currentUser.displayName)
              // console.log(currentUser.displayName)

            }

              <span className='cart__icons'>
                <BsHeartHalf />
                <span className='badge'>1</span>
              </span>
              <span className='cart__icons'>
                <RiShoppingBagLine />
                <span className='badge' onClick={navigateToCart}>{totalQuantity}</span>
              </span>
              <span><img src={currentUser ? currentUser.photoURL : userIcon} alt='icon' /></span>

              {
                currentUser ? <span onClick={logout}>Logout</span> : <div> <Link to='/signup' >Signup</Link> <Link to='/signin' >Login</Link></div>
              }
            </div>

            <div className='mobile__menu'>
              <span>
                <HiMenu />
              </span>
            </div>
          </div>
        </div>
      </header>
    </section>

  )
}

export default Header