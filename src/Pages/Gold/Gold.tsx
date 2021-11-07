import React from 'react'
import { Typography, Table, TableHead, TableBody, TableCell } from '@mui/material'
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
        width: '70%',
        margin: 'auto',
        border: '1px solid black'
    }
})

export default function Gold() {

    const classes = useStyles()
    return (
        <div>
            <Navbar />
            <Typography variant = "h2" className = {classes.pageTitle}>
                Gold Guide
            </Typography>
            <p className = {classes.pageDescription}>
                Gold in Teamfight Tactics is the currency that allows you to be 
                able to level your troops, as well as increase your level to be able
                to hold more champions on your board.
                
            </p>
            <p className = {classes.pageDescription}>
                Gold has a small micromechanic that allows the player to hold excess amounts to
                be able to defy the rolling odds and maximize the chances of rolling 3-star
            </p>

            <Table className = {classes.Table}>
                <TableHead>
                    <TableCell>
                        Gold Guide
                    </TableCell>
                </TableHead>
                <TableBody>
                    <TableCell> 5</TableCell>
                    <TableCell> 5</TableCell>
                    <TableCell> 5</TableCell>
                    <TableCell> 5</TableCell>
                </TableBody>
            </Table>
        </div>
    )
}
