import React from 'react'
import { Card, Typography } from '@mui/material'
import TftChampionStatComponent from './TftChampionStatComponent'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    ChampionCard: {
        margin: '10px 5px',
        padding: '10x 0px'
    },
    ChampionName: {
        textAlign: 'center'
    },
    traitContainer: {
        width: '70%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center'
    },
    trait: {
        margin: '15px 5px',
        backgroundColor: 'rgb(60,60,60)',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '0.3rem'
    },
    abilityContainer: {
        width: '95%',
        margin: 'auto',
        textAlign: 'center'
    },
    abilityDescription: {
        lineHeight: '25px',
        textAlign: 'center'
    },
    damageModifiers: {
        width: '85%',
        margin: ' 20px auto'
    }
})

interface ChampionProperties {
    championName: string | null,
    championAbilityName: string | null,
    championAbilityDesc: string | null,
    championAbilityVariables: Array<Object>,
    championTraits: Array<string>
    //modifiers: string
}

interface modifierType {
    name: string,
    values: Array<Number>
}



export default function TftChampionCard({ championName, championAbilityDesc, championAbilityName, championAbilityVariables, championTraits }: ChampionProperties) {
    const classes = useStyles()

    let regexPatterns = [
        /(@\w+\**\d*@%*)/g,
        /(\(\w+\))/g
    ]
    let modifierRegex = /(@\w+\**\d*@%*)/g;
    let alteredText = championAbilityDesc?.replaceAll(modifierRegex, '').replaceAll('seconds', 'a few seconds')
    let spacedText = alteredText?.split('<br><br>')

    let textComponents = spacedText?.map((text) => {
        return (<p className = {classes.abilityDescription}>{ text }</p>)
    })
    
     console.log(championAbilityVariables)

    let championAbilityModifiers = championAbilityVariables.map((modifier: any) => {
        // console.log("heyy" + modifier)
        return (<p style = {{margin: '5px 0px'}}><b>{modifier.name}</b>: {modifier.value}</p>)  
    })

    let championTraitComponents = championTraits.map((trait) => {
        return (<p className = {classes.trait}>{trait}</p>)
    })

    return (
        <Card variant = "outlined" className = {classes.ChampionCard}>
                <Typography sx = {{marginTop: '20px'}} className = {classes.ChampionName} variant = "h4">{ championName }</Typography>
                <div className = {classes.traitContainer}>
                    {championTraitComponents}
                </div>
                <div className = {classes.abilityContainer}>
                    <Typography variant = "h5">{ championAbilityName }</Typography>
                    {textComponents}
                </div>
                <div className = {classes.damageModifiers}>
                    {championAbilityModifiers}
                </div>
            </Card>
    )
}
