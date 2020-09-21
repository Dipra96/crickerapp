import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import CricketerList from './components/CricketerList';
import AddCricketer from './components/AddCricketer';
import Shedule from './components/Shedule';

const App=()=> {
  return (
    <div>
      <CricketerList/> 
    </div>
  );
}

export default App;
