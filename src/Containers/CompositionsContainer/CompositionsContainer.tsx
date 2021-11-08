import React from 'react'
import Composition from '../../Components/Composition/Composition'
import { Table, TableCell } from '@mui/material'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    table: {
        width: '50%',
        margin: 'auto',
        border: '1px solid gray'
    }
})

export default function CompositionsContainer() {

    const classes = useStyles()
    return (
        <Table className = {classes.table}>
             <Composition />
             <Composition />
             <Composition />
        </Table>
           
       
    )
}
