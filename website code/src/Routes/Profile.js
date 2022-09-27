// This page was based upon the MUI template: https://github.com/mui/material-ui/tree/v5.8.2/docs/data/material/getting-started/templates/sign-in-side
// It was then reworked and customized by Ben Chui and Noah Abay: June 2022
// This Profile page is adapted from the forget password page and redesigned by Noah Abay: July 2022
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import beachLogo from '../images/icons/nsbb-blue.jpeg'
import crystal from '../images/beaches/crystalcrescent-beach.jpg'
import martinique from '../images/beaches/martinique-beach.jpg'
import northbay from '../images/beaches/northbay-beach.jpg'
import queensland from '../images/beaches/queensland-beach.jpg'
import rushtons from '../images/beaches/rushtons-beach.jpg'
import { getAuth, updateEmail } from "firebase/auth";
import profilepic from '../images/icons/nsbb-alt.jpeg'



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Beach Bluenoser
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

var beaches = [
    crystal,
    martinique,
    northbay,
    queensland,
    rushtons
];

export default function Profile() {
    // comment out this section until styling is done
    const auth = getAuth();
    const user = auth.currentUser;
        if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const Email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        var uemail = Email;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
    }
    var Uemail=uemail;


    const handleSubmit = async(event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        updateEmail(auth.currentUser, data.get("email")).then(() => {
            // Email updated!
            // ...
            }).catch((error) => {
                    alert("Error occured");
                    // An error occurred
                    // ...
            });
      };
   


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${beaches[Math.floor(Math.random()*beaches.length)]})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            

            {/* add carousel for editing picture and connect database functionality */}
            <Avatar
                alt="Profile Picture"
                src={profilepic}
                sx={{
                    width: '250px',
                    height: '250px',
                    margin: '0 auto',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    borderRadius: '50%',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            />
            

            
            <Box component="form" noValidate onSubmit={handleSubmit}  sx={{ mt: 1 }}>
              
              <Grid container spacing={2}>
              <Grid item sm={6} md={4}>
                Email Address:
             </Grid>
             <Grid item sm={6} md={8}>
                {/* takes a moment to load due to firebase connection */}
                {Uemail} 
            </Grid>
            

            {/* Update email function */}
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Update Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
               Update Email Address
              </Button>

                <Grid item xs>
                  <Link href="passwordreset" variant="body2">
                    Reset Password
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
  }
  