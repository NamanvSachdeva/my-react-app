import AdmissionsChart from "../Components/HomeComponents/Analytics/AdmissionsChart";
import NavBar from "../Components/Layout/Navbar";
import Sidebar from "../Components/Layout/Sidebar";
import AttendanceChart from "../Components/HomeComponents/Analytics/AttendenceChart";
import StudentStats from "../Components/HomeComponents/SchoolFacts/StudentFacts";
import StudentList from "../Components/StudentComponents/StudentList";

export default function Students() {
  return (
    <div className="min-h-screen bg-white">

      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <section className="min-w-0 sm:ml-64">

        {/* Navbar */}
        <NavBar />

        <main className="p-4 sm:p-6 lg:p-8">

          {/* Student Stats */}
          <section className="mt-6 grid grid-cols-1 gap-6">
            <StudentStats />
          </section>

          {/* Analytics */}
          <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <AdmissionsChart />
            <AttendanceChart />
          </section>

          {/* Student List */}
          <section className="mt-6">
            <StudentList />
          </section>

        </main>

      </section>

    </div>
  );
}
