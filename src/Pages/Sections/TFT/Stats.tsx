import React, {useEffect, useState} from 'react'
import Axios from '../../../API/Axios'
import PageLayout from '../../../Layout/PageLayout'
import { Typography } from '@mui/material'
import {Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    pageHeaderText: {
        marginTop: '50px',
        textAlign: 'center'
    },
    pageText: {
        width: '60%',
        margin: ' 25px auto',
        textAlign: 'center'
    },
    statTable: {
        width: '70%',
        margin: 'auto',
        border: '1px solid black'
    },
    statTableHead: {
        backgroundColor: 'rgba(50,150,200, 0.85)',
    },
    statTableHeadCell: {
        color: 'white'
    }
})

export default function Stats() {
    const classes = useStyles()
    document.title = "TFT.Macro | Top players in TFT"
    const [players, setPlayers] = useState('')

    useEffect(() => {
        Axios.get('/tft/league/v1/challenger')
        .then(res => {
            // setPlayers('')
        })
        .catch()
    })
    

    return (
        <PageLayout type = "tft">
            <Typography variant = "h4" className = {classes.pageHeaderText}>Top Players in TFT.</Typography>
            <p className = {classes.pageText}>
                Note: Since this app is currently in development sometimes the results might not show up right away
            </p>
            <Table className = {classes.statTable}>
                <TableHead className = {classes.statTableHead}>
                    <TableRow>
                        <TableCell className = {classes.statTableHeadCell}>Rank</TableCell>
                        <TableCell className = {classes.statTableHeadCell}>Player Name</TableCell>
                        <TableCell className = {classes.statTableHeadCell}>LP</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>C9 K3soju</TableCell>
                        <TableCell>1120</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>C9 K3soju</TableCell>
                        <TableCell>1120</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>C9 K3soju</TableCell>
                        <TableCell>1120</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>C9 K3soju</TableCell>
                        <TableCell>1120</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>C9 K3soju</TableCell>
                        <TableCell>1120</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </PageLayout>
    )
}
