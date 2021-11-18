import React from 'react'
import { Route } from 'react-router-dom'
import Champions from './Champions'
import LeagueOverview from './LeagueOverview'

const LeaguePaths = () => {
    return (
        <React.Fragment>
            <Route exact path = "/lol" render = {() => <LeagueOverview />}/>
            <Route exact path = "/lol/champions" render = {() => <Champions />}/>
        </React.Fragment>
    )
}

export {
    Champions,
    LeagueOverview,
    LeaguePaths
}