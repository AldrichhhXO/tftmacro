import React from 'react'
import { Card, Typography } from '@mui/material'
import {makeStyles} from '@mui/styles'

interface TraitProps {
    traitName: string,
    traitDesc: string
}

const useStyles = makeStyles({
    traitCard: {
        width: '80%',
        height: 'fit-content',
        minHeight: '300px',
        margin: '20px auto',
        padding: '10px'
    },
    traitDescription: {
        fontSize: '15px'
    }
})

export default function TraitCard(props: TraitProps) {
    const classes = useStyles()

    return (
        <Card variant = "outlined" className = {classes.traitCard}>
            <Typography variant = "h4">{ props.traitName }</Typography>
            <p className = {classes.traitDescription}>{props.traitDesc}</p>
        </Card>
    )   
}
