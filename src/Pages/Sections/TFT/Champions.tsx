import React from 'react'
import TftPageLayout from '../../../Layout/TftPageLayout'
import GridLayout from '../../../Layout/GridLayout'
import Champs from '../../../static/Teamfight Tactics/TFT.json'
import TftChampionCard from '../../../Components/TFT/TftChampionCard'
import TftChampionStatComponent from '../../../Components/TFT/TftChampionStatComponent'
import { Card, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'



export default function Champions() {
    document.title = "Academy.GG | Champions"

    let championsArray = Champs.setData[2].champions
    console.log("original: " , championsArray)
    let excludedChampions = ['Target Dummy', 'Mechanical Dragon', 'Mechanical Bear', 'Tome of Traits', 'Mechanical Scarab', 'Mercenary']
    //let championOrigins = ['Academy', 'Chemtech', 'Clockwork', 'Cuddly', 'Enforcer', 'Glutton', 'Imperial', 'Mercenary', 'Mutant', 'Scrap', 'Sister', 'Socialite', 'Syndicate', 'Yordle', 'Yordle-Lord']


    let sortedChamps = championsArray.sort((a,b) => (a.name > b.name) ? 1 : -1  )
    console.log(sortedChamps)

    let champComponents = championsArray.map((champion, index) => {
        let effects = champion.ability.variables
        let championDetails = {
            championName: champion.name,
            championAbilityName: champion.ability.name,
            championAbilityDesc: champion.ability.desc,
            championAbilityVariables: champion.ability.variables,
            championTraits: champion.traits
        }
         //console.log(champion)
        if (excludedChampions.includes(champion.name)) return 
        else {
            // let championProperties = {initialMana: champion.stats.initialMana, mana: champion.stats.mana, traits: champion.traits}
            return (<TftChampionCard key =  {index} {...championDetails} />)
        }
    })





    return (
        <TftPageLayout>
            <h1 style = {{textAlign: 'center'}}>Set 6 TFT Champions</h1>
            <GridLayout>
                {champComponents}
            </GridLayout>
        </TftPageLayout>
    )
}
