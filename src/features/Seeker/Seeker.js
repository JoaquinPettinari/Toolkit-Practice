import { Button, Grid, TextField, Box } from '@mui/material';

function Seeker({ onChange, onClick }) {

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={4}>
                <TextField
                    label="Search some new"
                    variant="outlined"
                    name="new"
                    onChange={onChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" type="submit" onClick={onClick} >
                    Search
                </Button>
            </Grid>
        </Grid>        
    )
}

export { Seeker }