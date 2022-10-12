import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import '../pages/Home.css'
import heroImg from '../assets/images/hero-img.png'

import products from '../assets/data/products'

import Services from '../services/Services'
import ProductList from '../components/layout/UI/ProductList'

import counterImg from '../assets/images/counter-timer-img.png'

import Clock from '../components/layout/UI/Clock'





const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [watchProducts, setWatchProducts] = useState([])






  const year = new Date().getFullYear()
  useEffect(() => {
    const filteredTrendingProducts = products.filter(item => item.category === 'chair')
    const filteredBestSalesProducts = products.filter(item => item.category === 'sofa')
    const filteredMobileProducts = products.filter(item => item.category == 'mobile')
    const filteredWirelessProducts = products.filter(item => item.category == 'wireless')
    const filteredWatchProducts = products.filter(item => item.category == 'watch')





    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setWatchProducts(filteredWatchProducts)
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
          <ProductList data={trendingProducts} />
        </div>
      </section>

      <section className="best__sales">
        <h2 className='section__title'>Best Sales</h2>
        <div className="best__items">
          <ProductList className='best' data={bestSalesProducts} />
        </div>
      </section>


      <section className="timer__countdown">
        <div className="timer">
          <div className="timer__text">
            <div className="clock__top">
              <h4>Limited Offfers</h4>
              <h3>Quality Armchairs</h3>
            </div>
            <Clock />
            <Link to='/shop' className="buy__btn white"> Visit Store</Link>
          </div>
          <div className="timer__image">
            <img src={counterImg} alt="counter img" />
          </div>
        </div>

      </section>


      <section className="new__arrivals">
        <h2 className='section__title'>New Arrivals</h2>
        <div className="new__arrivals-item">
          <ProductList data={mobileProducts} />
          <ProductList data={wirelessProducts} />
        </div>
      </section>



      <section className="new__arrivals">
        <h2 className='section__title'>Popular in Category</h2>
        <div className="new__arrivals-item">
          <ProductList data={watchProducts} />
        </div>
      </section>




    </>

  )
}

export default Home