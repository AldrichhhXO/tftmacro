import React from 'react'
import { Card, Typography,  TextField} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    Card: {
        width: '30%',
        margin: 'auto',
        padding: '30px 10px'
    }
})

export default function PlayerSearch() {

    const classes = useStyles()
    return (
        <Card className = {classes.Card}>
            <Typography>
                Search for a player here
            </Typography>
            <TextField size = "small"/>
        </Card>
    )
}
