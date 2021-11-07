import React from 'react'
import { AppBar, Typography, Toolbar, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles  = makeStyles({
    Navbar: {
        width: '100vw',
        height: '100px'
    },
    NavbarLinks: {
        
        width: '20vw',
        display: 'flex',
        justifyContent: 'space-around'
    },
    NavbarLink: {
        color: 'white',
        textDecoration: 'none'
    }
})

export default function Navbar() {
    let classes = useStyles()

    return (
        <AppBar sx = {{backgroundColor: 'rgba(10,70,150, 0.85)'}} position = "relative">
            <Toolbar sx = {{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant = "h5">
                    TFT.Macro
                </Typography>
                <Typography>
                    <div className = {classes.NavbarLinks}>
                        <Link href = "/dmg" className = {classes.NavbarLink}>Damage Calculator</Link>
                        <Link href = "/gold" className = {classes.NavbarLink}>Gold</Link>
                    </div>
                </Typography>
            </Toolbar>

        </AppBar>
    )
}
