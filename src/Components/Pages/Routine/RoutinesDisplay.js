import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const RoutinesDisplay = ({ routines }) => {
    return (
        <>
        {
            routines.map((routine, key) => (
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            { routine.name }
                        </Typography>
                        <Typography variant="h5" component="div">
                            { routine.count }
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            { routine.metric }
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            { routine.occurence }
                        </Typography>
                        <Typography variant="body2">
                            I will { routine.name } { routine.count }  {routine.count === 1 ? "time" : "times"} { routine.occurence } every { routine.repeat }
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Edit</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))
        }
        </>
    )
}

export default RoutinesDisplay;