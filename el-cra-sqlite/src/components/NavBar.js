import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'

const electron = window.require('electron')
const ipcRenderer = electron.ipcRenderer


function closeApp() {
  ipcRenderer.send('close-app')
}

const useStyles = makeStyles((theme) => ({
  grow: {
    flex: 1,
  }
}))

export default function NavBar() {

  const classes = useStyles()

  return (
    <AppBar>
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
        >
          <MenuIcon></MenuIcon>
        </IconButton>
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
  )
}
