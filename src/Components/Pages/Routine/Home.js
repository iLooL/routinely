import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import RoutinesForm from './RoutinesForm';
import RoutinesDisplay from './RoutinesDisplay';

import { routines } from './routinesData.js';

const Home = () => {

    const styles = {
        "container": {
            "minHeight": "inherit",
            "maxWidth": "1320px",
            "margin": "0 auto",
            "padding": "0 1.2rem",
            "display": "flex",
            "flexDirection": "column",
            "aligntItems": "center",
            "justifyContent": "center"
        },
    }

    return (
        <Box sx={styles.container}>
            <Typography variant="h1">Routinely</Typography>
            <RoutinesForm />
            <Grid my={4} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <RoutinesDisplay routines={routines} />
            </Grid>
        </Box>
    )
}

export default Home;