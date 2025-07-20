import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LanguageContext from './LanguageContext.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import AnalyticsBackground from './assets/AnalyticsBackground.png';
import Home from './pages/Home.jsx';
import Charts from './pages/Charts.jsx';
import McDonaldsRevenueChart from './pages/McdonaldsRevenueChart.jsx';
import GlobalTemperatureChart from './pages/GlobalTemperatureChart.jsx';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="app-wrapper">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${AnalyticsBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.7,
          }}
        />
        <Navbar />

        <main className="dashboard-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/charts/mcdonalds" element={<McDonaldsRevenueChart />} />
            <Route path="/charts/global-temperature" element={<GlobalTemperatureChart />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
