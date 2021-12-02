import React from 'react';
import './App.css';
import Landing from './Pages/Landing/Landing';
import  { TftPaths } from './Pages/Sections/TFT/index'
import { LeaguePaths } from './Pages/Sections/TFT/LOL/Index'
import Error from './Pages/Error/Error';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import TftOverview from './Pages/Sections/TFT/TftOverview';
import DamageCalculator from './Pages/Sections/TFT/DamageCalculator';
import Gold from './Pages/Sections/TFT/Gold';
import Compositions from './Pages/Sections/TFT/Compositions';
import Stats from './Pages/Sections/TFT/Stats';
import Player from './Pages/Sections/TFT/Player';
import Traits from './Pages/Sections/TFT/Traits';
import Champions from './Pages/Sections/TFT/Champions';
import TftItems from './Pages/Sections/TFT/TftItems';

import LeagueOverview from './Pages/Sections/TFT/LOL/LeagueOverview';
import Augments from './Pages/Sections/TFT/Augments';



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

        <Route path = "/tft/player" render = {() => <Player /> }/>  
        <Route path = "/tft/traits" render = {() => <Traits /> } />
        <Route path = "/tft/augments" render = {() => <Augments />} />
        <Route path = "/tft/champions" render = {() => <Champions />} />
        <Route path = "/tft/items" render = {() => <TftItems />} />

        <Route exact path = "/lol/" render = {() => <LeagueOverview/> } />
        <Route exact path = "/lol/champions" render = {() => <Champions /> }/>  
        
        <Route path = "*" render = {() => <Error />} />
      </Switch>
    </Router>
  );
}

export default App;
