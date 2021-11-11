import React from 'react'
import { makeStyles } from '@mui/styles'
import Navbar from '../Components/Navbar/Navbar'

const useStyles = makeStyles({
    pageLayout: {

        width: '100vw',
        height: '100vh',

    }
})

export default function PageLayout(props: any) {
    const classes = useStyles()
    return (
        <div className = {classes.pageLayout}>
            <Navbar />
            {props.children}
        </div>
    )
}
