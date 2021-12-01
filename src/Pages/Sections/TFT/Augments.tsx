import React from 'react'
import TftPageLayout from '../../../Layout/TftPageLayout'
import GridLayout from '../../../Layout/GridLayout'
import Augs from '../../../static/Teamfight Tactics/TFT.json'
import {Card, Typography} from '@mui/material'

export default function Augments() {

    let augmentArray = []
    //console.log(Augs.items)
    for (let aug = 0; aug < Augs.items.length; aug++) {
        if (Augs.items[aug].icon.includes('Augments') && !Augs.items[aug].name.includes('TFT')) augmentArray.push(Augs.items[aug])
    }
    console.log(augmentArray)
    let augmentComponents = augmentArray.map((augment) => {
        return (<Card>
            <Typography variant = "h4">{augment.name}</Typography>
            <p>{augment.desc}</p>
        </Card>)
    })

    return (
        <TftPageLayout>
            <GridLayout>
                {augmentComponents}
            </GridLayout>
        </TftPageLayout>
    )
}
