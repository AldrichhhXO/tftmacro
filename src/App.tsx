import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Pages/Landing/Landing'
import { StyledEngineProvider } from '@mui/styled-engine';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import DamageCalculator from './Pages/DamageCalculator/DamageCalculator';

function App() {



  return (
    
    <Router>
        
        <Route exact path = "/" render = {() => <Landing /> } />
        <Route exact path = "/dmg" render = {() => <DamageCalculator /> } />
    </Router>
  );
}

export default App;
