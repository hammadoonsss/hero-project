import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/components/header.css'

const ListHeader = () => (
    
        <div className='header' >
            <h1 className="header_title">My Heroes</h1>
            <Link to='/dashboard'><button className="header_button">Dashboard</button></Link>
            <Link to='/add'><button className="header_button">Add Hero</button></Link>
        </div>
    
)
export default ListHeader