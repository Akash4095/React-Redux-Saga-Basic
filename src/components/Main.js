import React, { useState } from 'react'
import { addProducts, addToCart, emptyCart, removeFromCart } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {

  const productdata= useSelector(state=> state.productData )

  // sending data in redux using dispatch
  const dispatch = useDispatch()
  const product = {
    name: "I Phone",
    type: "mobile",
    price: 100000,
    color: "red"

  }

 
  console.log(productdata)

  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))} >ADD Cart</button>
      <br />
      <br />
      <button onClick={() => dispatch(removeFromCart(product))} >SUB Cart</button>
      <br />
      <br />
      <button onClick={() => dispatch(emptyCart(product))} >EMT Cart</button>
      <br />
      <br />
      <button onClick={() => dispatch(addProducts(product))} >ADD Products</button>
    </div>
  )
}

export default Main