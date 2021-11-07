import React from 'react'
import { Typography, Button } from '@mui/material'

export default function Error() {
    return (
        <div>
            <Typography variant = "h3">
                Uh-oh, this page doesn't exist
            </Typography>
            <Button variant = "outlined" href = "/">Return to home</Button>
        </div>
    )
}
