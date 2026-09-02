import {
  Droplets,
  Monitor,
  Sparkles,
} from "lucide-react";

/*
  Complaint data

  Keep this object focused on the actual information
  about the complaint, not how the UI should look.
*/

export const complaints = [
  {
    id: 1,
    category: "Maintenance",
    title: "Water Leakage in 2nd Floor",
    status: "open",
    reportedBy: "Ramesh Kumar",
    time: "2h ago",
  },

  {
    id: 2,
    category: "Equipment",
    title: "Projector Not Working in Lab 3",
    status: "in-progress",
    reportedBy: "Anjali Verma",
    time: "5h ago",
  },

  {
    id: 3,
    category: "Cleanliness",
    title: "Cleanliness in Washrooms",
    status: "closed",
    reportedBy: "Ramesh Kumar",
    time: "1d ago",
  },
];


/*
  Status configuration

  This controls how each status should appear
  in the UI.
*/

export const complaintStatus = {
  open: {
    label: "Open",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    text: "text-blue-600",
  },

  "in-progress": {
    label: "In Progress",
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    text: "text-orange-600",
  },

  closed: {
    label: "Closed",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    text: "text-green-600",
  },
};


/*
  Category icons

  The complaint data only stores the category.
  The UI decides which icon belongs to that category.
*/

export const complaintCategoryIcons = {
  Maintenance: Droplets,
  Equipment: Monitor,
  Cleanliness: Sparkles,
};