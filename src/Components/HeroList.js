import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {removeHero} from '../Actions/heroes'
import '../styles/components/herolist.css'


class HeroList extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    submit = (props) => {
        confirmAlert({
            title: 'Confirm to Remove',
            message: 'Are you sure to do this??',
            buttons: [
                {
                    label: 'Yes',
                    onClick: ()=>{ this.props.dispatch(removeHero(this.props.hero.id))}
                },
                {
                    label: 'No',
                    
                }
            ]
        });
    };

    


render() {
    return (
        <tr>
            <td>
                <button className='table_button-id'>
                    {this.props.hero.id}
                </button>
            </td>
            <td> 
                <Link to={`/heroes/${this.props.hero.id}`}>
                    <button className='table_button-name'>
                        {this.props.hero.name}
                    </button>
                </Link>
            </td>
            <td>
                <button className='remove_button' onClick={this.submit}>
                    Remove
                </button>
            </td>
        </tr>
    );
}
}

const mapStateToProps = (state) => {
    return {
        heroes: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        dispatch
    }
}

export const ConnectedHeroList=connect(mapStateToProps, mapDispatchToProps)(HeroList)
export default HeroList

{/* <div>
                {props.match.params.id &&
                    <div>
                        <h3>{props.heroes.find((heroes) => {
                            return heroes.id === props.match.params.id
                        }).name.toUpperCase() + " is My Hero"}
                        <Link to={`/edit/${props.match.params.id}`}>
                            <button>
                                View Details
                        </button>
                        </Link>
                        </h3>
                        {console.log(props.heroes)}
                    </div>
                }
            </div> */}