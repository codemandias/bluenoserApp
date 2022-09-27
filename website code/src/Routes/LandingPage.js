// This page was based upon the MUI template: https://github.com/mui/material-ui/blob/v5.8.6/docs/data/material/getting-started/templates/album/Album.js 
// It was then reworked and customized by Yunzhong and Zephyr: June 2022
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import firestore from '../firebase';
import { useEffect } from "react";
import {collection, getDocs }from "firebase/firestore";
import { Box } from '@mui/system';

const theme = createTheme();

export default function LandingPage() { 
  const[cards, setCards] = React.useState([]);

  const getBeach = async(event) => {
    const cards_temp = [];
    const querySnapshot = await getDocs(collection(firestore, "beach"));
    for (var temp of querySnapshot.docs) {
      cards_temp.push(temp.data())  
    };
    setCards(cards_temp);
  }

  useEffect(() => {
    getBeach();
  }, []);
  
  function changeImagePath(path){
    if (path) {
      return require('../images/beaches/' + path)
    } else {
      return require('../images/beaches/default.jpeg')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box id="pagebox" sx={{ display: 'flex' }} marginTop={7} marginLeft={7.8}>
      <main>
        <Container sx={{ py: 1 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container columnSpacing={12} rowSpacing = {4}>
            {cards.map((card,x) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  style={{ width: '17rem' }}
                >
                  <CardMedia
                    component="img"
                    image = {changeImagePath(cards[x]["image"])}
                    alt = {cards[x]["name"]}
                    height = "160px"                 
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cards[x]["name"]}
                    </Typography>
                    <Typography>
                      description about the beach
                    </Typography>
                    <Typography>
                      Location
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={cards[x]["link"]}>View</Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Box> 
    </ThemeProvider>
  );
}