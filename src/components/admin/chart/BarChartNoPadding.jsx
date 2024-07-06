import  { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Đồ gia dụng',
    uv: null,
    pv: 14,
    amt: 100,
  },
  {
    name: 'Phụ Kiện',
    uv: null,
    pv: 44,
    amt: 100,
  },
  {
    name: 'Rau củ',
    uv: null,
    pv: 33,
    amt: 100,
  },
  {
    name: 'Nigger',
    uv: null,
    pv: 22,
    amt: 100,
  },
  {
    name: 'Mỹ Phẩm',
    uv: null,
    pv: 31,
    amt: 100,
  },
  {
    name: 'Thịt',
    uv: null,
    pv: 20,
    amt: 100,
  },
  {
    name: 'Đồ đông lạnh',
    uv: null,
    pv: 30,
    amt: 100,
  },
];

export default class BarChartNoPadding extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-has-no-padding-2hlnt8';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#2D9CDB"  background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
