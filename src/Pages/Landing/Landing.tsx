import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles'


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

    const classes = useStyles()
    return (
        <div>
            <Navbar />
            <div className = {classes.landingText}>
                <Typography variant = "h5"> 
                    Welcome to TFT.Macro
                </Typography>
                <Typography variant = "h5">
                    The spot for learning more about Teamfight Tactics
                </Typography>
            </div>


            <div>
                <Typography>
                    Get Started Here
                </Typography>
                <div className = {classes.gettingStarted}>
                    <Link className = {classes.gettingStartedButton} to = "/gold">Gold</Link>
                    <Link className = {classes.gettingStartedButton} to = "/dmg">Damage Calculator</Link>
                </div>
            </div>


        </div>
    )
}
