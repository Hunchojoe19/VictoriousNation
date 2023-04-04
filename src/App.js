import "./App.css";
import Landing from "./components/landing_page/Landing";
import { Routes, Route } from "react-router-dom";
import SecondPage from "./components/second_page/SecondPage";
import Picture from "./components/landing_page/Picture";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Landing />} />
        <Route path="/campuses" element={<SecondPage />} />
        <Route path="/about_vcn" element={<Picture />} />
      </Route>
    </Routes>
  );
}

export default App;
