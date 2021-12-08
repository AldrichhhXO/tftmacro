import React from 'react'
import CompositionsContainer from '../../../Containers/CompositionsContainer/CompositionsContainer'
import PageLayout from '../../../Layout/PageLayout'
import TftPageLayout from '../../../Layout/TftPageLayout'
import { Button, Card, TextField, Typography } from '@mui/material'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    tftNavbar: {
        width: '100%',
        border: '1px solid black',
        display: 'flex',
        margin: ' 0px auto'
    },
    tftSearch: {
        width: '45%',
        height: '70px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    RegionSelect: {
        height: '40px',
        fontSize: '20px',
        background: 'cyan'
    },
    buttonContainer: {
        width: '80%',
        margin: 'auto'
    },
    tftNavbarButton: {
        margin: '0px 20px',
        fontSize: '17px'
    }
})

export default function TftOverview() {
    const classes = useStyles()
    return (
        <TftPageLayout>
        
            <Card variant = "outlined" className = {classes.tftSearch}>
                <Typography variant = "h5">Search for a player</Typography>
                <TextField size = "small" type = "text" />

                <Button variant = "outlined">Search</Button>
            </Card>
            {/** 
            <CompositionsContainer />
            */}
        </TftPageLayout>
    )
}