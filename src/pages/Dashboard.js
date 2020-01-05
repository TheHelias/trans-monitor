import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Chart from '../components/Chart'
import Table from '../components/Table'
import ResponsiveDrawer from '../components/Drawer'
import TransactionPaper from '../components/TransactionPaper'

const useStyles = makeStyles(theme => ({
  paper: {
    borderRadius: '2px !important',
    padding: '20px',
    marginLeft: '3px',
    boxShadow: 'none !important',
    marginBottom: '3px'
  },
  img: {
    margin: 0,
    background: '#FDC203'
  },
  text: {
    margin: 0
  },
  div: {
    marginBottom: '8px'
  }
}))
function Dashboard () {
  const classes = useStyles()

  return (
    <ResponsiveDrawer>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <TransactionPaper text='Daily Transaction Volume' amount='2,342' />
        </Grid>
        <Grid item xs={6} md={3}>
          <TransactionPaper
            text='Daily Transaction Value'
            amount='₦4,000,000'
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TransactionPaper text='Total Transaction Volume' amount='452,000' />
        </Grid>
        <Grid item xs={6} md={3}>
          <TransactionPaper
            text='Total Transaction Value'
            amount='₦4,000,000'
          />
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item xs={8} md={8}>
          <Chart />
        </Grid>
        <Grid item xs={4} md={4}>
          <Paper className={classes.paper}>
            <h4 className={classes.text}>Orders</h4>
            <img
              alt='Chart'
              src={require('../assets/green_base.png')}
              className={classes.img}
            />
            <img
              alt='Chart'
              src={require('../assets/base.png')}
              className={classes.img}
            />
            <div className={classes.div}>
              <span>Pending Orders: </span>
              <span
                style={{
                  color: '#FDC203',
                  fontWeight: 'bold'
                }}
              >
                20
              </span>
            </div>
            <div className={classes.div}>
              <span>Reconciled Orders: </span>
              <span
                style={{
                  color: '#27AE60',
                  fontWeight: 'bold'
                }}
              >
              80
              </span>
            </div>
            <div className={classes.div}>
              <span>Total Orders: </span>
              <span
                style={{
                  color: '#1860EC',
                  fontWeight: 'bold'
                }}
              >
              100
              </span>
            </div>
          </Paper>
          <Paper className={classes.paper}>
            <h4 className={classes.text}>Payments</h4>
            <img
              alt='Chart'
              src={require('../assets/green_base.png')}
              className={classes.img}
            />
            <img
              alt='Chart'
              src={require('../assets/base.png')}
              className={classes.img}
            />
            <div className={classes.div}>
              <span>Un-reconciled Payments: </span>
              <span
                style={{
                  color: '#FDC203',
                  fontWeight: 'bold'
                }}
              >
                20
              </span>
            </div>
            <div className={classes.div}>
              <span>Reconciled Payments: </span>
              <span
                style={{
                  color: '#27AE60',
                  fontWeight: 'bold'
                }}
              >
              80
              </span>
            </div>
            <div className={classes.div}>
              <span>Total Payments: </span>
              <span
                style={{
                  color: '#1860EC',
                  fontWeight: 'bold'
                }}
              >
              100
              </span>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <br />
      <Table />
    </ResponsiveDrawer>
  )
}

export default Dashboard
