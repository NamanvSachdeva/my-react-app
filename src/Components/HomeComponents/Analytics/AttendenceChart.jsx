

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", students: 94, teachers: 96 },
  { day: "Tue", students: 92, teachers: 97 },
  { day: "Wed", students: 95, teachers: 94 },
  { day: "Thu", students: 91, teachers: 96 },
  { day: "Fri", students: 96, teachers: 98 },
];


export default function AttendanceChart() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      
      <div className="mb-5">
        <h2 className="text-lg font-bold text-gray-900">
          Attendance Overview in %
        </h2>

        <p className="text-sm text-gray-400">
          Students vs teachers
        </p>
      </div>

      <div className="h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <XAxis
              dataKey="day"
              axisLine={true}
              tickLine={true}
            />

            <YAxis
              domain={[85, 100]}
              axisLine={true}
              tickLine={true}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="students"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={false}
              animationDuration={1200}
            />

            <Line
              type="monotone"
              dataKey="teachers"
              stroke="#F97316"
              strokeWidth={3}
              dot={false}
              animationDuration={1900}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex gap-5 text-sm">

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
          Students
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
          Teachers
        </div>

      </div>

    </div>
  );
}