'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const NameLengthChart = ({
  users,
}: {
  users: { id: string; name: string | null }[];
}) => {
  const data = users.map((user) => ({
    name: user.name,
    length: user.name?.length ?? 0,
  }));

  return (
    <BarChart width={300} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="length" fill="#8884d8" />
    </BarChart>
  );
};

export default NameLengthChart;
