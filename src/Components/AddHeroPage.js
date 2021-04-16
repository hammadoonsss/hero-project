import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import HeroForm from './HeroForm';
import { addHero } from '../Actions/heroes'
import '../styles/components/edit.css'

const AddHeroPage = (props) => (
    <div className='edit'> 
    <Header />
        <h1>Add Hero</h1>
        <HeroForm 
            onSubmit={(hero)=>{
                props.dispatch(addHero(hero))
                props.history.push('/heroes')
            }}
        />
    </div>
);
export default connect()(AddHeroPage)