// This page was based upon the MUI template: https://github.com/mui/material-ui/tree/v5.8.2/docs/data/material/getting-started/templates/sign-in-side
// It was then reworked and customized by Ben Chui and Kyle Cumming: June 2022
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import beachLogo from '../images/icons/nsbb-blue.jpeg'
import crystal from '../images/beaches/crystalcrescent-beach.jpg'
import martinique from '../images/beaches/martinique-beach.jpg'
import northbay from '../images/beaches/northbay-beach.jpg'
import queensland from '../images/beaches/queensland-beach.jpg'
import rushtons from '../images/beaches/rushtons-beach.jpg'
import firestore from '../firebase';
import { doc, setDoc } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";



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

export default function Signup() {
 
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    await setDoc(doc(firestore, "usertable", data.get('username')),{
      useremail: data.get('email'),
      username: data.get('username')
    });
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.get('email'), data.get('password'))
      .then((userCredential) => {
          const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message);
    });
  };
 
  return (
    <ThemeProvider theme={theme}>
      <Box id="pagebox" sx={{ display: 'flex' }} marginTop={7} marginLeft={7.8}>
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
            
            <img src={beachLogo} width={250}  />
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField 
                margin="normal"
                required
                fullWidth
                name="username"
                label="Username"
                type="username"
                id="username"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="signin" variant="body2">
                    {"Already have an account?"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      </Box>
    </ThemeProvider>
  );
}