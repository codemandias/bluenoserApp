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
import Box from '@mui/material/Box';
const theme = createTheme();


export default function Calendar() { 
  const [cards, setCards] = React.useState([]);
  const getBeach = async(event) => {
    const cards_temp = [];
    const querySnapshot = await getDocs(collection(firestore, "calendar"));
    for (var temp of querySnapshot.docs) {
      cards_temp.push(temp.data())  
    };
    setCards(cards_temp);
  }

  useEffect(() => {
    getBeach();
  }, []);

  return (
    // IN THE FUTURE THIS SHOULD BE TURNED INTO A 
    <Box id="pagebox" sx={{ display: 'flex', height: '100vh' }} marginTop={7} marginLeft={7.8} >
    <Container maxWidth="lg" sx={{ mt: 0, mb: 0, pl:0 }}>
      <ThemeProvider theme={theme}>
        <main>
          <Container sx={{ py: 1, px: 0 }} maxWidth="lg">
            {/* End hero unit */}
            <Grid container columnSpacing={8} rowSpacing = {4}>
              {cards.map((card,x) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    style={{ width: '17rem' }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {cards[x]["beach"]}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        {cards[x]["date"]}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h4" color="text.secondary">
                        {cards[x]["event"]}
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
      </ThemeProvider>
    </Container>
    </Box>
  );
}
