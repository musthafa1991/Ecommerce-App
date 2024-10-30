import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function OverviewCharts() {
  const data = [
    { name: "Jan", sales: 4000, traffic: 2400 },
    { name: "Feb", sales: 3000, traffic: 1398 },
    { name: "Mar", sales: 2000, traffic: 9800 },
    { name: "Apr", sales: 2780, traffic: 3908 },
    { name: "May", sales: 1890, traffic: 4800 },
    { name: "Jun", sales: 2390, traffic: 3800 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="traffic" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default OverviewCharts;
