import React from 'react'

import { Link } from 'react-router-dom'

import '../pages/Home.css'
import heroImg from '../assets/images/hero-img.png'

import Services from '../services/Services'

const Home = () => {

  const year = new Date().getFullYear()
  return (
    <>
    <section className='hero-section'>
      <div className="hero">
        <div className="hero-content">
          <p>Trendiing Poducts in {year} </p>
          <h2>Make Your Interior More Minimalistic And Modern</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quod, dolorem delectus, beatae mollitia quaerat laboru
            m atque blanditiis earum, vel maxime? Distinctio, corrupti ipsa. Fuga velit perferendis tempora incidunt optio.</p>

          <Link to='/shop' className="buy__btn"> SHOP NOW! </Link>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="sofa" />
        </div>
      </div>
    </section>
    <Services />
    </>

  )
}

export default Home