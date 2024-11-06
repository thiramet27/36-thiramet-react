import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PageHome from './pages/pageHome';
import PageOwner from './pages/pageOwner';
function App() {
  return (
    <Router>
      <nav className="bg-blue-600 p-4 shadow-md">
      <div className="flex items-center justify-center">
        <div className="space-x-10">
          <Link to="/" className="text-white hover:text-gray-300 text-3xl font-bold">Home</Link>
          <Link to="/owner" className="text-white hover:text-gray-300 text-3xl font-bold">Owner</Link>
        </div>
      </div>
    </nav>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path='/owner' element={<PageOwner />} />
      </Routes>
    </Router>
  );
}

export default App;
