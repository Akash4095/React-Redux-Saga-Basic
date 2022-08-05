import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Header = () => {



    // calling data from redux using useSelector
    const result = useSelector((state) => state.cartData)
    console.log(result, '----state')

    return (
        <div className='header'>
            <Link to='/'>
                <h1 className='logo'>E-Comm  </h1>
            </Link>
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