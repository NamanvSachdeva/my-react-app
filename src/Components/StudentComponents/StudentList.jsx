import { useState } from "react";
import ListStudentHead from "./HeaderStudentLis"
import StudentTable from "./StudentRow";
import FilterShowRow from "./filterrow";

export default function StudentList() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    className: "",
    section: "",
    rollNumber: "",
  });

  return (
    <section className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <ListStudentHead
        search={search}
        setSearch={setSearch}
        filters={filters}
        setFilters={setFilters}

      />

      <FilterShowRow
        filters={filters}
        setFilters={setFilters}
      />

      {/* Table */}
      <StudentTable
        search={search}
        filters={filters}
      />

    </section>
  );
}