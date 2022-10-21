// components
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Rounds from './Pages/Rounds'
import Yardages from './Pages/Yardages'
import Courses from './Pages/Courses'
import CoursesUpdated from './Pages/CoursesUpdated'
import Goals from './Pages/Goals'
import Milestones from './Pages/Milestones'

// styling
import './styling/App.scss';

// libraries
import { Routes, Route } from "react-router-dom";
import Scorecards from './Pages/Scorecards'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rounds" element={<Rounds />} />
          <Route path="/yardages" element={<Yardages />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses-updated" element={<CoursesUpdated />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/scorecards" element={<Scorecards />} />
        </Routes>
    </div>
  );
}

export default App;
