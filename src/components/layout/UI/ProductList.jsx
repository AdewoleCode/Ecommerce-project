import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  return (
    <>
      {
        data.map(item => {
          return (
            <ProductCard item={item} />
          )
        })
      }
    </>
  )
}

export default ProductList