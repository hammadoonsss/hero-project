import React from 'react'
import { connect } from 'react-redux'
import { ConnectedHeroList } from './HeroList'
import { Link } from 'react-router-dom'
import ListHeader from './ListHeader';
import { removeAll } from '../Actions/heroes'
import '../styles/components/herolist.css';

export const Heroes = (props) =>(
    <div className='herolist'>
        <ListHeader />
        <table className='table'>
            <tbody >
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {
                    props.heroes.map((hero) => (
                        <>
                            {<ConnectedHeroList key={hero.id} hero={hero} />}
                        </>
                    ))
                }
            </tbody>
        </table>

        {
            <div className='view_details'>
                {props.match.params.id &&
                    <div >
                        <h3>{props.heroes.find((heroes) => {
                            return heroes.id === props.match.params.id
                        }).name.toUpperCase() + " is My Hero"}
                        <Link to={`/edit/${props.match.params.id}`}>
                            <button className='view_button'>
                                View Details
                        </button>
                        </Link>
                        </h3>
                        {console.log(props.heroes)}
                    </div>
                }
            </div>
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        heroes: state
    }
}

const ConnectedHeroes = connect(mapStateToProps)(Heroes);
export default ConnectedHeroes;