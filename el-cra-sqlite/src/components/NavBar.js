import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import AccountBox from '@material-ui/icons/AccountBox'


const electron = window.require('electron')
const ipcRenderer = electron.ipcRenderer


function closeApp() {
  ipcRenderer.send('close-app')
}

const drawerWidth = 180 

const useStyles = makeStyles((theme) => ({
  grow: {
    flex: 1,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    WebkitAppRegion: 'drag',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolBar: {
    height: '48px',
  },
}))

export default function NavBar() {

  const classes = useStyles()

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar variant="dense">
          <Typography className={classes.grow}>
            Electron CRA Sqlite
          </Typography>
          <IconButton
            color="inherit"
            onClick={closeApp}
          >
            <CloseIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        anchor='left'
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolBar} />
        <Divider />
        <List>
          <ListItem
            button
          >
            <ListItemIcon>
              <AccountBox/>
            </ListItemIcon>
            <ListItemText primary='Views'/>
          </ListItem>
          <ListItem
            button
          >
            <ListItemIcon>
              <PersonAddIcon/>
            </ListItemIcon>
            <ListItemText primary='Add Users'/>
          </ListItem>
          <ListItem
            button
          >
            <ListItemIcon>
              <GroupAddIcon/>
            </ListItemIcon>
            <ListItemText primary='Add Group'/>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
