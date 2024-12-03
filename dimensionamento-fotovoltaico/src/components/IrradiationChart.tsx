import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { monthlyIrradiationData } from '../utils/irradiationData';
import { Sun } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function IrradiationChart() {
  const data = {
    labels: monthlyIrradiationData.labels,
    datasets: [
      {
        label: 'Irradiação Solar (kWh/m²/dia)',
        data: monthlyIrradiationData.values,
        backgroundColor: 'rgba(250, 204, 21, 0.5)',
        borderColor: 'rgb(250, 204, 21)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Irradiação Solar Média Diária',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'kWh/m²/dia',
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Sun className="h-5 w-5 text-yellow-500 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">
          Potencial Solar da Região
        </h3>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
}