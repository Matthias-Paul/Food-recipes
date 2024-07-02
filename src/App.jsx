import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularFood from "./PopularFood.jsx";
import OtherFood from "./OtherFood.jsx";
import HomePageNotFound from "./HomePageNotFound";

export default function App() {
  return (
    <Router>
    <OtherFood/>
      <Routes>
        <Route path="*" element={<PopularFood />} />
        <Route path="*" element={<HomePageNotFound />} />
      </Routes>
    </Router>
  );
}
