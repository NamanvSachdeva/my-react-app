import {
  Search,
  Eye,
  MoreHorizontal,
} from "lucide-react";

import { students } from "../../Data/Student";

export default function StudentTable({ search, filters}) {

  const normalizedSearch  = search.trim().toLowerCase();

  // Filter students according to search text
  const filteredStudents = students.filter((student) => {
    const matchesName= student.name
      .toLowerCase()
      .includes(normalizedSearch);

    const matchesAdmissionNumber = String(student.admissionNumber)
    .toLowerCase()
    .includes(normalizedSearch);
    // here !filters.className is used as to handle the 

    const matchesClass = !filters.className || String(student.className) === String(filters.className);

    const matchesRollNumber = !filters.rollNumber || String(student.rollNumber) === String(filters.rollNumber);

    const matchesSection = !filters.section || String(student.section) === String(filters.section); 


  return (
    (matchesName || matchesAdmissionNumber) &&
    matchesClass &&
    matchesSection &&
    matchesRollNumber
  );
}); 


  return (
    <div className="w-full overflow-hidden">

      {/* Horizontal scrolling on small screens */}
      <div className="w-full overflow-x-auto">

        <table className="w-full min-w-[900px] border-collapse">

          {/* ================= TABLE HEADER ================= */}
          <thead className="border-b border-orange-200 bg-orange-200/50">

            <tr>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Admission No.
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Student
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Father
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Phone
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Class
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Section
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Roll No.
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                Actions
              </th>

            </tr>

          </thead>


          {/* ================= TABLE BODY ================= */}
          <tbody className="divide-y divide-gray-100 bg-white">

            {filteredStudents.length > 0 ? (

              filteredStudents.map((student) => (

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
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-600">
                        {student.name.charAt(0)}
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
                        aria-label={`View details of ${student.name}`}
                        className="rounded-lg p-2 text-gray-400 transition hover:bg-orange-100 hover:text-orange-600"
                      >
                        <Eye size={17} />
                      </button>


                      {/* More */}
                      <button
                        type="button"
                        aria-label={`More actions for ${student.name}`}
                        className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                      >
                        <MoreHorizontal size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              )).slice(0,10)

            ) : (

              /* ================= EMPTY STATE ================= */
              <tr>
                  <td colSpan={8} className="px-5 py-16">
                    <div className="flex flex-col items-center justify-center text-center">

                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                        <Search
                          size={22}
                          className="text-orange-500"
                        />
                      </div>

                      <h3 className="text-sm font-semibold text-gray-800">
                        No students found
                      </h3>

                      <p className="mt-1 max-w-sm text-xs text-gray-400">
                        We couldn't find any student matching "{search}".
                        Try searching with a different name.
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