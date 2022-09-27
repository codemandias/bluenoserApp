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
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
// import { collection, query, where } from "firebase/firestore";
import { useState } from "react";
import DatePicker from "react-datepicker";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import firestore from '../firebase';
import { doc, setDoc } from "@firebase/firestore";
import { GeoPoint} from "firebase/firestore";

import "react-datepicker/dist/react-datepicker.css";
import { FormControl } from '@mui/material';


const theme = createTheme();

export default function CreateBeach() {
  
  const [beach, setbeach] = React.useState('');

  const handleChange = (event) => {
    setbeach(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // i am using beach name as the beach name rn, change this later, should be a random uid
    await setDoc(doc(firestore, "beach", data.get('beach')),{
      image: data.get('img-path'),
      link: data.get('link'),
      location: new GeoPoint(data.get('lat'), data.get('long')),
      name: data.get('beach')
    });
    alert(`Beach Uploaded`);
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
            <BeachAccessIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create a New Beach Entry
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="img-path"
                  fullWidth
                  id="img-path"
                  label="Image Path (Not Required)"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="link"
                  label="Link To Site"
                  name="link"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="beach"
                  required
                  fullWidth
                  id="beach"
                  label="Beach Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="lat"
                  required
                  fullWidth
                  id="lat"
                  label="Latitude"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="long"
                  required
                  fullWidth
                  id="long"
                  label="Longitude"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Beach
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </Box>
  );
}