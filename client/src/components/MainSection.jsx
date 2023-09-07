import { Route, Routes } from "react-router-dom";
import AllMovies from "./AllMovies";

// import components we want in main section after we make them

export default function MainSection() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/movies" element={<AllMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
