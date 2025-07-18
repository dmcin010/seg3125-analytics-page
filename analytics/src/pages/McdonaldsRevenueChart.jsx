import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import MetricCard from '../components/MetricCard.jsx';
import { Link } from 'react-router-dom';
import LanguageContext from '../LanguageContext.js';
import { translations } from '../utils/translations.js';
import './McdonaldsRevenueChart.css';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

export default function McDonaldsRevenueChart() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const labels = [
    '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012',
    '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020',
    '2021', '2022', '2023'
  ];

  const data = {
    labels,
    datasets: [
      {
        label: t.revenueDatasetLabel,
        data: [
          19.1, 20.9, 22.8, 23.5, 22.8, 24.1, 27.0, 27.6,
          28.1, 27.4, 25.4, 24.6, 22.8, 21.0, 21.1, 19.2,
          23.2, 23.2, 25.5
        ],
        backgroundColor: 'rgba(0, 123, 255, 0.8)',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: t.revenueChartHeading,
        font: { size: 18 },
      },
      legend: { display: false },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: t.revenueYAxisLabel,
        },
        beginAtZero: false,
        ticks: { stepSize: 2 },
      },
      x: {
        title: {
          display: true,
          text: t.revenueXAxisLabel,
          font: { size: 14 },
        },
        ticks: {
          maxRotation: 90,
          minRotation: 45,
        },
      },
    },
  };

  return (
    <div className="chart-page">
      <div className="chart-top-button">
        <Link to="/charts" className="view-back-button">{t.back}</Link>
      </div>

      <h1 className="dashboard-title">{t.revenueChartTitle}</h1>

      <div className="metric-grid">
        <MetricCard label={t.revenueMetric1} value="$25.5B" />
        <MetricCard label={t.revenueMetric2} value="2013 ($28.1B)" />
        <MetricCard label={t.revenueMetric3} value="2020 ($19.2B)" />
      </div>

      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
