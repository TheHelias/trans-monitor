import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, ReferenceLine, Tooltip, ResponsiveContainer
} from 'recharts'
import { Paper } from '@material-ui/core'

const data = [
  {
    name: 'Jan', uv: 4000, pv: 2400, amt: 2400
  },
  {
    name: 'Feb', uv: 3000, pv: 1398, amt: 2210
  },
  {
    name: 'Mar', uv: 2000, pv: 9800, amt: 2290
  },
  {
    name: 'Apr', uv: 2780, pv: 3908, amt: 2000
  },
  {
    name: 'May', uv: 1890, pv: 4800, amt: 2181
  },
  {
    name: 'Jun', uv: 2390, pv: 3800, amt: 2500
  },
  {
    name: 'Jul', uv: 3490, pv: 4300, amt: 2100
  }
]

function Chart () {
  return (
    <Paper style={{ width: '100%', height: 330 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <ReferenceLine x='Page C' stroke='green' />
          <ReferenceLine x='Page B' stroke='green' />
          <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  )
}

export default Chart
