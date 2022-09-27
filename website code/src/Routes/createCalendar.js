import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
// import { collection, query, where } from "firebase/firestore";
import { useState } from "react";
import DatePicker from "react-datepicker";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import firestore from '../firebase';
import { doc, setDoc } from "@firebase/firestore";

import "react-datepicker/dist/react-datepicker.css";
import { FormControl } from '@mui/material';


const theme = createTheme();

export default function CreateBeach() {
  const [startDate, setStartDate] = useState(new Date());
  
  const [beach, setbeach] = React.useState('');

  const handleChange = (event) => {
    setbeach(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // i am using beach link as the calendar event name rn, change this later, should be a random uid
    await setDoc(doc(firestore, "calendar", data.get('beach')),{
      beach: data.get('beach'),
      date: data.get('date'),
      desc: data.get('desc'),
      event: data.get('event-name'),
      link: data.get('link')
    });
    alert(`Event Uploaded`);
    window.location.reload(false);
  };

  return (
    <Box id="pagebox" sx={{ display: 'flex', height: '100vh' }} marginTop={7} marginLeft={7.8} >
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
            <CalendarMonth />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create a New Calendar Event
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="event-name"
                  required
                  fullWidth
                  id="event-name"
                  label="Event Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="desc"
                  label="Description"
                  name="desc"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  id="beach"
                  label="Beach"
                  name="beach"
                />
              {/* <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label">Beach</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="beach"
                        name="beach"
                        value={beach}
                        label="Beach"
                        onChange={handleChange}
                    >
                        <MenuItem value={'queensland'}>Queensland</MenuItem>
                        <MenuItem value={'crystal crescent'}>Crystal Crescent</MenuItem>
                        <MenuItem value={'martinique'}>Martinique</MenuItem>
                        <MenuItem value={'clam harbour'}>Clam Harbour</MenuItem>
                    </Select>
                </FormControl> */}
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                    <label>Date</label>
                    <DatePicker 
                        selected={startDate} 
                        onChange={(date:Date) => setStartDate(date)} 
                        name='date'
                        id='date'
                    />
                </FormControl>
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="link"
                  label="Link To Event"
                  name="link"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Event
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </Box>
  );
}