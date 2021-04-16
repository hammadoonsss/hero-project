
import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Header from './Header'
import '../styles/components/dashboard.css'
const random = [0, 0, 0, 0]
for (let i = 0; i < 4; i++)
{
    const ran = Math.floor(Math.random() * (10) + 11)
    if (random.includes(ran.toString())) {
        i--
    }
    else {
        random[i] = ran.toString();
    }
}
console.log(random)


const Dashboard = (props) => (

    <div className="dashboard">
        <Header />
         <h1 className='dashboard_title'>Top Heroes</h1>
        <Link to={`/edit/${random[0]}`}>
            <button className='dashboard_button'>{props.heroes.find((hero) => {
                return random[0]===hero.id}).name.toUpperCase()}
            </button>
        </Link>
        <Link to={`/edit/${random[1]}`}>
            <button className='dashboard_button'>{props.heroes.find((hero) => {
                return random[1]===hero.id }).name.toUpperCase()}
            </button>
            </Link>
        <Link to={`/edit/${random[2]}`}>
            <button className='dashboard_button'>{props.heroes.find((hero) => {
                return random[2]===hero.id}).name.toUpperCase()}
                </button>
        </Link>
        <Link to={`/edit/${random[3]}`}>
            <button className='dashboard_button'>{props.heroes.find((hero) => {
                return random[3]===hero.id}).name.toUpperCase()}
            </button>
        </Link>
        
    </div>
)

const mapStateToProps = (state) => {
    return {
        heroes:state
    }
}

export default connect(mapStateToProps)(Dashboard)
