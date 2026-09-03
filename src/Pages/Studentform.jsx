import PersonalForm from "../Components/Form/personal";
import StudentFormText from "../Components/Form/studentformtext";


export default function StudentForm() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 lg:p-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-sm min-h-[calc(100vh-5rem)]">

        {/* LEFT SIDE */}
        <div className="bg-white">
          <StudentFormText />
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-50 p-8 lg:p-10">

          <div className="bg-orange-500 rounded-2xl p-6 shadow-sm">
            
            <h2 className="text-2xl font-bold  text-white">
              Personal Details
            </h2>

            <p className="text-md text-black font-medium mt-1">
              Fill in the required information.
            </p>
              <PersonalForm />


          </div>

        </div>

      </div>

    </div>
  );
}