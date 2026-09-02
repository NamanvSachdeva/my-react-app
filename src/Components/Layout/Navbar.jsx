import { Bell, Search, ChevronDown } from "lucide-react";

export default function NavBar() {
  return (
    <header className="flex min-h-20 w-full items-center justify-between  bg-white px-4 md:px-8">
      
      <div className="flex flex-col">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Good Morning,{" "}
          <span className="text-orange-600">
            Naman
          </span>
        </h2>

        <p className="mt-1 text-xs font-medium text-gray-500 md:text-sm">
          Know about your school
        </p>
      </div>

      <div className="flex items-center gap-3 md:gap-5">

        <div className="relative hidden sm:block">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-40 rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 md:w-56"
          />
        </div>

        <button className="relative flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition hover:bg-orange-50 hover:text-orange-600">
          <Bell size={20} strokeWidth={2} />

          {/* Notification badge */}
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-orange-500" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="Profile"
            className="h-9 w-9 rounded-full object-cover"
          />

          <ChevronDown
            size={17}
            className="hidden text-gray-500 font-bold sm:block"
          />
        </button>

      </div>
    </header>
  );
}