import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
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
import { Link } from 'react-router-dom'


const electron = window.require('electron')
const ipcRenderer = electron.ipcRenderer


function closeApp() {
  ipcRenderer.send('close-app')
}

const drawerWidth = 180

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
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
  content: {
    flex: 1,
  }
}))

export default function NavBar({children}) {

  const classes = useStyles()

  return (
    <div className={classes.root}>
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
            component={Link}
            to='/'
          >
            <ListItemIcon>
              <AccountBox/>
            </ListItemIcon>
            <ListItemText primary='Accounts'/>
          </ListItem>
          <ListItem
            button
            component={Link}
            to='/users'
          >
            <ListItemIcon>
              <PersonAddIcon/>
            </ListItemIcon>
            <ListItemText primary='Add Users'/>
          </ListItem>
          <ListItem
            button
            component={Link}
            to='/groups'
          >
            <ListItemIcon>
              <GroupAddIcon/>
            </ListItemIcon>
            <ListItemText primary='Add Group'/>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolBar}/>
        <div>
          {children}
        </div>
      </main>
    </div>
  )
}
