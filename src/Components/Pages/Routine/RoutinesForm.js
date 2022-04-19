
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { initialForm, metric, occurences, time } from './routinesData.js';

const RoutinesForm = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
        "form": {
            "display": "flex",
            "flexDirection": "column",
            "margin": "0 auto",
            "rowGap": "1rem",
            "width": ["100%", "50%"]
        },
        "modal": {
            "position": 'absolute',
            "top": '50%',
            "left": '50%',
            "transform": 'translate(-50%, -50%)',
            "width": 400,
            "bgcolor": 'background.paper',
            "border": '2px solid #000',
            "boxShadow": 24,
            "p": 4,
        },

    }

    const [form, setForm] = useState(initialForm);
    const [count, setCount] = useState(1);

    const incCount = () => {
        setCount(count + 1);
        console.log(count);
    }

    const decCount = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            setCount(1);
            alert("You must enter a value greater than 1");
        }
    }

    const AddButton = () => {
        return (
            <Button onClick={incCount}>
                <AddIcon />
            </Button>
        )
    }

    const SubButton = () => {
        return (
            <Button onClick={decCount}>
                <RemoveIcon />
            </Button>
        )
    }

    const CountButtons = () => {
        return (
            <>
                <AddButton />
                <SubButton />
            </>
        )
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted: ', form);
    }

    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>Create a Routine</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={styles.modal}
            >
            <Box component="form" sx={styles.form} autoComplete="off">
                <Typography variant="h2">Create a routine</Typography>
                <TextField variant="outlined" onChange={handleChange} name="name" label="Name" placeholder="Drink more water" />
                <TextField variant="outlined" onChange={handleChange} name="count" label="Goal"  value={count} InputProps={{endAdornment: <CountButtons />}} />
                <TextField variant="outlined" onChange={handleChange} name="metric" select label="Is this habit time or task based?">
                    {metric.map((obj) => (
                        <MenuItem key={obj} value={obj}>{obj}</MenuItem>
                    ))}
                </TextField>
                <TextField variant="outlined" onChange={handleChange} name="occurence" select label="How often will this take place?">
                    {occurences.map((obj) => (
                        <MenuItem key={obj} value={obj}>{obj}</MenuItem>
                    ))}
                </TextField>
                <TextField variant="outlined" onChange={handleChange} name="time" select placeholder="morning? afternoon? evening?">
                    {time.map((obj) => (
                        <MenuItem key={obj} value={obj}>{obj}</MenuItem>
                    ))}
                </TextField>
                <Button variant="outlined" type="submit" onClick={handleSubmit}>Create Routine</Button>
            </Box>
            </Modal>
        </>
    )
}

export default RoutinesForm;
