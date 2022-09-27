import { useState, useEffect } from "react";
import { ref, uploadBytes,  getDownloadURL,listAll, list} from "@firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

 // This page was based upon the MUI template: https://github.com/mui/material-ui/tree/v5.8.2/docs/data/material/getting-started/templates/sign-in-side
// It was then reworked and customized by Ben Chui and Kyle Cumming and Patrick Wooden: July 2022
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
import {doc, setDoc} from "@firebase/firestore";
import firestore from '../firebase';
import { FirebaseError } from "firebase/app";
import { styled } from '@mui/material/styles';
const user = "kyle";
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
const Input = styled('input')({
  display: 'none',
});

const theme = createTheme();

var beaches = [
    crystal,
    martinique,
    northbay,
    queensland,
    rushtons
];

function App() {
//creating const values to hold the image the user selects to upload
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
//creating link to firebase image storage
  const imagesListRef = ref(storage, "images/");
  const uploadFile = (t) => {
    
    const fileType = imageUpload.name.split(".").at(-1);
    console.log(fileType);
    
    //if statement to make sure that filetype is value
    if (fileType == "PNG" || fileType == "JPG" || fileType == "png" || fileType == "jpeg" || fileType == "jpg"){
      
      if (imageUpload == null) return;
      //uploading image to firebase images
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
          
          var link = url;
          alert("Image Uploaded Successfully!!");
          var imageName = imageUpload.name + v4();
          //one uploaded to firebase images we then upload the link to the users image collection in firebase
          setDoc(doc(firestore,"usertable",user, "Images", imageName), {
            ImageLink: link
            
          });
        });
      });
      
    }
    else{
      alert("Please select a PNG or JPG file to upload");
      setImageUpload(null);
    }
    
    }
   
 
  
  return (
    <div className="App">
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
            
            <img src={beachLogo} width={250}  />
            
            <Box component="form" noValidate  sx={{ mt: 1 }}>
            <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file"  onChange={(event) => {
    setImageUpload(event.target.files[0]);
    console.log(imageUpload.name);
  }}/>
        <Button variant="contained" component="span" onChange={(event) => {
    setImageUpload(event.target.files[0]);
    
    
  }}>
          Select Image
        </Button>
      </label>
            
          
             
              <Button
                
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                 uploadFile();
                }}
              >
                {

                }
                Upload Image
              </Button>
              
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
     
      
    </div>
  );
}
 
export default App;
