import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
  }
}))

export default function UserCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      test
    </Card>
  )
}
