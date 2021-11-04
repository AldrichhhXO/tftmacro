import React,  {ChangeEvent, useState} from 'react'
import { TextField, FormGroup, FormLabel, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    form: {
        width: '50%',
        margin: 'auto'
    },
    textField: {
        margin: '5px auto'
    },
    
})

export default function DamageCalculation() {

    const [health, setHealth] = useState('')
    const [stage, setStage] = useState('')
    const [units, setUnit] = useState('')

    const classes = useStyles()

    const updateHealth = (e: ChangeEvent<HTMLTextAreaElement>) => { 
        if ( Number(e.currentTarget.value) > 100 || Number(e.currentTarget.value) < 0) {
            
        }
        else setHealth(String(e.currentTarget.value) ) 
    }
    const updateStage = (e: ChangeEvent<HTMLTextAreaElement>) => { 
        setStage(String(e.currentTarget.value) ) 
    }
    const updateUnits = (e: ChangeEvent<HTMLTextAreaElement>) => { 
        setUnit(String(e.currentTarget.value) ) 
    }

    return (
        <form className = {classes.form}>
            <FormGroup>
                <TextField className = {classes.textField} type = "number" required value = { health } label = "Health" onChange = {updateHealth}></TextField>
                <TextField className = {classes.textField} type = "number" required value = { stage } label = "Stage"></TextField>
                <TextField className = {classes.textField} type = "number" required value = { units } label = "Units"></TextField>
            </FormGroup>
            <Button variant = "outlined" color = "primary">Show health</Button>
        </form>
    )
}
