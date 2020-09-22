import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import CricketerList from './components/CricketerList';
import AddCricketer from './components/AddCricketer';
import Shedule from './components/Shedule';
import Navigation from './components/Navigation'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const App=()=> {
  return (
    <Router>
    <div>
      <Navigation/>
      <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/home' exact component={Home}></Route>
      <Route path='/cricketerlist' exact component={CricketerList}></Route>
      <Route path='/addcricketer' exact component={AddCricketer}></Route>
      <Route path='/shedule' exact component={Shedule}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
