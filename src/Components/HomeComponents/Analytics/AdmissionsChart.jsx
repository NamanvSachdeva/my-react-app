
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    session: "2021-22",
    admissions: "150"
  },
  {
    session: "2022-23",
    admissions: "200"
  },
  {
    session: "2023-24",
    admissions: "350"
  },
  {
    session: "2024-25",
    admissions: "400"
  },
  {
    session: "2025-26",
    admissions: "500"
  }
];

export default function AdmissionsChart(){
    return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      
      <div className="mb-5">
            <h2 className="text-lg font-bold text-gray-900">
            Admisssion Overview comparing 5 sessions
            </h2>

            <p className="text-sm text-gray-400">
            Students
            </p>
      </div>
      <div className="h-56 w-full">
        <ResponsiveContainer width= "100%"  height="100%" >
            <BarChart data={data}>
                <XAxis
                    dataKey="session"
                    axisLine={true}
                    tickLine={true}
                ></XAxis>

                <YAxis
                    dataKey="admissions"
                    axisLine={true}
                    tickLine={true}
                ></YAxis>
                <Tooltip />
                <Bar
                dataKey="admissions"
                fill="#F97316"
                radius={[6, 6, 0, 0]}
                animationDuration={1000}
                />
            </BarChart>
        </ResponsiveContainer>
      </div>
      
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
          Admissions
        </div>
    </div>
    )
}