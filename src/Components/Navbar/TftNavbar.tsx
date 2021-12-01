import React from 'react'
import { makeStyles } from '@mui/styles'
import { Button } from '@mui/material'

const useStyles = makeStyles({
    tftNavbar: {
        width: '100%',
        display: 'flex',
        margin: ' 0px auto',
        backgroundColor: 'darkcyan',
        height: '50px'
    },
    buttonContainer: {
        width: '80%',
        margin: 'auto'
    },
    tftNavbarButton: {
        margin: '0px 20px',
        fontSize: '17px',
        color: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black'
        }
    }
})

export default function TftNavbar() {
    const classes = useStyles()

    return (
        <div className = {classes.tftNavbar}>
        <div className = {classes.buttonContainer}>
            <Button className = {classes.tftNavbarButton} href = "/tft/items">Items</Button>
            <Button className = {classes.tftNavbarButton} href = "/tft/augments">Augments</Button>
            <Button className = {classes.tftNavbarButton} href = "/tft/champions">Champions</Button>
            <Button className = {classes.tftNavbarButton} href= "/tft/traits">Traits</Button>
        </div>
    </div>  
    )
}
