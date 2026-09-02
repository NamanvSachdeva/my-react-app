import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  UserRound,
  UserCog,
  ClipboardCheck,
  CalendarDays,
  CalendarClock,
  MessageSquareWarning,
  Megaphone,
  BarChart3,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react";

const navigationItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Students",
    path: "/students",
    icon: Users,
  },
  {
    name: "Teachers",
    path: "/teachers",
    icon: UserRound,
  },
  {
    name: "Staff",
    path: "/staff",
    icon: UserCog,
  },
  {
    name: "Attendance",
    path: "/attendance",
    icon: ClipboardCheck,
  },
  {
    name: "Timetable",
    path: "/timetable",
    icon: CalendarDays,
  },
  {
    name: "Schedule",
    path: "/schedule",
    icon: CalendarClock,
  },
  {
    name: "Complaints",
    path: "/complaints",
    icon: MessageSquareWarning,
  },
  {
    name: "Notice Board",
    path: "/notices",
    icon: Megaphone,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: BarChart3,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 shrink-0 flex-col border-r border-orange-100 bg-[#FFFDF9] px-4 py-6 sm:flex">

      {/* Logo */}
      <div className="mb-8 flex items-center gap-3 px-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
          <GraduationCap
            size={23}
            strokeWidth={2.2}
          />
        </div>

        <div className="leading-tight">
          <h2 className="text-lg font-bold text-gray-900">
            School
          </h2>

          <span className="text-sm font-semibold text-orange-500">
            Dashboard
          </span>
        </div>

      </div>


      {/* Navigation */}
      <nav className="flex-1 space-y-1">

        {navigationItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={19}
                    strokeWidth={isActive ? 2.4 : 2}
                  />

                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}

      </nav>


      {/* Logout */}
      <div className="border-t border-gray-200 pt-4">

        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-orange-50 hover:text-orange-600"
        >
          <LogOut
            size={19}
            strokeWidth={2}
          />

          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}