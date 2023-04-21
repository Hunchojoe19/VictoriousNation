import "./App.css";
import Landing from "./components/landing_page/Landing";
import { Routes, Route } from "react-router-dom";
import SecondPage from "./components/second_page/SecondPage";
import Picture from "./components/landing_page/Picture";
import GivePage from "./components/give_page/GivePage";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Landing />} />
        <Route path="/campuses" element={<SecondPage />} />
        <Route path="/about_vcn" element={<Picture />} />
        <Route path="/donate" element={<GivePage />} />
      </Route>
    </Routes>
  );
}

export default App;
