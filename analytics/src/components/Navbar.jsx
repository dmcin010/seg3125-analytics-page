import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageContext from '../LanguageContext.js';
import { translations } from '../utils/translations.js';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-title" onClick={() => navigate('/')}>
          {t.dashboardTitle}
        </div>

        <div className="nav-buttons">
          <button className="nav-button" onClick={() => navigate('/charts')}>
            {t.charts}
          </button>
          <button className="nav-button" onClick={toggleLanguage}>
            {language === 'en' ? 'Français' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
}
