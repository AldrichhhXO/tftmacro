import React, {useEffect} from 'react'
import axios from 'axios'
import PageLayout from '../../Layout/PageLayout'
import { Typography } from '@mui/material'
import {Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material'

export default function Stats() {


    return (
        <PageLayout>
            <Typography>Top Players in TFT.</Typography>
            <p>
                Note: Since this app is currently in development sometimes the results might not show up right away
            </p>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell>Player Name</TableCell>
                        <TableCell>Lp</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>C9 K3soju</TableCell>
                        <TableCell>1120</TableCell>

                    </TableRow>
                </TableBody>
            </Table>
        </PageLayout>
    )
}
