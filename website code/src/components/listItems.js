// This page was based upon the MUI template: https://github.com/mui/material-ui/blob/v5.8.3/docs/data/material/getting-started/templates/dashboard/listItems.js 
// It was then reworked and customized by Yunzhong and Zephyr: June 2022
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MapIcon from '@mui/icons-material/Map';
import CloudIcon from '@mui/icons-material/Cloud';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
export const mainListItems = (
  <React.Fragment>
    <ListItemButton href='/'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>

    <ListItemButton href='beachReviews'>
      <ListItemIcon>
        <MapIcon />
      </ListItemIcon>
      <ListItemText primary="Maps" />
    </ListItemButton>

    <ListItemButton href='weather'>
      <ListItemIcon>
        <CloudIcon />
      </ListItemIcon >
      <ListItemText primary="Weather" />
    </ListItemButton>
    <ListItemButton href='ImageUpload'>
      <ListItemIcon>
        <AddAPhotoIcon />
      </ListItemIcon >
      <ListItemText primary="Images" />
    </ListItemButton>
    <ListItemButton href='Profile'>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon >
      <ListItemText primary="Profile" />
    </ListItemButton>

    <ListItemButton href='Calendar'>
      <ListItemIcon>
        <CalendarMonthIcon />
      </ListItemIcon >
      <ListItemText primary="Calendar" />
    </ListItemButton>
  </React.Fragment>
);