import {
  Users,
  UserRound,
  School,
  ClipboardCheck,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    title: "Total Students",
    value: 1200,
    change: "+32",
    changeLabel: "new this month",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    icon: UserRound,
    title: "Active Students",
    value: 1150,
    change: "+2",
    changeLabel: "new this month",
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    id: 3,
    icon: School,
    title: "New Admissions",
    value: 42,
    change: "+2",
    changeLabel: "this month",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 4,
    icon: ClipboardCheck,
    title: "Attendance",
    value: 93.4,
    suffix: "%",
    change: "+2.4%",
    changeLabel: "from last month",
    bg: "bg-gray-50",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
  },
];

function StudentFacts({
  icon: Icon,
  title,
  value,
  suffix = "",
  change,
  changeLabel,
  bg,
  iconBg,
  iconColor,
}) {
  return (
    <div
      className={`
        w-full
        rounded-2xl
        border border-gray-200
        ${bg}
        p-4 sm:p-5
        transition duration-200
        hover:-translate-y-0.5
        hover:shadow-md
      `}
    >
      {/* Top section */}
      <div className="flex items-center gap-3">
        <div
          className={`
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-xl
            sm:h-11 sm:w-11
            ${iconBg}
          `}
        >
          <Icon
            size={20}
            strokeWidth={2.2}
            className={iconColor}
          />
        </div>

        <p className="truncate text-sm font-medium text-gray-500 sm:text-base">
          {title}
        </p>
      </div>

      {/* Value */}
      <div className="mt-4 sm:mt-5">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {value.toLocaleString()}
          {suffix}
        </h2>

        {/* Change + Graph */}
        <div className="mt-3 flex items-end justify-between gap-2">
          
          <div className="min-w-0">
            <span className="font-semibold text-green-600">
              {change}
            </span>

            <span className="ml-1 text-xs text-gray-400 sm:text-sm">
              {changeLabel}
            </span>
          </div>

          {/* Graph */}
          <svg
            className="h-7 w-16 shrink-0 text-orange-700 sm:h-8 sm:w-[74px]"
            viewBox="0 0 74 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.171875 24.9567L12.6719 20.3438L24.1719 31.3437L39.1719 20.3438"
              stroke="currentColor"
            />

            <path
              d="M39.1719 20.3438C39.1719 20.3438 40.0719 20.7437 43.6719 22.3438C47.2719 23.9438 48.8385 24.6771 49.1719 24.8438L72.6719 0.34375"
              stroke="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function StudentStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StudentFacts
          key={stat.id}
          {...stat}
        />
      ))}
    </div>
  );
}