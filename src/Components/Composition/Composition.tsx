import React from 'react'
import { Card, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    composition: {
        width: '100%',
        margin: '10px auto',
        height: '100px'
    }
})

export default function Composition() {
    const classes = useStyles()

    return (
        <Card className = {classes.composition} variant = "outlined">
            <Typography variant = "h4">Johnny Sins Assassins</Typography>
            <div >
                Composition Components
            </div>
        </Card>
    )
}
