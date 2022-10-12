import React from 'react'
import '../../../styles/ProductCard.css'

import {HiOutlinePlus} from 'react-icons/hi'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
  return (
    <div className='product__card'>
        <div className="product__img">
            <img src={item.imgUrl} alt="img" />
        </div>
        <h3  className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
        <span className="chair">{item.category}</span>
        <div className="product__card-bottom">
            <span className="price">${item.price}</span>
            <span className='icon'>
                <HiOutlinePlus />
            </span>
        </div>

    </div>
  )
}

export default ProductCard