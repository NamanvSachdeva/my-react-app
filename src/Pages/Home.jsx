import NavBar from "../Components/Layout/Navbar";
import StatsCard1 from "../Components/HomeComponents/SchoolFacts/StatsCard1";
import Sidebar from "../Components/Layout/Sidebar";
import Complaints from "../Components/HomeComponents/SchoolFacts/InfoCards";
import TopStudents from "../Components/HomeComponents/SchoolFacts/TopStdnCard";
import Highlightscard from "../Components/HomeComponents/SchoolFacts/Higlights";
import Notices from "../Components/HomeComponents/SchoolFacts/Notice";
import AttendanceChart from "../Components/HomeComponents/Analytics/AttendenceChart";
import AdmissionsChart from "../Components/HomeComponents/Analytics/AdmissionsChart";



export default function HomeDash() {
  return (
    <div className="min-h-screen bg-white">

      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Application Area */}
      <section className="min-w-0 sm:ml-64">

        {/* Navbar */}
        <NavBar />

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">

          {/* Statistics */}
          <section>
            <StatsCard1 />
          </section>
          <section className="mt-6 grid grid-col-1 gap-6 lg:grid-cols-2">
            <AttendanceChart />
            <AdmissionsChart />
          </section>

          {/* About students Information */}
          <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

            <Complaints />

            <TopStudents />

          </section>
            {/* Notice, Highlights section */}
            <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

            <Notices />

            <Highlightscard/>

          </section>


        </main>

      </section>

    </div>
  );
}