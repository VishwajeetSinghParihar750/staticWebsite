import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ManufacturingPage from './pages/Manufacturing';
import HomePage from './pages/Homepage';
function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Manufacturing Page */}
        <Route path="/manufacturing" element={<ManufacturingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
