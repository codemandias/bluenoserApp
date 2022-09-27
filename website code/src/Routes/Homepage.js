//Page created by Patrick Wooden
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Logo from '../images/icons/BlueNoserLogo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import styles from  '../CSS/Homepage.css';
import Dashboard from '../components/Dashboard';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
 
}));


var beaches = [
   Logo
];
function Homepage() {
  
  return (
   
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>

      </Grid>
    <Grid item xs={3} >
       
       
    </Grid>
    <Grid item xs={6}  sx={{
            backgroundImage: `url(${beaches[Math.floor(Math.random()*beaches.length)]})`,
            backgroundRepeat: 'no-repeat',
            
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }} >
    
       <img className={styles.image} src={Logo} width={1} height={250} />
       </Grid>
      <Grid item xs={3} >
      </Grid>
      <Grid item xs={3} >
       </Grid>
      <Grid item xs={2} x={{marginLeft : 'auto' , marginright : 'auto'}}>
        <Item>
       
        <FontAwesomeIcon icon={solid('clock')} size="9x"/>
        <div style={{fontSize: '18px'}}>Calendar</div>
        </Item>
      </Grid>
     
      <Grid item xs={2} sx={{marginLeft : 'auto' , marginright : 'auto'}}>
        <Item>
        <FontAwesomeIcon icon={solid('location-dot')} size="9x"/>
        <div style={{fontSize: '18px'}}>Find a Beach</div>
        </Item>
       
      </Grid>
      <Grid item xs={2}>
        <Item>
        <FontAwesomeIcon icon={solid('sun')} size="9x"/>
        <div style={{fontSize: '18px'}}>Beach Information</div>
        </Item>
      </Grid>
      <Grid item xs={3} >
       
       
       </Grid>
       <Grid item xs={3} >
       
       
       </Grid>
      <Grid item xs={2}>
        <Item>
           <FontAwesomeIcon icon={solid('cloud-sun-rain')} size="9x"/> 
           <div style={{fontSize: '18px'}}>Weather</div>
         
       
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
        <FontAwesomeIcon icon={solid('image')} size="9x"/>
        <div style={{fontSize: '18px'}}>Photos</div>
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>
        
        <FontAwesomeIcon icon={solid('life-ring')} size="9x"/>
        <div style={{fontSize: '18px'}}>Ocean Data</div>
        </Item>
      </Grid>
      <Grid item xs={3} >
       
       
       </Grid>
    </Grid>
    
  </Box>
 
  );
}
 
export default Homepage;
