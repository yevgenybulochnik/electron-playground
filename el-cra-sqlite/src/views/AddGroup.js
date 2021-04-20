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
  submit: {
    display: 'flex',
    justifyContent: 'center',
  }
}))

export default function AddGroupView() {
  const classes = useStyles()
  const [group, setGroup] = useState('')

  const handleSubmit = () => {
    ipcRenderer.invoke('add-group', { group }).then(res => {
      console.log(res)
      setGroup('')
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.header}>
          Create Group Form
        </Typography>
        <TextField
          label='Group Name'
          helperText='Enter new group name'
          variant='outlined'
          value={group}
          onChange={(event) => setGroup(event.target.value)}
          fullWidth
        />
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
