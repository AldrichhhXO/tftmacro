import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import Navbar from '../../Components/Navbar/Navbar'
import { makeStyles } from '@mui/styles'
import DamageCalculation from '../../Components/DamageCalculator/DamageCalculation'


const useStyles = makeStyles({
    table: {
        width: '60%',
        margin: '10px auto',
        border: '1px solid gray'
    },
    tableHead: {
        background: 'rgba(20,20,20,1)'
    },
    tableCell: {
        color: 'white'
        
    }
})

export default function DamageCalculator() {
    const classes = useStyles()
    const DamageStage = () => {
        return (
        <Table className = {classes.table}>
        <TableHead className = {classes.tableHead}>
            <TableCell className = {classes.tableCell}>Stage 1</TableCell>
            <TableCell className = {classes.tableCell}>Stage 2</TableCell>
            <TableCell className = {classes.tableCell}>Stage 3</TableCell>
            <TableCell className = {classes.tableCell}>Stage 4</TableCell>
            <TableCell className = {classes.tableCell}>Stage 5</TableCell>
            <TableCell className = {classes.tableCell}>Stage 6</TableCell>
            <TableCell className = {classes.tableCell}>Stage 7+</TableCell>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
                <TableCell>2</TableCell>
                <TableCell>3</TableCell>
                <TableCell>5</TableCell>
                <TableCell>8</TableCell>
                <TableCell>15</TableCell>
            </TableRow>
        </TableBody>
    </Table>
        )
    }

    const DamageUnit = () => {
        return (
        <Table className = {classes.table}>
            <TableHead className = {classes.tableHead}>
                    <TableCell className = {classes.tableCell}>1 Unit</TableCell>
                    <TableCell className = {classes.tableCell}>2 Units</TableCell>
                    <TableCell className = {classes.tableCell}>3 Units</TableCell>
                    <TableCell className = {classes.tableCell}>4 Units</TableCell>
                    <TableCell className = {classes.tableCell}>5 Units</TableCell>
                    <TableCell className = {classes.tableCell}>6 Units</TableCell>
                    <TableCell className = {classes.tableCell}>7 Units</TableCell>
                    <TableCell className = {classes.tableCell}>8 Units</TableCell>
                    <TableCell className = {classes.tableCell}>9 Units</TableCell>
                    <TableCell className = {classes.tableCell}>10 Units</TableCell>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>11</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>13</TableCell>
                    <TableCell>14</TableCell>
                    <TableCell>15</TableCell>
                </TableRow>
                </TableBody>
        </Table>
        )
    }
    

    return (
        <div>
            <Navbar />
            <Typography sx = {{textAlign: 'center', margin: '10px auto'}} variant = "h4">Damage Calculation</Typography>
            <Typography sx = {{textAlign: 'center', margin: '10px auto'}} variant = "h4">Damage taken with current stage and units</Typography>
            <DamageStage />
            <DamageUnit />
            <Typography variant = "h3">
                Calculator
            </Typography>

            <DamageCalculation />
        </div>
    )
}
