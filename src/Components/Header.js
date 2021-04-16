import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/components/header.css'

const Header = () => (
    
        <div className='header' >
            <h1 className="header_title">Tour of Heroes</h1>
            <Link to='/dashboard'><button className="header_button">Dashboard</button></Link>
            <Link to='/heroes'><button className="header_button">Heroes</button></Link>
        </div>
    
)
export default Header