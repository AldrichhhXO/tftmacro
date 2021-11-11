import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import DamageCalculation from '../../Components/DamageCalculator/DamageCalculation'
import PageLayout from '../../Layout/PageLayout'

const useStyles = makeStyles({
    table: {
        width: '60%',
        maxWidth: '800px',
        margin: '20px auto',
        border: '1px solid black',

    },
    tableHead: {
        background: 'rgba(10,90,150, 0.75)'
    },
    tableHeaderCell: {
        color: 'white',
        borderBottom: '1px solid black',
        textAlign: 'center'
    },
    tableCell: {
       textAlign: 'center'
    },
    dmgCalculationText: {
        margin: ' 40px auto',
        textAlign: 'center',
        width: '50%',
        maxWidth: '800px',
        fontSize: '21px',
        [`@media only screen and (min-width: 300px )`]: {
            width: '80%',
            fontSize: '17px',
            lineHeight: '30px'
        },
        ['@media only screen and (min-width: 700px)']: {
            fontSize: '19px'
        }
        
    },
})

export default function DamageCalculator() {
    const classes = useStyles()
    const DamageStage = () => {
        return (
        <Table className = {classes.table}>
        <TableHead className = {classes.tableHead}>
            <TableCell className = {classes.tableHeaderCell}>Stage 1</TableCell>
            <TableCell className = {classes.tableHeaderCell}>Stage 2</TableCell>
            <TableCell className = {classes.tableHeaderCell}>Stage 3</TableCell>
            <TableCell className = {classes.tableHeaderCell}>Stage 4</TableCell>
            <TableCell className = {classes.tableHeaderCell}>Stage 5</TableCell>
            <TableCell className = {classes.tableHeaderCell}>Stage 6</TableCell>
            <TableCell className = {classes.tableHeaderCell}>Stage 7+</TableCell>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell className = {classes.tableCell}>0</TableCell>
                <TableCell className = {classes.tableCell}>0</TableCell>
                <TableCell className = {classes.tableCell}>2</TableCell>
                <TableCell className = {classes.tableCell}>3</TableCell>
                <TableCell className = {classes.tableCell}>5</TableCell>
                <TableCell className = {classes.tableCell}>8</TableCell>
                <TableCell className = {classes.tableCell}>15</TableCell>
            </TableRow>
        </TableBody>
    </Table>
        )
    }

    const DamageUnit = () => {
        return (
        <Table className = {classes.table}>
            <TableHead className = {classes.tableHead}>
                    <TableCell className = {classes.tableHeaderCell}>1 Unit</TableCell>
                    <TableCell className = {classes.tableHeaderCell}>2 Units</TableCell>
                    <TableCell className = {classes.tableHeaderCell}>3 Units</TableCell>
                    <TableCell className = {classes.tableHeaderCell}>4 Units</TableCell>
                    <TableCell className = {classes.tableHeaderCell}>5 Units</TableCell>
                    <TableCell className = {classes.tableHeaderCell}>6 Units</TableCell>
                    <TableCell className = {classes.tableHeaderCell}>7 Units</TableCell>
                    <TableCell className = {classes.tableHeaderCell}>8 Units</TableCell>
                    <TableCell className = {classes.tableHeaderCell}>9 Units</TableCell>
                    <TableCell className = {classes.tableHeaderCell}>10 Units</TableCell>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell className = {classes.tableCell} >2</TableCell>
                    <TableCell className = {classes.tableCell}>4</TableCell>
                    <TableCell className = {classes.tableCell}>6</TableCell>
                    <TableCell className = {classes.tableCell}>8</TableCell>
                    <TableCell className = {classes.tableCell}>10</TableCell>
                    <TableCell className = {classes.tableCell}>11</TableCell>
                    <TableCell className = {classes.tableCell}>12</TableCell>
                    <TableCell className = {classes.tableCell}>13</TableCell>
                    <TableCell className = {classes.tableCell}>14</TableCell>
                    <TableCell className = {classes.tableCell}>15</TableCell>
                </TableRow>
                </TableBody>
        </Table>
        )
    }
    

    return (
        <PageLayout>
            <Typography sx = {{textAlign: 'center', margin: ' auto', marginTop: '50px'}} variant = "h4">Damage Calculation</Typography>
            <p className = {classes.dmgCalculationText} >
                Damage calculation is a topic that is often overlooked, most people believing that damage is just damage. However, in reality, it allows you to
                plan out how many lives you have left, especially in the late game when one big loss can cause you to lose a huge portion of your health.
            </p>
            <p className = {classes.dmgCalculationText}>
                Below we have a diagram of how damage works in Teamfight tactics. In the earlier stages it's relatively simple, taking 2 damage per unit in stages 1 and 2.
                However the number begins to change the higher stage you are in the game.
            </p>
            <Typography sx = {{textAlign: 'center', margin: '10px auto'}} variant = "h4">Damage taken with current stage and units</Typography>
            <DamageStage />
            <DamageUnit />
            <Typography variant = "h3" sx = {{margin: ' 10px auto', textAlign: 'center'}}>
                Calculator
            </Typography>

            <DamageCalculation />
        </PageLayout>
    )
}
