import React, { useContext, useState } from 'react';
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
  const [lineColor, setLineColor] = useState('rgba(255, 99, 132, 0.9)');
  const [unit, setUnit] = useState('C');

  const labels = Array.from({ length: 2024 - 1880 + 1 }, (_, i) => 1880 + i);

  const temperatureData = [
    -0.17, -0.09, -0.11, -0.18, -0.28, -0.33, -0.31, -0.36, -0.17, -0.11,
    -0.35, -0.22, -0.27, -0.31, -0.31, -0.23, -0.12, -0.11, -0.28, -0.18,
    -0.09, -0.16, -0.29, -0.38, -0.48, -0.27, -0.23, -0.40, -0.44, -0.50,
    -0.45, -0.45, -0.37, -0.36, -0.16, -0.15, -0.37, -0.47, -0.31, -0.28,
    -0.28, -0.20, -0.29, -0.27, -0.28, -0.23, -0.11, -0.22, -0.20, -0.37,
    -0.16, -0.10, -0.16, -0.29, -0.13, -0.20, -0.15, -0.03,  0.00, -0.02,
     0.12,  0.18,  0.06,  0.09,  0.20,  0.09, -0.07, -0.03, -0.11, -0.11,
    -0.17, -0.07,  0.01,  0.08, -0.13, -0.14, -0.19,  0.05,  0.06,  0.03,
    -0.03,  0.06,  0.03,  0.05, -0.20, -0.11, -0.06, -0.02, -0.08,  0.05,
     0.03, -0.08,  0.01,  0.16, -0.07, -0.01, -0.10,  0.18,  0.07,  0.16,
     0.26,  0.32,  0.14,  0.31,  0.16,  0.12,  0.18,  0.32,  0.39,  0.27,
     0.45,  0.40,  0.22,  0.23,  0.31,  0.44,  0.33,  0.46,  0.61,  0.38,
     0.39,  0.53,  0.63,  0.61,  0.53,  0.68,  0.64,  0.66,  0.54,  0.65,
     0.72,  0.61,  0.65,  0.68,  0.75,  0.90,  1.01,  0.92,  0.85,  0.98,
     1.01,  0.85,  0.89,  1.17,  1.29
  ];

  const convertedData = unit === 'F'
    ? temperatureData.map(val => +((val * 9) / 5 + 32).toFixed(2))
    : temperatureData;

  const convert = (val) => unit === 'F'
    ? `${((val * 9) / 5 + 32).toFixed(2)}°F`
    : `${val.toFixed(2)}°C`;

  const highest = convert(1.13);
  const warmestYear = `2016 (${convert(0.99)})`;
  const baseline = convert(-0.16);

  const data = {
    labels,
    datasets: [
      {
        label: unit === 'F' ? t.tempDatasetLabelF : t.tempDatasetLabel,
        data: convertedData,
        borderColor: lineColor,
        backgroundColor: `${lineColor.replace('0.9', '0.1')}`,
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
          text: unit === 'F' ? t.tempYAxisLabelF : t.tempYAxisLabel,
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

      <div className="color-picker">
        <label htmlFor="lineColor">{t.tempLineColourLabel}</label>
        <input
          type="color"
          id="lineColor"
          value={lineColor}
          onChange={(e) => setLineColor(e.target.value)}
        />
      </div>

      <div className="unit-toggle">
        <label htmlFor="unit">{t.tempUnitLabel}</label>
        <select
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
        </select>
      </div>

      <div className="metric-grid">
        <MetricCard label={t.tempMetric1} value={highest} />
        <MetricCard label={t.tempMetric2} value={warmestYear} />
        <MetricCard label={t.tempMetric3} value={baseline} />
      </div>

      <div className="chart-wrapper">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
