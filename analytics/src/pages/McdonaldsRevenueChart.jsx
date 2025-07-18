import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import MetricCard from '../components/MetricCard.jsx';
import { Link } from 'react-router-dom'; // ✅ For routing
import './McdonaldsRevenueChart.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const labels = [
  '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012',
  '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020',
  '2021', '2022', '2023'
];

const data = {
  labels,
  datasets: [
    {
      label: 'Revenue (in Billion USD)',
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
      text: "Revenue of McDonald's Worldwide From 2005 to 2023",
      font: {
        size: 18,
      },
    },
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: '(in billion U.S. dollars)',
      },
      beginAtZero: false,
      ticks: {
        stepSize: 2,
      },
    },
    x: {
      title: {
        display: true,
        text: 'Year',
        font: {
          size: 14,
        },
      },
      ticks: {
        maxRotation: 90,
        minRotation: 45,
      },
    },
  },
};

export default function McDonaldsRevenueChart() {
  return (
    <div className="chart-page">
      {/* 🔙 Floating top-right button */}
      <div className="chart-top-button">
        <Link to="/charts" className="view-back-button">← Back</Link>
      </div>

      <h1 className="dashboard-title">McDonald's Revenue Overview</h1>

      <div className="metric-grid">
        <MetricCard label="2023 Revenue" value="$25.5B" />
        <MetricCard label="Peak Year" value="2013 ($28.1B)" />
        <MetricCard label="Pandemic Dip" value="2020 ($19.2B)" />
      </div>

      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
