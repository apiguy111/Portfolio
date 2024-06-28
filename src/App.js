import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import AnimeVerseScreen from "./Screens/AnimeVerseScreen";
import ConversaScreen from "./Screens/ConversaScreen";
import SlackCloneScreen from "./Screens/SlackCloneScreen";
import VacationFinderScreen from "./Screens/VacationFinderScreen";
import MedicareScreen from "./Screens/MedicareScreen";
import MovieManiaScreen from "./Screens/MovieManiaScreen";
import ProjectMainScreen from "./Screens/ProjectMainScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/fam" element={<ProjectMainScreen />} />
            <Route path="/Anime" element={<AnimeVerseScreen />} />
            <Route path="/Conversa" element={<ConversaScreen />} />
            <Route path="/Slack" element={<SlackCloneScreen />} />
            <Route path="/Vacation" element={<VacationFinderScreen />} />
            <Route path="/Medicare" element={<MedicareScreen />} />
            <Route path="/Movie" element={<MovieManiaScreen />} />
          </>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
