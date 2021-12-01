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
        width: 'fit-content',
        display: 'flex',
        justifyContent: 'space-around',
        border:'1px solid black',
        marginLeft: '20px',
        height: '60px'
        
        
    },
    NavbarLink: {
        color: 'white',
        width: '250px',
        textDecoration: 'none',
        fontSize: '22px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:after' : {
            content: '',
            display: 'block',
            height: '5px',
            color: 'red',
            width: '100%',   
        } 
    },
    section: {
        backgroundColor: 'darkcyan'
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

let starterLinks : LinkObject[] = [
    {link: "/tft", label: "Teamfight Tactics"},
    {link: "/lol", label: "League of Legends"}
]

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
        default:
            links = starterLinks
    }

    const LinkComponents = links?.map((link, key) => {
        return (
            <Link key = {key} href = {`${link.link}`}  className = {`${classes.NavbarLink} ${classes.section}`}>{link.label}</Link>
        )
    })

    return (
        <AppBar sx = {{backgroundColor: 'rgba(30,30,30, 0.85)'}} position = "relative">
            <Toolbar>
                <Typography variant = "h5">
                    <Link href = "/" sx = {{textDecoration: 'none', color: 'white'}}>Academy.gg</Link>
                </Typography>
              
                    <div className = {classes.NavbarLinks}>
                        { LinkComponents }
                    </div>
            </Toolbar>
        </AppBar>
    )
}
