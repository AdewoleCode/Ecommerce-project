import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '../assets/data/products'
import CommonSection from '../components/layout/UI/CommonSection'

import './ProductDetails.css'

const ProductDetails = () => {

  const { id }= useParams()

  const products = Products.find(item => item.id === id)

  const {productName, imgUrl, price, description} = products



  return (
    <>

    <CommonSection title={productName} />

    <div className="product__detail">
      <div className="image">
        <img src={imgUrl} alt="" />
      </div>

      <div className="item__details">
        <h3>{productName}</h3>
        <h3>{price}</h3>
        <h3>{description}</h3>

      </div>

    </div>
    
    </>
  )
}

export default ProductDetails