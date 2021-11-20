import React from 'react'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    SiteSelector: {
        width: '40%',
        border: '1px solid gray',
        margin: '20px auto'
    },
    LinksContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    SiteButton: {
        
    }
})

export default function SiteSelector() {

    const classes = useStyles()
    return (
        <div className = {classes.SiteSelector}>
            <div className = {classes.LinksContainer}>
                <Button href = "/lol" color = "info" className = { classes.SiteButton}>League of Legends</Button>
                <Button href = "/tft" color = "info" className = { classes.SiteButton}>Teamfight Tactics</Button>
                <Button href = "/valorant" color = "info" className = { classes.SiteButton}>Valorant</Button>
            </div>

        </div>
    )
}
