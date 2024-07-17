import React from 'react';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/Dashboard';
import About from './scenes/global/About';

// import './pages/Dashboard.css';
import './index.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard/*" element={<DashboardPage />} />
          {/* <Route path="/about" element={<DashboardPage />} /> */}
          <Route path="/login" element={<p>Home</p>}/>
          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
