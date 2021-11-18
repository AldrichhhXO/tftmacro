import Compositions from "./Compositions";
import DamageCalculator from "./DamageCalculator";
import Gold from "./Gold";
import Stats from "./Stats";
import TftOverview from "./TftOverview";
import { Route } from 'react-router-dom'
import React from "react";

const TftPaths = () => {
    return (
        <React.Fragment>
            <Route exact path = "/tft" render = {() => <TftOverview />} />
            <Route exact path = "/tft/dmg" render = {() => <DamageCalculator /> } />
            <Route exact path = "/tft/gold" render = {() => <Gold/> } />
            <Route exact path = "/tft/compositions" render = {() => <Compositions/> } />
            <Route exact path = "/tft/stats" render = {() => <Stats /> }/>  
        </React.Fragment>
    )
}

export {
    Compositions,
    DamageCalculator,
    Gold,
    Stats,
    TftOverview,
    TftPaths
}