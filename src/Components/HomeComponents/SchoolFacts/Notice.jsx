import { notices, noticeCategoryIcons } from "../../../Data/Notice"; 

export default function Notices() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 transition duration-200 hover:shadow-md sm:p-6">
      
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
            Notice Board
          </h2>

          <p className="mt-1 text-xs text-gray-400 sm:text-sm">
            Recent Notices on the Board
          </p>
        </div>

        <button className="text-sm font-semibold text-orange-600 transition hover:text-orange-700">
          View all
        </button>
      </div>


      {/* Complaints */}
      <div className="space-y-3">
        {notices.map((notice) => {
          const Icon = noticeCategoryIcons[notice.category];

          return (
            <div
              key={notice.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/70 p-3 transition duration-200 hover:border-orange-100 hover:bg-orange-50"
            >
              
              {/* Category Icon */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${notice.iconBg}`}
              >
                <Icon
                  size={19}
                  strokeWidth={2.2}
                  className={notice.text}
                />
              </div>


              {/* Complaint Information */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-gray-800">
                  {notice.title}
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-400">
                  <span>
                    {notice.description}
                  </span>

                  <span>•</span>

                  <span>
                    {notice.time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}