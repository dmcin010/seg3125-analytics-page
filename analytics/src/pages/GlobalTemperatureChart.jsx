import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import MetricCard from '../components/MetricCard.jsx';
import LanguageContext from '../LanguageContext.js';
import { translations } from '../utils/translations.js';
import './GlobalTemperatureChart.css';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

export default function GlobalTemperatureChart() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const labels = Array.from({ length: 2023 - 1880 + 1 }, (_, i) => 1880 + i);

  const temperatureData = [
    -0.16, -0.08, -0.10, -0.15, -0.28, -0.31, -0.33, -0.36, -0.21, -0.11,
    -0.36, -0.22, -0.27, -0.31, -0.31, -0.20, -0.11, -0.11, -0.27, -0.16,
    -0.09, -0.15, -0.27, -0.34, -0.44, -0.27, -0.21, -0.37, -0.43, -0.47,
    -0.42, -0.44, -0.32, -0.33, -0.15, -0.10, -0.33, -0.43, -0.27, -0.22,
    -0.25, -0.14, -0.27, -0.22, -0.27, -0.15, -0.03, -0.19, -0.12, -0.36,
    -0.15, -0.12, -0.18, -0.31, -0.17, -0.19, -0.13, -0.06, -0.15, -0.05,
    0.08, 0.11, 0.07, 0.13, 0.27, 0.13, -0.06, 0.01, -0.10, -0.16,
    -0.20, 0.00, 0.03, 0.10, -0.16, 0.01, -0.02, 0.06, 0.05, 0.06,
    0.02, 0.07, 0.05, 0.15, -0.20, -0.10, -0.05, -0.02, -0.06, 0.09,
    0.03, -0.10, 0.01, 0.20, -0.07, 0.00, -0.02, 0.18, 0.08, 0.17,
    0.27, 0.30, 0.13, 0.32, 0.22, 0.12, 0.20, 0.33, 0.38, 0.29,
    0.43, 0.41, 0.23, 0.23, 0.33, 0.42, 0.32, 0.47, 0.62, 0.43,
    0.42, 0.55, 0.63, 0.52, 0.74, 0.87, 0.99, 0.90, 0.82, 0.93,
    1.02, 0.85, 0.88, 1.13
  ];

  const data = {
    labels,
    datasets: [
      {
        label: t.tempDatasetLabel,
        data: temperatureData,
        borderColor: 'rgba(255, 99, 132, 0.9)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: t.tempChartHeading,
        font: { size: 18 },
      },
      legend: { display: false },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: t.tempYAxisLabel,
        },
        beginAtZero: false,
      },
      x: {
        title: {
          display: true,
          text: t.tempXAxisLabel,
        },
      },
    },
  };

  return (
    <div className="chart-page">
      <div className="chart-top-button">
        <Link to="/charts" className="view-back-button">{t.back}</Link>
      </div>

      <h1 className="dashboard-title">{t.tempChartTitle}</h1>

      <div className="metric-grid">
        <MetricCard label={t.tempMetric1} value="+1.13°C" />
        <MetricCard label={t.tempMetric2} value="2016 (+0.99°C)" />
        <MetricCard label={t.tempMetric3} value="–0.16°C" />
      </div>

      <div className="chart-wrapper">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
