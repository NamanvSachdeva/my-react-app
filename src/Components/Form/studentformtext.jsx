import {
  UserPlus,
  ClipboardCheck,
  ShieldCheck,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

export default function StudentFormText() {
  return (
    <div className="flex flex-col justify-between h-full p-8 lg:p-10">

      {/* TOP CONTENT */}
      <div>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-600">
          <UserPlus size={18}
           />
          Student Registration
        </div>

        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Add a new
          <span className="text-orange-500"> student</span>
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-base leading-7 mt-5 max-w-md">
          Create a new student profile by entering their personal,
          academic and contact information. Make sure all the details
          are accurate before submitting the form.
        </p>

        {/* Steps */}
        <div className="mt-10">

          <h3 className="text-sm font-semibold text-gray-800/70 mb-5">
            Registration process
          </h3>

          <div className="space-y-5">

            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white shrink-0">
                <UserPlus size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  Personal Information
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  Add the student's basic personal details.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-500 shrink-0">
                <GraduationCap size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  Academic Information
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  Enter class, section, roll number and other
                  academic details.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-500 shrink-0">
                <ClipboardCheck size={18} />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  Review & Submit
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  Review the information and create the student profile.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM INFORMATION CARD */}
      <div className="mt-10">

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">

          <div className="flex items-start gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-green-100 text-green-600 shrink-0">
              <ShieldCheck size={18} />
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 text-sm">
                Keep information accurate
              </h4>

              <p className="text-xs text-gray-500 leading-5 mt-1">
                Accurate student information helps the school
                maintain reliable academic and administrative records.
              </p>
            </div>
          </div>

          {/* Small checklist */}
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 size={14} className="text-green-500" />
              Personal details
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 size={14} className="text-green-500" />
              Academic details
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 size={14} className="text-green-500" />
              Parent / guardian information
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}