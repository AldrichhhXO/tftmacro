// eslint-disable-line
import React from 'react'
import { Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'
import CompositionsContainer from '../../Containers/CompositionsContainer/CompositionsContainer'
import PageLayout from '../../Layout/PageLayout'

const useStyles  = makeStyles({
    landingText: {
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        width: '50%',
        border: '1px solid black',
        textAlign: 'center',
        height: '300px'
    },
    gettingStarted: {
        margin: 'auto',
        width: '30%',
        border: '1px solid black',
        display: 'flex', 
        justifyContent: 'space-around'
    },
    gettingStartedButton: {
        border: '1px solid black',
        color: 'black',
        textDecoration: 'none',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '150px',
        cursor: 'pointer'
    }
    
})
export default function Landing() {

    document.title = "TFT.Macro | Welcome"
    const classes = useStyles()
    return (
        <PageLayout>
            <div className = {classes.landingText}>
                <Typography variant = "h5"> 
                    Welcome to TFT.Macro
                </Typography>
                <Typography variant = "h5">
                    The spot for learning more about Teamfight Tactics
                </Typography>
            </div>
            <Typography variant = "h4" sx = {{textAlign: 'center', margin: '20px auto'}}>
                Top Compositions
            </Typography>
            <CompositionsContainer />
        </PageLayout>
    )
}
