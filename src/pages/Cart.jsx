import React from 'react'

import CommonSection from '../components/layout/UI/CommonSection'

import tdImg from '../assets/images/arm-chair-01.jpg'

import { RiDeleteBin6Line } from 'react-icons/ri'

import '../pages/Cart.css'

const Cart = () => {
  return (
    <>

      <CommonSection title='Shopping Cart' />

      <div className="cart__section">
        <div className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Qelete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={tdImg} alt="product image" /> </td>
              <td>Modern Arm Chair</td>
              <td>$299</td>
              <td>2px</td>
              <td>{RiDeleteBin6Line}</td>
            </tr>
          </tbody>
        </div>
      </div>


    </>
  )
}

export default Cart