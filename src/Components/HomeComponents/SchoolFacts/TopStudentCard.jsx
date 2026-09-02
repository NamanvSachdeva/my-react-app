import { topPerformers } from "../../../Data/TopPerformers";

export default function TopStudents() {
  return (
    <div className="w-full overflow-y-auto rounded-2xl border border-gray-200 bg-white p-5 transition duration-200 hover:shadow-md sm:p-6">
      
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
            Top Performers
          </h2>

          <p className="mt-1 text-xs text-gray-400 sm:text-sm">
            Recent Top performers of the school
          </p>
        </div>

        <button className="text-sm font-semibold text-orange-600 transition hover:text-orange-700">
          View all
        </button>
      </div>

      <div className="space-y-3">
        {topPerformers.map((performer) => {

          return (
            <div
              key={performer.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/70 py-2.5 px-4 transition duration-200 hover:border-orange-100 hover:bg-orange-50"
            >
            {/*Student Information */}
              <div className="min-w-0 flex-1">
                    <h3 className="truncate text-md font-semibold text-gray-800">
                    {performer.name}
                    </h3>

                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-400">
                    <span>
                        {performer.percentage}
                    </span>

                    <span>•</span>

                    <span>
                        {performer.class}
                    </span>
                    </div>
              </div>
                <div className="rounded-xl border border-orange-400/40 bg-orange-100 transition duration-200 hover:bg-orange-200 px-3 py-1">
                    {performer.rank}
                </div>

            </div>
          );
        }).slice(0,3)}
      </div>

    </div>
  );
}