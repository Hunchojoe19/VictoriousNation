import "./App.css";
import NextPage from "./components/NextPage/NextPage";
import LandingPage from "./components/landing_page/LandingPage";
import NavBar from "./components/reusables/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      {/* <LandingPage /> */}
      <NextPage />
    </div>
  );
}

export default App;
