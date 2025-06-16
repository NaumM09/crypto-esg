import React, { useState } from 'react';
import "./App.css";
import EcoVestHomepage from './components/Home';
import TechnologyPage from './pages/Tech'; // Import the new tech page

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && (
        <EcoVestHomepage onNavigate={handleNavigation} />
      )}
      {currentPage === 'technology' && (
        <TechnologyPage onNavigate={handleNavigation} />
      )}
    </div>
  );
}

export default App;