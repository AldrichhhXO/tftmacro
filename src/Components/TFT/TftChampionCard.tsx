import React from 'react'
import { Card, Typography } from '@mui/material'
import TftChampionStatComponent from './TftChampionStatComponent'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    ChampionCard: {
        margin: '10px 5px',
        padding: '10x 0px',
        backgroundColor: 'rgb(75 , 75 , 75 )',
        color: 'rgb(230,230,230)',
        minHeight: '500px'
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
        backgroundColor: 'rgb(50,50,50)',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '0.3rem',
        boxShadow: '2px 2px 2px rgba(0,0,0,0.2)'
    },
    abilityContainer: {
        width: '95%',
        margin: 'auto',
        textAlign: 'center'
    },
    abilityName: {
        textAlign: 'left',
        margin: '20px 0px',
        marginLeft: '20px'
    },
    abilityDescription: {
        lineHeight: '25px',
        textAlign: 'center'
    },
    damageModifiers: {
        width: '70%',
        margin: ' 20px auto'
    }
})

interface ChampionProperties {
    championName: string | null,
    championAbilityName: string | null,
    championAbilityDesc: string | null,
    championAbilityVariables: any,
    championTraits: Array<string>
    //modifiers: string
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
    
    // console.log(championAbilityVariables)
    
    let championAbilityModifiers = championAbilityVariables.map((modifier: any) => {
        let modifierString = ""
        
        //let valuesComps = values.map((value) return (<p>value</p>))
        //return (<p style = {{margin: '5px 0px'}}><b>{modifier.name}</b>: {modifier}</p>)  
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
                    <Typography variant = "h5" className = {classes.abilityName}>{ championAbilityName }</Typography>
                    {textComponents}
                </div>
                <div className = {classes.damageModifiers}>
                    {/*
                    {championAbilityModifiers}
                    */}
                </div>
            </Card>
    )
}
