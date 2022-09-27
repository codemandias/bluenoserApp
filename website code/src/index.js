import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Signup from './Routes/Signup';
import BeachReview from './Routes/BeachReview';
import Weather from './Routes/weather/weatherData';
import SignInSide from './Routes/SignInSide';
import Homepage from './Routes/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {firebase} from "./firebase";
import { addDoc,collection } from "@firebase/firestore";
import Dashboard from './components/Dashboard';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Footer from './components/Footer';
import PasswordReset from './Routes/passwordReset';
import Profile from './Routes/Profile';
import LandingPage from './Routes/LandingPage';
import Calendar from './Routes/Calendar'
import CreateCalendar from './Routes/createCalendar'
import CreateBeach from './Routes/createBeach'
import LifeguardSignup from './Routes/LifeguardSignup';

import ImageUpload from './Routes/ImageUpload';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  
  <Router>
   
    
    
 

    <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          gap: 1,
        }}
      >
      <Dashboard />
        <Grid container spacing={2}>
          <Grid item xs={12}>
          
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', }}>
              <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<SignInSide />} />
                <Route path="home" element={<Homepage/>} />
                <Route path="weather" element={<Weather />} />
                <Route path="passwordReset" element={<PasswordReset />} />
                <Route path="calendar" element={<Calendar/>} />
                <Route path="create-calendar" element={<CreateCalendar/>} />
                <Route path="create-beach" element={<CreateBeach/>} />
                <Route path="beachReviews" element={<BeachReview />} /> 
                <Route path='lifeguardsignup' element={<LifeguardSignup/>}/>
                <Route path="profile" element={<Profile/>} /> 
                <Route path='imageupload' element={<ImageUpload/>}/>
              </Routes>
            </Paper>
          
          </Grid>
        </Grid>
      <Footer />
    </Box>
  </Router>
);


