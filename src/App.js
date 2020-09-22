import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import CricketerList from './components/CricketerList';
import AddCricketer from './components/AddCricketer';
import Shedule from './components/Shedule';
import Navigation from './components/Navigation'

const App=()=> {
  return (
    <div>
      <Navigation/>
    </div>
  );
}

export default App;
