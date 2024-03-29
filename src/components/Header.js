import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { productSearch } from '../redux/actions'


const Header = () => {

    // calling data from redux using useSelector
    const result = useSelector((state) => state.cartData)
    console.log(result, '----state')
    const dispatch = useDispatch()

    return (
        <div className='header'>
            <Link to='/'>
                <h1 className='logo'>E-Comm  </h1>
            </Link>
            <div className="search-box">
                <input type="text" placeholder='Search Prducts' onChange={(e) => dispatch(productSearch(e.target.value))} />
            </div>
            <Link to='/cart'>
                <div className='cart' >
                    <span>{result.length}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                </div>
            </Link>
        </div>
    )
}

export default Header