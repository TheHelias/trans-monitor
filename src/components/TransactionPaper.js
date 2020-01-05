import React from 'react'
import { Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: '12px',
    color: '#787C90',
    margin: '20px 20px 0 20px'
  },
  amount: {
    fontSize: '18px',
    margin: '0 20px 20px 20px'
  },
  chartImage: {
    margin: '20px 30px 20px 10px'
  },
  paper: {
    boxShadow: 'none !important',
    borderRadius: '2px !important'
  }
}))
function TransactionPaper (props) {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={8} md={8}>
          <p className={classes.text}>{props.text}</p>
          <p className={classes.amount}>{props.amount}</p>
        </Grid>
        <Grid item xs={4} md={4}>
          <img
            alt='Chart'
            src={require('../assets/small_chart.png')}
            className={classes.chartImage}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TransactionPaper
