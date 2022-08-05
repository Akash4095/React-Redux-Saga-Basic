import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartData = useSelector(state => state.cartData)
    console.log(cartData, '---cartData')
    const amount = cartData.length && cartData.map((item) => item.price).reduce((prev, next) => prev + next)
    console.log(amount, '--amt')
    return (
        <div>
            <Link to='/'>
                Product List
            </Link>
            <h1>Cart Page</h1>
            <div className="cart-page-container">
                <table>

                    <tr>
                        <td>Name</td>
                        <td>Color</td>
                        <td>Price</td>
                    </tr>

                    {
                        cartData.map((item) =>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.color}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    }
                </table>

                <div className="price-details">
                    <div className='adjust-price'><span>Amount  </span><span className='amt'>{amount}</span> </div>
                    <div className='adjust-price'><span>Discount</span> <span className='dis'>{amount / 10}(10%)</span></div>
                    <div className='adjust-price'><span>Total  </span> <span className='amt'>{ amount - (amount / 10)}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Cart