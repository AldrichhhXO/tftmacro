import React from 'react'
import TftPageLayout from '../../../Layout/TftPageLayout'
import GridLayout from '../../../Layout/GridLayout'
import Augs from '../../../static/Teamfight Tactics/TFT.json'
import {Card, Typography} from '@mui/material'

import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    AugmentGrid: {
        width: '90%',
        maxWidth: '1200px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        margin: 'auto'
    },
    AugmentCard: {
        margin: '5px',
        minHeight: '300px',
        backgroundColor: 'rgb(75 , 75 , 75 )',
        color: 'rgb(230,230,230)',
    },
    AugmentName: {
        textAlign: 'center',
        marginTop: '30px'
    },
    AugmentDesc: {
        textAlign: 'center',
        width: '80%',
        margin: '20px auto'
    }
})

export default function Augments() {
    const classes = useStyles()

    let augmentArray = []
    //console.log(Augs.items)
    for (let aug = 0; aug < Augs.items.length; aug++) {
        if (Augs.items[aug].icon.includes('Augments') && !Augs.items[aug].name.includes('TFT')) augmentArray.push(Augs.items[aug])
    }

    augmentArray.sort((a, b) =>  (a.name > b.name) ? 1 : -1 )
    let augmentComponents = augmentArray.map((augment) => {
        return (
        <Card className = {classes.AugmentCard} variant = "outlined">
            <Typography className = {classes.AugmentName} variant = "h4">{augment.name}</Typography>
            <p className = {classes.AugmentDesc}>{augment.desc}</p>
        </Card>)
    })

    return (
        <TftPageLayout>
            <div className = {classes.AugmentGrid}>
                {augmentComponents} 
            </div>

           
        </TftPageLayout>
    )
}
