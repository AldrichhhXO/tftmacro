import React from 'react'
import CompositionsContainer from '../../../Containers/CompositionsContainer/CompositionsContainer'
import PageLayout from '../../../Layout/PageLayout'
import { Button } from '@mui/material'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    tftNavbar: {
        width: '40%',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'space-around',
        margin: ' 20px auto'
    }
})

export default function TftOverview() {
    const classes = useStyles()
    return (
        <PageLayout>
            <div className = {classes.tftNavbar}>
                <Button>Items</Button>
                <Button>Augments</Button>
                <Button>Champions</Button>
            </div>            
            <CompositionsContainer />
        </PageLayout>
    )
}