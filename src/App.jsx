import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeDash from "./Pages/Home";
import Students from "./Pages/Students";
import StudentForm from "./Pages/Studentform";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<HomeDash />}
        />

        <Route
          path="/students"
          element={<Students />}
        />
        <Route 
        path="/Studentform"
        element={<StudentForm />}
        />

      </Routes>

    </BrowserRouter>
  );
}