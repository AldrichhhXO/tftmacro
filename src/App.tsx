import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Pages/Landing/Landing';
import Error from './Pages/Error/Error';
import Gold from './Pages/Gold/Gold';
import { StyledEngineProvider } from '@mui/styled-engine';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'

import DamageCalculator from './Pages/DamageCalculator/DamageCalculator';

function App() {



  return (
    
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => <Landing /> } />
        <Route exact path = "/dmg" render = {() => <DamageCalculator /> } />
        <Route exact path = "/gold" render = {() => <Gold/> } />
        <Route path = "*" render = {() => <Error />} />
      </Switch>


    </Router>
  );
}

export default App;
