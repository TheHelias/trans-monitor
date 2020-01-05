import React from 'react'
import ResponsiveDrawer from '../components/Drawer'
import TransactionPaper from '../components/TransactionPaper'
import { Grid } from '@material-ui/core'
function Dashboard () {
  return (
    <ResponsiveDrawer>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <TransactionPaper text='Daily Transaction Volume' amount='2,342' />
        </Grid>
        <Grid item xs={6} md={3}>
          <TransactionPaper text='Daily Transaction Value' amount='₦4,000,000' />
        </Grid>
        <Grid item xs={6} md={3}>
          <TransactionPaper text='Total Transaction Volume' amount='452,000' />
        </Grid>
        <Grid item xs={6} md={3}>
          <TransactionPaper text='Total Transaction Value' amount='₦4,000,000' />
        </Grid>
      </Grid>

    </ResponsiveDrawer>
  )
}

export default Dashboard
