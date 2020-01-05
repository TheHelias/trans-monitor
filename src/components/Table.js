import React, { useState } from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
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
      render: rowData => (
        <span
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            alt='Logo'
            src={require('../assets/ellipse.png')}
            style={{ marginRight: '30px' }}
          />
          {rowData.itemType}
        </span>
      )
    },
    {
      title: 'Price',
      field: 'price',
      filtering: false,
      cellStyle: {
        color: '#7F8FA4'
      }
    },
    {
      title: 'Transaction No',
      field: 'transactionNo',
      filtering: false,
      cellStyle: {
        color: '#7F8FA4'
      }
    },
    {
      title: 'Time',
      field: 'time',
      filtering: false,
      cellStyle: {
        color: '#7F8FA4'
      }
    },
    {
      title: ' Status',
      field: 'status',
      lookup: {
        Reconciled: 'Reconciled',
        'Un-reconciled': 'Un-reconciled',
        Settled: 'Settled',
        Unsettled: 'Unsettled'
      },
      render: rowData => {
        let display = ''
        if (rowData.status === 'Reconciled') {
          display = (
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#27AE60',
                border: '1px solid #CCCFD4',
                borderRadius: '30px',
                width: '140px',
                padding: '5px 10px 5px 10px'
              }}
            >
              <Box component={FiberManualRecordIcon} mr={1} width={15} />
              {rowData.status}
            </span>
          )
        } else if (rowData.status === 'Un-reconciled') {
          display = (
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                color: ' #7F8FA4',
                border: '1px solid #CCCFD4',
                borderRadius: '30px',
                width: '140px',
                padding: '5px 10px 5px 10px'
              }}
            >
              <Box component={FiberManualRecordIcon} mr={1} width={15} />
              {rowData.status}
            </span>
          )
        } else if (rowData.status === 'Settled') {
          display = (
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#27AE60',
                border: '1px solid #CCCFD4',
                borderRadius: '30px',
                width: '140px',
                padding: '5px 10px 5px 10px'
              }}
            >
              <Box component={FiberManualRecordIcon} width={15} mr={1} />
              {rowData.status}
            </span>
          )
        } else if (rowData.status === 'Unsettled') {
          display = (
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'red',
                border: '1px solid #CCCFD4',
                borderRadius: '30px',
                width: '140px',
                padding: '5px 10px 5px 10px'
              }}
            >
              <Box component={FiberManualRecordIcon} width={15} mr={1} />
              {rowData.status}
            </span>
          )
        } else {
          display = (
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#EBC315',
                border: '1px solid #CCCFD4',
                borderRadius: '30px',
                width: '140px',
                padding: '5px 10px 5px 10px'
              }}
            >
              <Box component={FiberManualRecordIcon} width={15} mr={1} />
              Pending
            </span>
          )
        }

        return <>{display}</>
      }
    }
  ])
  const [data, setData] = useState([
    {
      itemType: 'Apple Mac Book 15" 250 SSD 12GB',
      price: '$73430',
      transactionNo: '1234567890',
      time: '12:30',
      status: 'Settled'
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
        pageSize: 10,
        filtering: true,
        headerStyle: {
          backgroundColor: '#EAEEF0',
          color: '#7F8FA4'
        },
        searchFieldStyle: {
          marginRight: '500px',
          color: '#787878'
        }
      }}
      localization={{
        toolbar: { searchPlaceholder: 'Search Payments' }
      }}
    />
  )
}

export default Table
