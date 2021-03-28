import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5px 5px',
  },
  avatar: {
    backgroundColor: blue[600],
  },
}))

export default function UserCard({ user }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {user.name.charAt(0)}
          </Avatar>
        }
        title={user.name}
        subheader={user.email}
      />
    </Card>
  )
}
