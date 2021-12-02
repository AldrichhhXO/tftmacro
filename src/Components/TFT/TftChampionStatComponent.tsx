import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    championStatCard: {
        width: '80%',
        border: '1px solid black',
        margin: 'auto'
    }
})

interface ChampionStatProps { 
    initialMana: Number,
    mana: Number,
    traits: Array<String>
}

export default function TftChampionStatComponent(props: ChampionStatProps) {

    const classes = useStyles()

    let championTraits = props.traits.map((trait) => {
        return <p>{trait}</p>
    })
    return (
        <div className = {classes.championStatCard}>
            <p>{props.initialMana} / {props.mana}</p>
            <div>
                {championTraits}
            </div>
        </div>
    )
}
