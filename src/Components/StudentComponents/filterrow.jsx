import { X, SlidersHorizontal } from "lucide-react";

export default function FilterShowRow({ filters, setFilters }) {
  const clearFilter = (filterName) => {
    setFilters({
      ...filters,
      [filterName]: "",
    });
  };

  const clearAllFilters = () => {
    setFilters({
      className: "",
      section: "",
      rollNumber: "",
    });
  };

  const hasFilters =
    filters.className ||
    filters.section ||
    filters.rollNumber;

  // Don't show the row if no filter is selected
  if (!hasFilters) {
    return null;
  }

  return (
    <div className="px-4 py-2 w-full">

      <div className="flex flex-wrap items-center gap-2">

        {/* Filter label */}
        <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-500">
          <SlidersHorizontal size={15} />
          <span>Filters:</span>
        </div>


        {/* Class Filter */}
        {filters.className && (
          <div className="flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-700">

            <span>
              Class {filters.className}
            </span>

            <button
              type="button"
              onClick={() => clearFilter("className")}
              className="rounded-full p-0.5 transition hover:bg-orange-200"
            >
              <X size={14} />
            </button>

          </div>
        )}


        {/* Section Filter */}
        {filters.section && (
          <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">

            <span>
              Section {filters.section}
            </span>

            <button
              type="button"
              onClick={() => clearFilter("section")}
              className="rounded-full p-0.5 transition hover:bg-blue-200"
            >
              <X size={14} />
            </button>

          </div>
        )}


        {/* Roll Number Filter */}
        {filters.rollNumber && (
          <div className="flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-3 py-1.5 text-sm font-medium text-purple-700">

            <span>
              Roll No. {filters.rollNumber}
            </span>

            <button
              type="button"
              onClick={() => clearFilter("rollNumber")}
              className="rounded-full p-0.5 transition hover:bg-purple-200"
            >
              <X size={14} />
            </button>

          </div>
        )}


        {/* Clear All */}
        <button
          type="button"
          onClick={clearAllFilters}
          className="ml-2 text-xs font-semibold text-gray-400 transition hover:text-orange-600"
        >
          Clear all
        </button>

      </div>

    </div>
  );
}