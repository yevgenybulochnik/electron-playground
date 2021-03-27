import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import UserCard from './UserCard'


const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 10,
  },
  header: {
    marginBottom: 5,
  },
  group: {
    padding: 5,
  },
  users: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}))

export default function GroupCard({ name, users }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.group} elevation={3}>
        <Typography className={classes.header}>
          {name}
        </Typography>
        <div className={classes.users}>
          {users.map(user =>
            <UserCard user={user} />
          )}
        </div>
      </Paper>
    </div>
  )
}
