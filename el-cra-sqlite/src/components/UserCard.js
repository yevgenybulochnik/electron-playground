import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5px 5px',
  }
}))

export default function UserCard({ user }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar>
            {user.name.charAt(0)}
          </Avatar>
        }
        title={user.name}
        subheader={user.email}
      />
    </Card>
  )
}
