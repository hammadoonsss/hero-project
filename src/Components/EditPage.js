import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { editHero } from '../Actions/heroes';
import '../styles/components/edit.css'
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.hero.name
        }
        this.goBack = this.goBack.bind(this);
     } 
     goBack(){
         this.props.history.goBack();
        }

    nameChange = (e) => {
        const name = e.target.value;
        this.setState(() => {
            return {
                name:name
            }
        })
    }
    
    formSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.name)
        
        this.props.editHero(this.props.match.params.id, this.state.name)
        //useHistory().goBack();
        this.props.history.push('/')
        
    }
    

    render() {
        return (
            <div className='edit'>
                <Header />
                <h1>Edit</h1>
                <form className='edit__line' onSubmit={this.formSubmit}>
                <h2>{this.state.name ? `${this.state.name}  Details` : ''}</h2>
                    <input className='text-input' type="text"  placeholder={this.props.match.params.id} disabled></input> 
                    <input className='text-input' type="text" placeholder='Hero-Name' value={this.state.name} onChange={this.nameChange}></input>
                    <div><button className='edit_button' onClick={this.goBack}>Save</button></div>
                </form>
                   
            </div>

)
    }
}
const mapStateToProps = (state, props) => {
    console.log(state,props.match.params.id)
    return {
        //hero: myElement(state,parseInt(props.match.params.id))
        hero:state.find((heros) => {
            return heros.id===props.match.params.id
        })
        
    }
}
const mapDispatchToState = (dispatch, props) => {
    return {
        editHero: (id, name) => dispatch(editHero( id, {name })),
    }
}
export const ConnectedEdit=connect(mapStateToProps,mapDispatchToState)(Edit)
export default Edit



// import React from 'react';
// import { connect } from 'react-redux';
// import HeroForm from './HeroForm';
// import {editHero} from '../Actions/heroes';
// const EditPage = (props) => {
    //     console.log(props)
//     return(
    //         <div>
//           <HeroForm 
//             hero={props.hero}
//             onSubmit= {(hero)=>{
    //                 props.dispatch(editHero(hero.id, hero));
    //                 props.history.push('/heroes');
//                 console.log('updated', hero)
//           }}/>
//         </div>
//     )
// }

// const mapStateToProps=(state, props)=>{
    //     return{
//         hero: state.find((hero) => hero.id === props.match.params.id)
//     }
// }
// export default connect(mapStateToProps)(EditPage)

// constructor(props){
//     super(props);
//     this.goBack = this.goBack.bind(this); // i think you are missing this
//  }
 
//  goBack(){
//      this.props.history.goBack();
//  }
 
//  .....
 
//  <button onClick={this.goBack}>Go Back</button>
// constructor(props) {
//     super(props);
//     this.handleNext = this.handleNext.bind(this);
//     this.handleBack = this.handleBack.bind(this); // you are missing this line
// }