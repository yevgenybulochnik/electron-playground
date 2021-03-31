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
  submit: {
    display: 'flex',
    justifyContent: 'center',
  }
}))

export default function AddGroupView() {
  const classes = useStyles()
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
          fullWidth
        />
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
