import React, { useEffect, useState } from 'react'
import { addProducts, addToCart, emptyCart, removeFromCart } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {

  // const productdata = useSelector(state => state.productData)

const productdata =[
  {
    "id": 1,
    "name": "redmi 5",
    "color": "black",
    "price": 15000,
    "photo": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-8-cosmic-purple.jpg"
  },
  {
    "id": 2,
    "name": "Ear-buds",
    "color": "black",
    "price": 2000,
    "photo": "https://5.imimg.com/data5/SELLER/Default/2020/10/MF/DR/SO/12721597/airpods-pro-ith-charging-case-earpods-airpods-earbuds-earphones-with-mic-for-android-ios-smartphones-500x500.jpg"
  },
  {
    "id": 3,
    "name": "Laptop",
    "color": "black",
    "price": 45000,
    "photo": "https://images.hindustantimes.com/tech/img/2021/12/31/960x540/DSC_1295_1639757951972_1640957855261.jpg"
  },
  {
    "id": 4,
    "name": "Shoes",
    "color": "red",
    "price": 1800,
    "photo": "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg"
  },
  {
    "id": 5,
    "name": "Speaker",
    "color": "red",
    "price": 1800,
    "photo": "https://media.pitchfork.com/photos/60ba7b731f4fa08be04d867b/master/w_1600%2Cc_limit/audioengine-a1.jpg"
  }
]

  // sending data in redux using dispatch
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addProducts())
  }, [])
  console.log(productdata)



  return (
    <div>
      <button onClick={() => dispatch(emptyCart())} >EMT Cart</button>
      <br />
      <br />
      <div className="product-container">
        {
          productdata.map((item) =>
            <div className='product-item' key={item.id} >
              <img src={item.photo} alt="" />
              <div>Name: {item.name}</div>
              <div>Color: {item.color}</div>
              <div>Name: {item.price}</div>
              <div>
                <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
                <button onClick={() => dispatch(removeFromCart(item.id))} >Remove to cart</button>
              </div>
            </div>
          )

        }
      </div>
    </div>
  )
}

export default Main