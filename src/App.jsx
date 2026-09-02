import { BrowserRouter, Routes, Route } from "react-router-dom";

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

      </Routes>

    </BrowserRouter>
  );
}