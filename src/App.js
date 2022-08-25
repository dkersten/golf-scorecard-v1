// components
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Rounds from './Pages/Rounds'
import Yardages from './Pages/Yardages'
import Courses from './Pages/Courses'
import Goals from './Pages/Goals'

// styling
import './styling/App.scss';

// libraries
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rounds" element={<Rounds />} />
          <Route path="/yardages" element={<Yardages />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
    </div>
  );
}

export default App;
