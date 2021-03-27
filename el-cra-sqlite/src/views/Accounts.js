import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import GroupCard from '../components/GroupCard'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px 10px 10px 10px',
  }
}))

export default function AccountView() {
  const classes = useStyles()

  const groups = [
    {name: 'Group A', users: [
      {name: 'user1', email: 'user1@test.com'},
      {name: 'user2', email: 'user2@test.com'},
      {name: 'user3', email: 'user3@test.com'},
      {name: 'user4', email: 'user4@test.com'},
      {name: 'user5', email: 'user5@test.com'},
    ]},
    {name: 'Group A', users: [
      {name: 'user1', email: 'user1@test.com'},
    ]},
    {name: 'Group A', users: [
      {name: 'user1', email: 'user1@test.com'},
      {name: 'user2', email: 'user2@test.com'},
    ]},
  ]

  return (
    <div className={classes.root}>
      {groups.map((group) =>
        <GroupCard
          name={group.name}
          users={group.users}
        />
      )}
    </div>
  )
}
