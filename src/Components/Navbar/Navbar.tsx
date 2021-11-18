import React from 'react'
import { AppBar, Typography, Toolbar, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
// import MenuIcon from '@mui/icons-material/Menu';
// import { Menu } from '@mui/material';

const useStyles  = makeStyles({
    Navbar: {
        width: '100vw',
        height: '100px'
    },
    sectionContainer: {
        border: '1px solid black',
        height: '60px',
        width: '400px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
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
    section: {
        backgroundColor: 'rgba(10,70,150, 0.90)'
    },
    menuIcon: {
        cursor: 'pointer'
    }
})

interface LinkObject {
    link: String,
    label: String
} 

let leagueLinks : LinkObject[] = [{link: "/champions", label: "Champions"}, {link: "/items", label: "Items"}]
let tftLinks : LinkObject[] = [
    {link: "/dmg", label: "Damage Calculator"}, 
    {link: "/gold", label: "Gold"}, 
    {link: "/team-comps",label: "Compositions"},
    {link: "/stats", label: "Stats"}]

//
export default function Navbar(props: any) {
    let classes = useStyles()
    let links
    switch(props.type) {
        case 'lol':
            links = leagueLinks
            break;
        case 'tft':
            links = tftLinks
            break;
    }

    const LinkComponents = links?.map((link, key) => {
        return (
            <Link key = {key} href = {`${link.link}`}  className = {`${classes.NavbarLink} ${classes.section}`}>{link.label}</Link>
        )
    })

    return (
        <AppBar sx = {{backgroundColor: 'rgba(10,70,150, 0.85)'}} position = "relative">
            <Toolbar sx = {{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant = "h5">
                    <Link href = "/" sx = {{textDecoration: 'none', color: 'white'}}>Academy.gg</Link>
                </Typography>
                <div className = {classes.sectionContainer}>
                        <Link href = "/lol" className = {`${classes.NavbarLink} ${classes.section}`}>League of Legends</Link>
                        <Link href = "/tft" className = {`${classes.NavbarLink} ${classes.section}`}>Teamfight Tactics</Link>
                      
                </div>
              
                    <div className = {classes.NavbarLinks}>
                        { LinkComponents }
                        {/*
                        <Link href = "/dmg" className = {classes.NavbarLink}>Damage Calculator</Link>
                        <Link href = "/gold" className = {classes.NavbarLink}>Gold</Link>
                        <Link href = "/team-comps" className = {classes.NavbarLink}>Team Comps</Link>
                        <Link href = "/stats" className = {classes.NavbarLink}>Stats</Link>
                        */}
                    </div>
            </Toolbar>
        </AppBar>
    )
}
