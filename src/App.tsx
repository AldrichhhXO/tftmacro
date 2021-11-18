import React from 'react';
import './App.css';
import Landing from './Pages/Landing/Landing';
import { TftPaths } from './Pages/Sections/TFT/index'
import { LeaguePaths } from './Pages/Sections/LOL/Index'
import Error from './Pages/Error/Error';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => <Landing /> } />
        <LeaguePaths />
        <TftPaths />
        <Route path = "*" render = {() => <Error />} />
      </Switch>
    </Router>
  );
}

export default App;
