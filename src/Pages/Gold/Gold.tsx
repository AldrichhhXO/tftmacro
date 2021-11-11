import React from 'react'
import { Typography, Table, TableHead, TableBody, TableCell, Card, TableRow } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Navbar from '../../Components/Navbar/Navbar'

const useStyles = makeStyles({
    pageTitle: {
        margin: 'auto',
        width: '50%',
        padding: '10px',
        textAlign: 'center'
    },
    pageDescription: {
        margin: ' 30px auto',
        textAlign: 'center',
        fontSize: '21px',
        width: '70%'
    },
    Table: {
        width: '60%',
        maxWidth: '600px',
        margin: 'auto',
        border: '1px solid black'
    },
    economySection: {
        width: '80%',
        margin: 'auto'
    },
    economyCardText: {
        border: '1px solid black'
    }
})

export default function Gold() {
    document.title = "TFT.Macro | Gold Overview"
    const classes = useStyles()
    return (
        <div>
            <Navbar />

            <p className = {classes.pageDescription}>
                Gold in Teamfight Tactics is the currency that allows you to be 
                able to level your troops, as well as increase your level to be able
                to hold more champions on your board.
                
            </p>
            <p className = {classes.pageDescription}>
                Gold has a small micromechanic that allows the player to hold excess amounts to
                be able to defy the rolling odds and maximize the chances of rolling 3-star
            </p>
            <Typography sx = {{textAlign: 'center', margin: '20px auto'}} variant = "h3" >
                Gold Guide
            </Typography>
            <Table className = {classes.Table}>
                <TableHead>
                    <TableRow>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell> 5</TableCell>
                    <TableCell> 5</TableCell>
                    <TableCell> 5</TableCell>
                    <TableCell> 5</TableCell>
                </TableBody>
            </Table>
            <Typography variant = "h4">Economy Methods</Typography>
            <p className = {classes.pageDescription}>
                Although learning the basics of gold in Teamfight Tactics is somewhat of a basic
                concept, what matters how you end up using the gold. 
            </p>
            <p className = {classes.pageDescription}>
                Depending on what team composition you use, it will determine how you should utilize your
                gold throughout the game. Here we have a couple of economy methods and some composition that they are good for
            </p>

            <section className = {classes.economySection}>
                <Card variant = "outlined">
                    <Typography variant = "h4">Slow Roll</Typography>
                    <p className = {classes.economyCardText}>
                        This method is primarily a greedy type of economy where you will 
                        reach 50 gold as fast as possible and reroll every round to be able to hit the champs that you need
                    </p>
                    <p>
                        <strong>Note: </strong> It is generally good practice to hold 50 gold as long as possible because of the amount of interest you earn each round
                        but <strong>Make sure</strong> you aren't being too greedy by losing too much health. If you need to stabilize your comp be sure to do so.
                    </p>
                    <p>
                        
                    </p>
                </Card>
                <Card variant = "outlined">
                    <Typography variant = "h4">Fast 8</Typography>
                    <p>
                        This method is primarily good for comps that reach their maximum potential once they reach the later portion of the game.
                        With this method you're not holding 50 gold as much throughout the game. Instead, you are pushing levels so that you're the first
                        to be able 
                    </p>
                </Card>

            </section>
        </div>
    )
}
