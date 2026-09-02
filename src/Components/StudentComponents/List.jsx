import { studentsData } from "../../Data/Student";
import { Eye, MoreHorizontal } from "lucide-react";

const tableHeaders = [
  "Admission No",
  "Student",
  "Father",
  "Phone",
  "Class",
  "Section",
  "Roll No.",
  "Actions",
];

export default function ListOf() {
  const handleViewStudent = (student) => {
    console.log("View student:", student);
  };

  const handleStudentActions = (student) => {
    console.log("Actions for:", student);
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Table wrapper */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[1000px] border-collapse">
          
          {/* ================= HEADER ================= */}
          <thead className="bg-orange-50">
            <tr className="border-b border-orange-200">
              {tableHeaders.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="whitespace-nowrap px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* ================= BODY ================= */}
          <tbody className="divide-y divide-gray-100">
            {studentsData.length > 0 ? (
              studentsData.map((student) => (
                <tr
                  key={student.id}
                  className="group transition-colors duration-150 hover:bg-orange-50/40"
                >
                  {/* Admission Number */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="text-sm font-medium text-gray-700">
                      {student.admissionNumber}
                    </span>
                  </td>

                  {/* Student */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      
                      {/* Avatar */}
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-600"
                        aria-hidden="true"
                      >
                        {student.name?.charAt(0)?.toUpperCase() || "?"}
                      </div>

                      {/* Name + ID */}
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-gray-800">
                          {student.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          ID #{student.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Father */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="text-sm text-gray-600">
                      {student.fatherName}
                    </span>
                  </td>

                  {/* Phone */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="text-sm text-gray-600">
                      {student.fatherPhone}
                    </span>
                  </td>

                  {/* Class */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="inline-flex rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                      Class {student.className}
                    </span>
                  </td>

                  {/* Section */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="text-sm font-medium text-gray-600">
                      {student.section}
                    </span>
                  </td>

                  {/* Roll Number */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="text-sm font-medium text-gray-700">
                      {student.rollNumber}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      
                      {/* View */}
                      <button
                        type="button"
                        onClick={() => handleViewStudent(student)}
                        aria-label={`View details of ${student.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-200 text-gray-500 transition-all duration-150 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-1"
                      >
                        <Eye size={17} strokeWidth={1.8} />
                      </button>

                      {/* More actions */}
                      <button
                        type="button"
                        onClick={() => handleStudentActions(student)}
                        aria-label={`More actions for ${student.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-200 text-gray-500 transition-all duration-150 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-1"
                      >
                        <MoreHorizontal size={17} strokeWidth={1.8} />
                      </button>

                    </div>
                  </td>
                </tr>
              ))
            ) : (
              /* ================= EMPTY STATE ================= */
              <tr>
                <td
                  colSpan={tableHeaders.length}
                  className="px-5 py-12 text-center"
                >
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-sm font-medium text-gray-700">
                      No students found
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      There are currently no students to display.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}