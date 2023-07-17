import "./App.css";
import NextPage from "./components/NextPage/NextPage";
import ThirdPage from "./components/third_page/ThirdPage";
import Flutter from "./components/third_page/Flutter";
import LandingPage from "./components/landing_page/LandingPage";
import NavBar from "./components/reusables/NavBar";
import { Route, Routes } from "react-router-dom";
import About_Us from "./components/About/About_Us";
import Paypal from "./components/third_page/Paypal";
import Contact from "./components/contact/Contact";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/campus" element={<NextPage />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/donations" element={<ThirdPage />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/about" element={<About_Us />} />
        <Route path="/payment" element={<Flutter />} />
        <Route path="/paypal" element={<Paypal />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
