import React, { Component } from 'react'
//import Axios from '../../../API/Axios'
import axios from 'axios'
import PageLayout from '../../../Layout/PageLayout'
import {Card, Typography } from '@mui/material'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    PlayerCard: {
        width: '30%',
        height: '400px',
        padding: '20px 5px',
        margin: '10px auto'
    },
    PlayerName: {
        marginLeft: '10px',
        border: '1px solid black',
        textAlign: 'center'
    },
    PlayerDetails: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        border: '1px solid black'
        
    }
})

export default function Player() {
    const classes = useStyles()

    /*
        axios.get(`https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/FadedOffTheHenny`, {
            headers: {'X-Riot-Token': 'RGAPI-71759e7f-fa31-4118-8fa1-2db8954c2fb5'}
        })
            .then(res => console.log(res.data))
    */

  
    return (
        <PageLayout>
            <Card className  = {classes.PlayerCard} variant = "outlined">

                {/* Profile image will be up here */}
                <Typography variant = "h4" className = {classes.PlayerName}>
                    FadedOffTheHenny
                </Typography>

                <div className = {classes.PlayerDetails}>
                    <Typography variant = "h5">Gold II</Typography>
                    <Typography>0 LP</Typography>
                    <Typography>Wins: 4</Typography>
                </div>

            </Card>
        </PageLayout>
    )
    
}
