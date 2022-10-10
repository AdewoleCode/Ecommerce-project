import React from 'react'
import '../../../styles/ProductCard.css'

import {HiOutlinePlus} from 'react-icons/hi'

import productImg from '../../../assets/images/arm-chair-01.jpg'

import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className='product__card'>
        <div className="product__img">
            <img src={productImg} alt="img" />
        </div>
        <h3  className="product__name"><Link to='/shop/id'>Modern armchair</Link></h3>
        <span className="chair">Chair</span>
        <div className="product__card-bottom">
            <span className="price">$299</span>
            <span className='icon'>
                <HiOutlinePlus />
            </span>
        </div>

    </div>
  )
}

export default ProductCard