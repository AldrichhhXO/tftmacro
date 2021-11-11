import React from 'react'
import { AppBar, Typography, Toolbar, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '@mui/material';

const useStyles  = makeStyles({
    Navbar: {
        width: '100vw',
        height: '100px'
    },
    NavbarLinks: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        
        
    },
    NavbarLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
        '&:after' : {
            content: '',
            display: 'block',
            height: '5px',
            color: 'red',
            width: '100%',   
        } 
    },
    menuIcon: {
        cursor: 'pointer'
    }
})
//
export default function Navbar() {
    let classes = useStyles()

    return (
        <AppBar sx = {{backgroundColor: 'rgba(10,70,150, 0.85)'}} position = "relative">
            <Toolbar sx = {{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant = "h5">
                    <Link href = "/" sx = {{textDecoration: 'none', color: 'white'}}>TFT.Macro</Link>
                </Typography>
              
                    <div className = {classes.NavbarLinks}>
                        <Link href = "/dmg" className = {classes.NavbarLink}>Damage Calculator</Link>
                        <Link href = "/gold" className = {classes.NavbarLink}>Gold</Link>
                        <Link href = "/team-comps" className = {classes.NavbarLink}>Team Comps</Link>
                        <Link href = "/stats" className = {classes.NavbarLink}>Stats</Link>
                    </div>
                    <MenuIcon className = {classes.menuIcon}></MenuIcon>
            </Toolbar>
        </AppBar>
    )
}
