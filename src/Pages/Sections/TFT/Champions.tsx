import React from 'react'
import TftPageLayout from '../../../Layout/TftPageLayout'
import GridLayout from '../../../Layout/GridLayout'
import Champs from '../../../static/Teamfight Tactics/TFT.json'
import { Card, Typography } from '@mui/material'

export default function Champions() {

    let championsArray = Champs.setData[2].champions
    console.log(championsArray)
    let champComponents = championsArray.map((champion) => {
        return (<Card>
            <Typography variant = "h4">{champion.name}</Typography>
            <p>{champion.ability.name}</p>
            <p>
                {champion.ability.desc}
            </p>
        </Card>)
    })

    return (
        <TftPageLayout>
            <h1>Champions</h1>
            <GridLayout>
                {champComponents}
            </GridLayout>
        </TftPageLayout>
    )
}
