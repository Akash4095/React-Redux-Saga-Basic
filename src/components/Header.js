import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    

// calling data from redux using useSelector
    const result = useSelector((state) => state.cartData)
    console.log(result, '----state')

    return (
        <div className='header'>
            <div className='cart'>
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
            </div>
        </div>
    )
}

export default Header