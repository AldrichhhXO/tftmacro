import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    championWrapper: {
        width: 'fit-content',
        height: '50px',
        display: 'flex',

    }
})

export default function ChampionWrapper(props: any) {

    const classes = useStyles()
    return (
        <div className = {classes.championWrapper}>
            {props.children}
        </div>
    )
}
