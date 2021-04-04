import React from 'react'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


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
  submit: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default function AddUserView() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.header}>
          Create New User
        </Typography>
        <div className={classes.inputs}>
          <TextField
            label='Username'
            helperText='Enter a new Username'
            variant='outlined'
          />
          <TextField
            label='Email'
            helperText='Enter an email'
            variant='outlined'
          />
        </div>
        <div className={classes.submit}>
          <Button
            variant='contained'
            color='primary'
          >
            Create
          </Button>
        </div>
      </Paper>
    </div>
  )
}
