import {
  Sun,
  Wallet,
  Library,
ClipboardCheck,
  Trophy,
  UserPlus,
  CalendarDays,
  UserRound,
  Medal,
  BookOpen,
  Activity,
  Monitor,
} from "lucide-react";

/*
  Notice data

  Keep this focused only on the actual
  information about the notice.
*/

export const notices = [
  {
    id: 1,
    category: "Vacation",
    title: "Summer Vacation Notice",
    description:
      "School will remain closed from 1st June to 15th June.",
    time: "2h ago",
    iconBg: "bg-blue-100",
    text: "text-blue-600",
  },

  {
    id: 2,
    category: "Fee",
    title: "Fee Payment Reminder",
    description:
      "Last date for fee submission is 31st May.",
    time: "1d ago",
        iconBg: "bg-orange-100",
    text: "text-orange-600",
  },

  {
    id: 3,
    category: "Library",
    title: "Library Timings Updated",
    description:
      "New library timings will be effective from Monday.",
    time: "2d ago",
        iconBg: "bg-green-100",
    text: "text-green-600",
  },
];
/*
  Category icons

  Notice data only stores the category.
  The UI decides which icon belongs to
  each category.
*/
export const highlights = [
  {
    id: 1,
    category: "Attendance",
    title: "Attendance improved",
    description: "Overall school attendance increased by 2.4% this month.",
    time: "2h ago",
  },

  {
    id: 2,
    category: "Performance",
    title: "Top academic performance",
    description: "Class 10-A achieved the highest average score this month.",
    time: "4h ago",
  },

  {
    id: 3,
    category: "Admissions",
    title: "New admissions",
    description: "32 new students have been admitted this month.",
    time: "6h ago",
  },

  {
    id: 4,
    category: "Event",
    title: "Annual Sports Day",
    description: "Annual Sports Day has been scheduled for 28th August.",
    time: "8h ago",
  },

  {
    id: 5,
    category: "Teacher",
    title: "New teacher joined",
    description: "A new Mathematics teacher has joined the Science department.",
    time: "1d ago",
  },

  {
    id: 6,
    category: "Achievement",
    title: "Inter-school competition",
    description: "Students secured first position in the district science competition.",
    time: "1d ago",
  },

  {
    id: 7,
    category: "Examination",
    title: "Examination schedule released",
    description: "The upcoming examination timetable has been published.",
    time: "2d ago",
  },

  {
    id: 8,
    category: "Activity",
    title: "Library activity increased",
    description: "Library usage increased by 18% compared with last month.",
    time: "2d ago",
  },

  {
    id: 9,
    category: "Maintenance",
    title: "Computer lab upgraded",
    description: "Lab 3 has received new computers and networking equipment.",
    time: "3d ago",
  },

  {
    id: 10,
    category: "Achievement",
    title: "Sports team qualified",
    description: "The school football team qualified for the regional finals.",
    time: "3d ago",
  },
];

export const highlightCategoryConfig = {
  Attendance: {
    icon: ClipboardCheck,
    iconBg: "bg-blue-100",
    text: "text-blue-600",
  },

  Performance: {
    icon: Trophy,
    iconBg: "bg-purple-100",
    text: "text-purple-600",
  },

  Admissions: {
    icon: UserPlus,
    iconBg: "bg-green-100",
    text: "text-green-600",
  },

  Event: {
    icon: CalendarDays,
    iconBg: "bg-orange-100",
    text: "text-orange-600",
  },

  Teacher: {
    icon: UserRound,
    iconBg: "bg-rose-100",
    text: "text-rose-600",
  },

  Achievement: {
    icon: Medal,
    iconBg: "bg-yellow-100",
    text: "text-yellow-600",
  },

  Examination: {
    icon: ClipboardCheck,
    iconBg: "bg-indigo-100",
    text: "text-indigo-600",
  },

  Activity: {
    icon: Activity,
    iconBg: "bg-cyan-100",
    text: "text-cyan-600",
  },

  Maintenance: {
    icon: Monitor,
    iconBg: "bg-gray-100",
    text: "text-gray-600",
  },
};
/*
  Category icons

  Notice data only stores the category.
  The UI decides which icon belongs to
  each category.
*/

export const noticeCategoryIcons = {
  Vacation: Sun,
  Fee: Wallet,
  Library: Library,
};