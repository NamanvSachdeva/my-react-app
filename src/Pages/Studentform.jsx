import { useState } from "react";

import PersonalForm from "../Components/StudentFormcomp/personal";
import StudentFormText from "../Components/StudentFormcomp/studentformtext";

export default function StudentForm() {
  const [student, setStudent] = useState({
    personalInfo: {
      name: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      phone: "",
    },

    academicInfo: {},

    parentsInfo: {},

    addressInfo: {},

    documentsInfo: {},

    currentClass: {},
  });

  return (
    <main className="min-h-screen w-full bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl grid-cols-1 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm lg:grid-cols-2">

        {/* Left Side */}
        <section className="relative flex flex-col justify-center border-b border-gray-100 bg-white px-6 py-10 sm:px-10 lg:border-b-0 lg:border-r lg:px-12 lg:py-12">
          <StudentFormText />
        </section>

        {/* Right Side */}
        <section className="bg-gray-50/70 px-4 py-6 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="mx-auto w-full max-w-2xl">

            {/* Form Header */}
            <div className="mb-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />

                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Step 1 of 6
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Personal Details
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                Enter the student's basic information to begin the
                admission process.
              </p>
            </div>

            {/* Personal Form */}
            <PersonalForm
              student={student}
              setStudent={setStudent}
            />

          </div>
        </section>

      </div>
    </main>
  );
}