import React from 'react';
import './App.css';
import Landing from './Pages/Landing/Landing';
import  { TftPaths } from './Pages/Sections/TFT/index'
import { LeaguePaths } from './Pages/Sections/LOL/Index'
import Error from './Pages/Error/Error';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import TftOverview from './Pages/Sections/TFT/TftOverview';
import DamageCalculator from './Pages/Sections/TFT/DamageCalculator';
import Gold from './Pages/Sections/TFT/Gold';
import Compositions from './Pages/Sections/TFT/Compositions';
import Stats from './Pages/Sections/TFT/Stats';

import Champions from './Pages/Sections/LOL/Champions';
import LeagueOverview from './Pages/Sections/LOL/LeagueOverview';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => <Landing /> } />
       
        

        <Route exact path = "/tft" render = {() => <TftOverview />} />
        <Route exact path = "/tft/dmg" render = {() => <DamageCalculator /> } />
        <Route exact path = "/tft/gold" render = {() => <Gold/> } />
        <Route exact path = "/tft/compositions" render = {() => <Compositions/> } />
        <Route exact path = "/tft/stats" render = {() => <Stats /> }/>  

        <Route exact path = "/lol/" render = {() => <LeagueOverview/> } />
        <Route exact path = "/lol/champions" render = {() => <Champions /> }/>  
        
        <Route path = "*" render = {() => <Error />} />
      </Switch>
    </Router>
  );
}

export default App;
