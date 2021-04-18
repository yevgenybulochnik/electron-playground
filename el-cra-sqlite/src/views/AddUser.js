import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const electron = window.require('electron')
const ipcRenderer = electron.ipcRenderer


const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px 10px 10px 10px',
  },
  header: {
    marginBottom: 10,
  },
  paper: {
    padding: 20,
  },
  inputs: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  input: {
    marginRight: 10,
  },
  submit: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default function AddUserView() {
  const classes = useStyles()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit =() => {
    ipcRenderer.invoke('add-user', {username, email}).then(res => {
      console.log(res)
      setUsername('')
      setEmail('')
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.header}>
          Create New User
        </Typography>
        <div className={classes.inputs}>
          <TextField
            className={classes.input}
            label='Username'
            helperText='Enter a new Username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            fullWidth
          />
          <TextField
            label='Email'
            helperText='Enter an email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
          />
        </div>
        <div className={classes.submit}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit}
          >
            Create
          </Button>
        </div>
      </Paper>
    </div>
  )
}
