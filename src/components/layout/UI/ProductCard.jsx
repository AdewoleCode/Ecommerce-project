import React from 'react'
import '../../../styles/ProductCard.css'

import { HiOutlinePlus } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../../redux/slices/CartSlice'

import { toast } from 'react-toastify'

const ProductCard = ({ item }) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItemm({
      id: item.id,
      productName: item.productName,
      price: item.price,
      image: item.imgUrl,
    }))

    toast.success('product added to cart')
  }



  return (
    <Link to={`/shop/${item.id}`}>{item.productName}
      <div className='product__card'>
        <div className="product__img">
          <img src={item.imgUrl} alt="img" />
        </div>
        <h3 className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
        <span className="chair">{item.category}</span>
        <div className="product__card-bottom">
          <span className="price">${item.price}</span>
          <span className='icon' onClick={addToCart}>
            <HiOutlinePlus />
          </span>
        </div>

      </div>
    </Link>
  )
}

export default ProductCard