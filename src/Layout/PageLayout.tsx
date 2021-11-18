import React from 'react'
import { makeStyles } from '@mui/styles'
import Navbar from '../Components/Navbar/Navbar'

const useStyles = makeStyles({
    pageLayout: {

        width: '100vw',
        height: '100vh',
    }
})

interface LayoutProps {
    children?: any,
    type?: String
}

export default function PageLayout(props: LayoutProps) {
    const classes = useStyles()
    return (
        <div className = {classes.pageLayout}>
            <Navbar type = {props.type}/>
            {props.children}
        </div>
    )
}
