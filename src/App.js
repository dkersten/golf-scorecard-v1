// components
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Rounds from './Pages/Rounds'

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
        </Routes>
    </div>
  );
}

export default App;
