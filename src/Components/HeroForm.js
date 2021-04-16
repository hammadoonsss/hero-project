import React from 'react';
import '../styles/components/edit.css'

export default class HeroForm extends React.Component {
    constructor(props){
        super(props);

        this.state={
            id: props.hero ? (props.hero.id).toString() : "",
            name: props.hero ? props.hero.name: "",
            error:''
        };
    }
    onIdChange = (e) => {
        const id = e.target.value;
        this.setState(() => ({id}));
    };
    onNameChange = (e) => {
        const name = e.target.value;
        if (name){
            this.setState(() => ({name}));
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.id || !this.state.name){
            this.setState(()=>({error: "Please Enter Data"}));
        }
        else{
            this.setState(()=>({error:''}));
            this.props.onSubmit({
                id: this.state.id,
                name: this.state.name
            })
        }
    }
    render() {
        return (
            <div className='edit'>
                {this.state.error && <p>{this.state.error}</p>}
                <form className='edit__line' onSubmit={this.onSubmit}>
                    <input
                        className='text-input'
                        type="text"
                        placeholder="id"
                        autoFocus
                        value={this.state.id}
                        onChange={this.onIdChange}/>
                    <input
                        className='text-input'
                        type="text"
                        placeholder="Hero-Name"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <div>
                        <button className='edit_button'>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}