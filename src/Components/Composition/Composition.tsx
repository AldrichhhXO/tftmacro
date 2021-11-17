import React from 'react'
import { Card, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'
import ChampionWrapper from '../ChampionWrapper/ChampionWrapper'

const useStyles = makeStyles({
    composition: {
        width: '100%',
        margin: '10px auto',
        height: '120px',
        boxShadow: '5px 5px 10px rgba(0,0,0,0.1)',
        position: 'relative'
    },
    teamContainer: {
        width: '90%',
        margin: ' 15px auto',
        height: '30px',
        display: 'flex'
    },
    compositionNickname: {
        marginLeft: '20px',
        marginTop: '10px',
        marginBottom: '-2px'
    },
    champion: {
        border: '1px solid black',
        height: '45px',
        width: '45px',
        margin: '0px 3px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    item: {
        width: '12px',
        height: '12px',
        border: '1px solid black',

    },
    itemsContainer: {
       
        width: '100%',
        height: '30px',
        justifyContent: 'space-around',
        display: 'flex',
        alignItems: 'flex-end'
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

    const Item = () => {
        return (
            <div className = {classes.item}>

            </div>
        )
    }

    const Champion = (props: any) => {
        const championImage = props.image || 'A'
        
        return (
            <div className = {classes.champion}>
                {championImage} 
                <div className = {classes.itemsContainer}>
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        )
    }

    return (
        <Card className = {classes.composition} variant = "outlined">
            <Typography variant = "h5" className = {classes.compositionNickname}>{props.compositionNickname}</Typography>
            <div className = {classes.teamContainer}>
                
                <ChampionWrapper>
                    <Champion image = "J" />
                </ChampionWrapper>
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
