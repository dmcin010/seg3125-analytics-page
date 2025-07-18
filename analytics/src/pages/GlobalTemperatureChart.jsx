import React from 'react';
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
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import MetricCard from '../components/MetricCard.jsx';
import './GlobalTemperatureChart.css';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

const labels = [
  1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889,
  1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899,
  1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909,
  1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919,
  1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929,
  1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939,
  1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949,
  1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959,
  1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969,
  1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
  1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
  1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021, 2022, 2023
];

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
      label: 'Temperature Anomaly (°C)',
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
      text: 'Global Mean Temperature Anomalies (1880–2023)',
      font: { size: 18 },
    },
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'Temperature Anomaly (°C)',
      },
      beginAtZero: false,
    },
    x: {
      title: {
        display: true,
        text: 'Year',
      },
    },
  },
};

export default function GlobalTemperatureChart() {
  return (
    <div className="chart-page">
      {/* 🔙 Floating top-left button */}
      <div className="chart-top-button">
        <Link to="/charts" className="view-back-button">← Back</Link>
      </div>

      <h1 className="dashboard-title">Global Temperature Trends</h1>

      {/* 🌡️ Metric cards */}
      <div className="metric-grid">
        <MetricCard label="2023 Temperature Anomaly" value="+1.13°C" />
        <MetricCard label="Hottest Year" value="2016 (+0.99°C)" />
        <MetricCard label="1880 Baseline" value="–0.16°C" />
      </div>

      <div className="chart-wrapper">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
