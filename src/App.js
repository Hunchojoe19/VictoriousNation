import "./App.css";
import LandingPage from "./components/landing_page/LandingPage";
import NavBar from "./components/reusables/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;
