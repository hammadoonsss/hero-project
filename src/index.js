import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import Dashboard from './Components/Dashboard'
import AddHeroPage from './Components/AddHeroPage'

import ConnectedHeroes from './Components/Heroes'
import { addHero } from './Actions/heroes'
import store from './store/configStore'
import { ConnectedEdit } from './Components/EditPage';

store.dispatch(addHero( { id: '20', name: 'Tornado' }))





const MyRoutes=(props)=>(

  <BrowserRouter>
    <Switch>
      
      <Route path='/' component={Dashboard} exact={true}/>
      <Route path='/dashboard' component={Dashboard} exact={true}/>
      <Route path='/heroes' component={ConnectedHeroes} exact={true}/>
      <Route path='/heroes/:id' component={ConnectedHeroes}></Route>
      <Route path='/edit/:id' component={ConnectedEdit}></Route>
      <Route path={'/add'} component={AddHeroPage}></Route>
    </Switch>
   
  </BrowserRouter>
 
)

const jsx = (
  <Provider store={store}>
    <MyRoutes/>
  </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))


reportWebVitals();