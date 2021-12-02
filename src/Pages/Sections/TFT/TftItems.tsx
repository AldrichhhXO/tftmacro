import React from 'react'
import { Card, Typography} from '@mui/material'
import GridLayout from '../../../Layout/GridLayout'
import items from '../../../static/Teamfight Tactics/TFT.json'

export default function Items() {

    let setItems = items.setData[2]

    console.log(setItems)

    return (
        <div>
            <Typography>Tft items</Typography>
            <GridLayout>
                
            </GridLayout>
        </div>
    )
}
