// Sidebar.js

import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem >
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem >
          <ListItemText primary="About" />
        </ListItem>
        <ListItem >
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
