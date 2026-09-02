import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Plus,
  X,
} from "lucide-react";

export default function StudentListHeader({
  search,
  setSearch,
  filters,
  setFilters,
}) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <header className="relative flex flex-col gap-4 border-b border-gray-100 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">

      {/* Heading */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
          All Students
        </h2>

        <p className="mt-1 text-xs text-gray-400 sm:text-sm">
          Manage and view all students in the school
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">

        {/* Search */}
        <div className="relative">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search name or admission no."
            className="w-full rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 sm:w-64"
          />
        </div>

        {/* Filter Wrapper */}
        <div className="relative">

          {/* Filter Button */}
          <button
            type="button"
            onClick={() => setShowFilters((prev) => !prev)}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 sm:w-auto"
          >
            <SlidersHorizontal size={17} />

            <span>
              Filter
            </span>
          </button>


          {/* Filter Panel */}
          {showFilters && (
            <div className="absolute right-0 top-full z-50 mt-2 w-72 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl">

              {/* Panel Header */}
              <div className="mb-4 flex items-center justify-between">

                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    Filter Students
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    Narrow down the student list
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowFilters(false)}
                  className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                >
                  <X size={17} />
                </button>

              </div>


              {/* Class */}
              <div className="mb-4">
                <label className="mb-1.5 block text-xs font-semibold text-gray-600">
                  Class
                </label>

                <select
                  value={filters.className}
                  onChange={(event) =>
                    setFilters({
                      ...filters,
                      className: event.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                >
                  <option value="">All Classes</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>


              {/* Section */}
              <div className="mb-4">
                <label className="mb-1.5 block text-xs font-semibold text-gray-600">
                  Section
                </label>

                <select
                  value={filters.section}
                  onChange={(event) =>
                    setFilters({
                      ...filters,
                      section: event.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                >
                  <option value="">All Sections</option>
                  <option value="A">Section A</option>
                  <option value="B">Section B</option>
                  <option value="C">Section C</option>
                  <option value="D">Section D</option>
                </select>
              </div>


              {/* Roll Number */}
              <div className="mb-5">
                <label className="mb-1.5 block text-xs font-semibold text-gray-600">
                  Roll Number
                </label>

                <input
                  type="Number"
                  value={filters.rollNumber}
                  onChange={(event) =>
                    setFilters({
                      ...filters,
                      rollNumber: event.target.value,
                    })
                  }
                  placeholder="Enter roll number"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
              </div>


              {/* Buttons */}
              <div className="flex gap-2">

                <button
                  type="button"
                  onClick={() => {
                    setFilters({
                      className: "",
                      section: "",
                      rollNumber: "",
                    });
                  }}
                  className="flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
                >
                  Clear
                </button>

                <button
                  type="button"
                  onClick={() => setShowFilters(false)}
                  className="flex-1 rounded-xl bg-orange-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Apply
                </button>

              </div>

            </div>
          )}

        </div>


        {/* Add Student */}
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          <Plus size={18} />

          <span>
            Add Student
          </span>
        </button>

      </div>

    </header>
  );
}