import React from 'react';
import './App.css';
import Landing from './Pages/Landing/Landing';
import Compositions from './Pages/Compositions/Compositions';
import Error from './Pages/Error/Error';
import Gold from './Pages/Gold/Gold';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DamageCalculator from './Pages/DamageCalculator/DamageCalculator';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => <Landing /> } />
        <Route exact path = "/dmg" render = {() => <DamageCalculator /> } />
        <Route exact path = "/gold" render = {() => <Gold/> } />
        <Route exact path = "/team-comps" render = {() => <Compositions/> } />
        <Route path = "*" render = {() => <Error />} />
      </Switch>
    </Router>
  );
}

export default App;
