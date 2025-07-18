import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Home navigation */}
        <div className="nav-title" onClick={() => navigate('/')}>
          My Dashboard
        </div>

        {/* Navigation buttons on the right */}
        <div className="nav-buttons">
          <button className="nav-button" onClick={() => navigate('/charts')}>Charts</button>
          <button className="nav-button" onClick={toggleLanguage}>
            {language === 'en' ? 'Français' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
}
