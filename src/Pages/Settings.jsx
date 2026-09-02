import AdmissionsChart from "../Components/HomeComponents/Analytics/AdmissionsChart";
import AttendanceChart from "../Components/HomeComponents/Analytics/AttendenceChart";
import NavBar from "../Components/Layout/Navbar";
import Sidebar from "../Components/Layout/Sidebar";

export default function Settings() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <section className="m-w-0 sm:ml-64">
        <NavBar />
        <main>
          <section className="mt-6 grid grid-col-1 gap-6 lg:grid-cols-2 px-4 lg:px-6">
            <AdmissionsChart />
            <AttendanceChart />
          </section>
          <section className="mt-6 grid grid-col-1 gap-6 lg:grid-cols-2 px-4 lg:px-6"></section>
        </main>
      </section>
    </div>
  );
}