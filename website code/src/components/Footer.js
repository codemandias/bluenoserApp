
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

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

export default function StickyFooter() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 2, mb: 2 }} maxWidth="lg">
        
      <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Signup</Box>
                            <Box>
                                <Link href="LifeguardSignup" color="inherit">
                                    Lifeguard Signup
                                </Link>
                            </Box>
                            <Box>
                                <Link href="#" color="inherit">
                                    Admin Signup
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Social Media</Box>
                            <Box>
                                <Link href="https://www.facebook.com/Beach.Bluenoser" color="inherit">
                                    Facebook
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://twitter.com/beach_bluenoser" color="inherit">
                                    Twitter
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://www.instagram.com/beach.bluenoser/" color="inherit">
                                    Instagram
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://www.tiktok.com/@beach.bluenoser" color="inherit">
                                    Tiktok
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}