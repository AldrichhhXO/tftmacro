import React from 'react'
import { Card, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    composition: {
        width: '100%',
        margin: '10px auto',
        height: '100px',
        boxShadow: '5px 5px 10px rgba(0,0,0,0.1)',
        position: 'relative'
    },
    teamContainer: {
        width: '90%',
        margin: ' 7px auto',
        height: '30px',
        display: 'flex'
    },
    compositionNickname: {
        marginLeft: '20px',
        marginTop: '5px'
    },
    champion: {
        border: '1px solid black',
        height: '30px',
        width: '30px',
        margin: '0px 3px',
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tier: {
        position: 'absolute',
        right: '30px',
        bottom: '50%',
        transform: 'translateY(50%)'
    }
})

export default function Composition(props: any) {
    const classes = useStyles()

    const Champion = () => {
        return (
            <div className = {classes.champion}>
                A
            </div>
        )

    }

    return (
        <Card className = {classes.composition} variant = "outlined">
            <Typography variant = "h5" className = {classes.compositionNickname}>{props.compositionNickname}</Typography>
            <div className = {classes.teamContainer}>
                <Champion />
                <Champion />
                <Champion />
                <Champion />
                <Champion />
                <Champion />
                <Champion />
            </div>
            <Typography variant = "h5" className = {classes.tier}>
                S+
            </Typography>
        </Card>
    )
}
