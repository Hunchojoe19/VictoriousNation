import "./App.css";
import NextPage from "./components/NextPage/NextPage";
import ThirdPage from "./components/third_page/ThirdPage";
import LandingPage from "./components/landing_page/LandingPage";
import NavBar from "./components/reusables/NavBar";
import { Route, Routes } from "react-router-dom";
import About_Us from "./components/About/About_Us";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/nextpage" element={<NextPage />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/donations" element={<ThirdPage />} />
        <Route path="/about" element={<About_Us />} />
      </Routes>
    </div>
  );
}

export default App;
