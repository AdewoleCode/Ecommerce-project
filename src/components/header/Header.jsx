import React from 'react'
import '../header/Header.css'

import { NavLink } from 'react-router-dom'

import { BsHeartHalf } from 'react-icons/bs'
import { RiShoppingBagLine } from 'react-icons/ri'
import { HiMenu } from 'react-icons/hi'

import Logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'



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
  return (
    <section className='header-section'>
      <header className='header'>
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
            <span className='cart__icons'>
              <BsHeartHalf />
              <span className='badge'>1</span>
            </span>
            <span className='cart__icons'>
              <RiShoppingBagLine />
              <span className='badge'>1</span>
            </span>
            <span><img src={userIcon} /></span>
          </div>

          <div className='mobile__menu'>
            <span>
              <HiMenu />
            </span>
          </div>
        </div>
      </header>
    </section>

  )
}

export default Header