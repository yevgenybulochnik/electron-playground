import React, { useState, useEffect }from 'react'
import { makeStyles } from '@material-ui/core/styles'

import GroupCard from '../components/GroupCard'

const electron = window.require('electron')
const ipcRenderer = electron.ipcRenderer


function useGroups() {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    ipcRenderer.invoke('get-user-list').then((res) => {
      const gObjects = Object.entries(res).map(value => {
        return { name: value[0], users: value[1]}
      })
      setGroups(gObjects)
    })
  }, [])

  return groups
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px 10px 10px 10px',
  }
}))

export default function AccountView() {
  const classes = useStyles()

  const groups = useGroups()

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
