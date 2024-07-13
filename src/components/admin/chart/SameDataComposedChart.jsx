import  { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
//   Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Thứ Hai',
    uv: 120,
    pv: 200,
    amt: 200,
  },
  {
    name: 'Thứ Ba',
    uv: 100,
    pv: 100,
    amt: 100,
  },
  {
    name: 'Thứ Tư',
    uv: 40,
    pv: 100,
    amt: 100,
  },
  {
    name: 'Thứ Năm',
    uv: 172,
    pv: 100,
    amt: 100,
  },
  {
    name: 'Thứ Sáu',
    uv: 34,
    pv: 100,
    amt: 100,
  },
  {
    name: 'Thứ Bảy',
    uv: 44,
    pv: 100,
    amt: 100,
  },
  {
    name: 'Chủ Nhật ',
    uv: 180,
    pv: 100,
    amt: 100,
  },
];

export default class SameDataComposedChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/composed-chart-of-same-data-3cs8ym';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
