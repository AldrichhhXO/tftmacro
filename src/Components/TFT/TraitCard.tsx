import React from 'react'
import { Card, Typography } from '@mui/material'
import {makeStyles} from '@mui/styles'

interface TraitProps {
    traitName: string,
    traitDesc: string,
    minUnits: Array<Number>,
    traitValues: any
}

const useStyles = makeStyles({
    traitCard: {
        width: '80%',
        height: 'fit-content',
        minHeight: '300px',
        margin: '20px auto',
        padding: '10px'
    },
    traitTitle: {
        textAlign: 'center'
    },
    traitDescription: {
        fontSize: '17.5px',
        lineHeight: '25px',
        textIndent: '15px',
        textAlign: 'center'
    },
    minUnitsDesc: {
        textAlign: 'center',
        width: '70%',
        margin: 'auto'
    }
})

export default function TraitCard( { traitName, traitDesc, minUnits, traitValues} : TraitProps) {
    const classes = useStyles()

    let modifierRegex = /(@\w+\**\d*@%*)/g

    console.log("Testing: " +  traitValues)
    let traitTextArray = traitDesc.replaceAll(modifierRegex, '').split('<br><br>').map((text) => {
        return (<p className = {classes.traitDescription}>{ text}</p>)
    })


    // This is the regex for the text that will be reused based on unit numbers
    const traitRegex = /(<expandRow>(.*?)<\/expandRow>)/g
    const expandRegex = /(<\/*expandRow>)/g
    let repeatedTraitDesc = traitDesc.match(traitRegex)
    let yahyeet : string
    if (repeatedTraitDesc) {
        yahyeet =repeatedTraitDesc[0].replaceAll(expandRegex, '')
        
    }

    let minUnitsDescArray = minUnits.map((minUnit) => {
        if (repeatedTraitDesc) {
            return (<p>{yahyeet.replace('@MinUnits@', minUnit.toString())} </p>)
            //console.log(yahyeet.replace('@MinUnits@', minUnit.toString()))
        }
    })

    

    return (
        <Card variant = "outlined" className = {classes.traitCard}>
            <Typography className = {classes.traitTitle} variant = "h4">{ traitName }</Typography>
            {traitTextArray}
            <div className = {classes.minUnitsDesc}>
                {minUnitsDescArray}
            </div>
            
        </Card>
    )   
}
