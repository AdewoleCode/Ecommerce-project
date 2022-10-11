import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import '../pages/Home.css'
import heroImg from '../assets/images/hero-img.png'

import products from '../assets/data/products'

import Services from '../services/Services'
import ProductList from '../components/layout/UI/ProductList'





const Home = () => {
  const [data, setData] = useState(products)


  const year = new Date().getFullYear()
  useEffect(() => {
    const filteredProducts = products.filter(item => item.category === 'chair')
    setData(filteredProducts)
  }, [])



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

      <section className="trending__products">
        <h2 className='section__title'>Trending Products</h2>
        <div className="product__items">
          <ProductList data={data} />
        </div>

      </section>
    </>

  )
}

export default Home