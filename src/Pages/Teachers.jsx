import NavBar from "../Components/Layout/Navbar";
import Sidebar from "../Components/Layout/Sidenav";

export default function Teachers() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <section className="m-w-0 sm:ml-64">
        <NavBar />
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="text-2xl text-orange-400 font-bold">
            <h1>Teachers</h1>
          </div>
        </main>
      </section>
    </div>
  );
}