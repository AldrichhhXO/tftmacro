import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    GridLayout: {
        width: '80%',
        border: '1px solid black',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
    }
})

export default function GridLayout(props: any) {
    const classes = useStyles()
    return (
        <div className = {classes.GridLayout}>
            {props.children}
        </div>
    )
}
