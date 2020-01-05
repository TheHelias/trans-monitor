import React, { useState } from 'react'
import Cancel from '@material-ui/icons/Cancel'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import DataTable from './DataTable'

const useStyles = makeStyles(theme => ({
  button: {
    color: 'white',
    margin: '5px',
    textTransform: 'capitalize'
  }
}))

function Table ({ history }) {
  const classes = useStyles()
  const [columns] = useState([
    {
      title: '  Item Type',
      field: 'itemType',
      filtering: false,
      render: rowData =>
        <>
          <img
            alt='Logo'
            src={require('../assets/ellipse.png')}
            style={{ marginRight: '20px' }}
          />
          <span>{rowData.itemType}</span>
        </>
    },
    { title: 'Price', field: 'price', filtering: false },
    { title: 'Transaction No', field: 'transactionNo', filtering: false },
    { title: 'Time', field: 'time', filtering: false },
    {
      title: ' Status',
      field: 'status',
      lookup: { Reconciled: 'Reconciled', 'Un-reconciled': 'Un-reconciled', Settled: 'Settled', Unsettled: 'Unsettled' },
      render: rowData => {
        let display = ''
        if (rowData.status === 'Reconciled') {
          display =
            <>
              <Box
                component={CheckBoxIcon}
                pt={1}
                mr={1}
                style={{ color: 'green' }}
              />
              <span>{rowData.status}</span>
            </>
        } else if (rowData.status === 'Un-reconciled') {
          display =
            <>
              <Box component={Cancel} pt={1} mr={1} style={{ color: 'red' }} />
              <span>{rowData.status}</span>
            </>
        } else if (rowData.status === 'Settled') {
          display =
            <>
              <Box component={Cancel} pt={1} mr={1} style={{ color: 'red' }} />
              <span>{rowData.status}</span>
            </>
        } else if (rowData.status === 'Unsettled') {
          display =
            <>
              <Box component={Cancel} pt={1} mr={1} style={{ color: 'red' }} />
              <span>{rowData.status}</span>
            </>
        } else {
          display =
            <>
              <Box component={Cancel} pt={1} mr={1} style={{ color: 'red' }} />
              <span>Pending</span>
            </>
        }

        return (<>{display}</>)
      }
    }
  ])
  const [data, setData] = useState([
    {
      itemType: 'Apple Mac Book 15" 250 SSD 12GB',
      price: '$73430',
      transactionNo: '1234567890',
      time: '12:30',
      status: 'Unsettled'
    },
    {
      itemType: 'Apple Mac Book 15" 250 SSD 12GB',
      price: '$73430',
      transactionNo: '1234567890',
      time: '12:30',
      status: ''
    },
    {
      itemType: 'Apple Mac Book 15" 250 SSD 12GB',
      price: '$73430',
      transactionNo: '1234567890',
      time: '12:30',
      status: 'Reconciled'
    },
    {
      itemType: 'Apple Mac Book 15" 250 SSD 12GB',
      price: '$73430',
      transactionNo: '1234567890',
      time: '12:30',
      status: 'Reconciled'
    },
    {
      itemType: 'Apple Mac Book 15" 250 SSD 12GB',
      price: '$73430',
      transactionNo: '1234567890',
      time: '12:30',
      status: ''
    },
    {
      itemType: 'Apple Mac Book 15" 250 SSD 12GB',
      price: '$73430',
      transactionNo: '1234567890',
      time: '12:30',
      status: 'Un-reconciled'
    },
    {
      itemType: 'Apple Mac Book 15" 250 SSD 12GB',
      price: '$73430',
      transactionNo: '1234567890',
      time: '12:30',
      status: 'Reconciled'
    },
    {
      itemType: 'Apple Mac Book 15" 250 SSD 12GB',
      price: '$73430',
      transactionNo: '1234567890',
      time: '12:30',
      status: 'Un-reconciled'
    },
    {
      itemType: 'Apple Mac Book 15" 250 SSD 12GB',
      price: '$73430',
      transactionNo: '1234567890',
      time: '12:30',
      status: 'Available'
    },
    {
      itemType: 'Apple Mac Book 15" 250 SSD 12GB',
      price: '$73430',
      transactionNo: '1234567890',
      time: '12:30',
      status: 'Available'
    },
    {
      itemType: 'Apple Mac Book 15" 250 SSD 12GB',
      price: '$73430',
      transactionNo: '1234567890',
      time: '12:30',
      status: 'Available'
    },
    {
      itemType: 'Apple Mac Book 15" 250 SSD 12GB',
      price: '$73430',
      transactionNo: '1234567890',
      time: '12:30',
      status: 'Available'
    }
  ])
  return (
    <DataTable
      title='Payments'
      columns={columns}
      data={data}
      options={{
        pageSize: 20,
        filtering: true
      }}
    />
  )
}

export default Table
