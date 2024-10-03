import React, { useState, useEffect  } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import EmployeeManagement from './components/EmployeeManagement';
import ForgotPasswordModal from './components/ForgotPasswordModal';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username, password) => {
    setIsLoggedIn(true);
    setUsername(username);
    handleSuccessfulLogin();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const handleSuccessfulLogin = () => {
    // Implement notification logic or any action upon successful login here
    alert('Login successful!');
  };
  useEffect(() => {
    // Set SameSite=None; Secure for cookies
    document.cookie = 'name=value; SameSite=None; Secure';
}, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
            <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
            <Route path="/sidebar" element={isLoggedIn ? <Sidebar /> : <Navigate to="/" />} />
            <Route path="/employeemanagement" element={isLoggedIn ? <EmployeeManagement /> : <Navigate to="/" />} />
            <Route path="/forgot-password" element={<ForgotPasswordModal actualUsername={username} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
