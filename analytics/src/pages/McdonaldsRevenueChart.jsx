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

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const McDonaldsRevenueChart = () => {
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
        ticks: {
          maxRotation: 90,
          minRotation: 45,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default McDonaldsRevenueChart;
