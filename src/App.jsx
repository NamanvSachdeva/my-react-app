import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teachers from "./Pages/Teachers";
import Settings from "./Pages/Settings";
import HomeDash from "./Pages/Home";
import Students from "./Pages/Students";

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
          path="/teachers"
          element={<Teachers />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Routes>

    </BrowserRouter>
  );
}