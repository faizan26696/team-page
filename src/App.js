import "./App.css";
import Mentors from "./Components/Mentors";
import UniversitySection from "./Components/UniversitySection";

function App() {
  return (
    <div className="bg-radial at-[7.4% 17.9%] bg-gradient-to-br from-blue-400 to-purple-400 h-full">
      <h1 className="text-3xl font-bold text-white text-center bg-blue-200 p-3">
        Team-Page
      </h1>
      <UniversitySection />
      <Mentors />
    </div>
  );
}

export default App;
