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

export const LikesGraph = ({
  data,
}: {
  data: {
    likesCount: number;
    postCount: number;
  }[];
}) => {
  return (
    <BarChart
      width={300}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="likesCount" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="postCount" fill="#8884d8" />
    </BarChart>
  );
};
