import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import myHeroes from '../store/defaultValues'
import {editHero} from '../Actions/heroes'

// function EditHero(props){ 
//     console.log(props.match.params)
//     const [name, setName] = useState(props.match.params.name)
//     const [id, setId] = useState(props.match.params.id)
//     return(
//         <div>
//             <h3>Edit Page</h3>
//             <form>
//                 <span>id:</span>
//                 <input type="text" value={id} disabled={true} />
//                 <span>name:</span>
//                 <input type="text" value={name} onChange={(e)=>{setName(e.target.value)} }/>
//             </form>
//             <Link to='/dashboard'><button>Back</button></Link>
//            {/* { console.log(props.match.params.name)} */}
//         </div>
//     )
// }

class EditHero extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:props.match.params.id,
            name:props.match.params.name
        }
    }
    
    onSubmit =(e)=>{
        e.preventDefault();
        this.props.dispatch(editHero(this.state.id, this.state.name))
    }
      render(){
          return(
              <div>
                  <h3>Edit Page</h3>
                  <form onSubmit={this.onSubmit} >
                  <div>
                  
                  <h2>{this.state.name}</h2>
                  <span>id:</span>
                   <input value={this.state.id} disabled={true} />    
                  </div>
                  <div>
                  <span>name:</span>
                  <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
                  </div>
                  <Link to="/dashboard"><button >Back</button></Link>
                  <Link to="/heroes"><button >Save</button></Link>
                  </form>
                  </div>
          )
      }
  }
const mapStateToProps=(state, props)=>{
    return{
        ...state
    }
}
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         hero: dispatch()
//     }
// }

  export default connect(mapStateToProps)(EditHero);