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

    const [ health, setHealth ] = useState('')
    const [ stage, setStage ] = useState('')
    const [ units, setUnit ] = useState('')
    const [ calculatedHealth, setCalculatedHealth ] = useState('')
    const classes = useStyles()

    const updateHealth = (e: ChangeEvent<HTMLTextAreaElement>) => { 
        if ( Number(e.currentTarget.value) > 100 || Number(e.currentTarget.value) < 0) {
            
        }
        else setHealth(String(e.currentTarget.value) ) 
    }
    const updateStage = (e: ChangeEvent<HTMLTextAreaElement>) => { 
        if ( Number(e.currentTarget.value) > 7) {}
        else setStage(String(e.currentTarget.value) ) 
    }
    const updateUnits = (e: ChangeEvent<HTMLTextAreaElement>) => { 
        if (Number(e.currentTarget.value) > 12) {}
        else setUnit(String(e.currentTarget.value) ) 
    }

    const calculateHealth = (e: React.SyntheticEvent) => {
        let currentHealth = Number( {health} )
        let currentStage = Number( {stage} )
        let currentUnits = Number( {units} )



        let differentialHealth = 0;

        switch (currentStage) {
            case (3): 
                differentialHealth = 2;
                break;
            case 4:
                differentialHealth = 3;
                break;
            case 5: 
                differentialHealth = 5;
                break;
            case 6:
                differentialHealth = 8;
                break;
            case 7:
                differentialHealth = 15;
                break;
        }


        switch (currentUnits) {
            case 1 || 2 || 3 || 4 || 5: 
                differentialHealth += (2 * currentUnits);
                break;
            
        }
    }

    return (
        <form className = {classes.form}>
            <FormGroup>
                <TextField className = {classes.textField} type = "number" required value = { health } label = "Health" onChange = {updateHealth}></TextField>
                <TextField className = {classes.textField} type = "number" required value = { stage } label = "Stage" onChange = {updateStage}></TextField>
                <TextField className = {classes.textField} type = "number" required value = { units } label = "Units" onChange = {updateUnits}></TextField>
            </FormGroup>
            <Button variant = "outlined" color = "primary" onClick = {calculateHealth} >Calculate</Button>
        </form>
    )
}
