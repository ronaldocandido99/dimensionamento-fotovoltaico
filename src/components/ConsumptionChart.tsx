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
import { SolarSystemSpecs } from '../utils/solarCalculations';
import { Zap } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ConsumptionChartProps {
  specs: SolarSystemSpecs;
}

export function ConsumptionChart({ specs }: ConsumptionChartProps) {
  // Calculate monthly generation based on Canadian Solar 570W panel specs
  const monthlyGeneration = specs.numberOfPanels * 570 * 4.8 * 30 / 1000; // kWh

  const data = {
    labels: ['Consumo vs Geração Mensal'],
    datasets: [
      {
        label: 'Consumo Atual (kWh)',
        data: [specs.monthlyKWh],
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        borderColor: 'rgb(239, 68, 68)',
        borderWidth: 1,
      },
      {
        label: 'Geração Estimada (kWh)',
        data: [monthlyGeneration],
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        borderColor: 'rgb(34, 197, 94)',
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
        text: 'Comparação de Consumo e Geração',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'kWh',
        },
      },
    },
  };

  const efficiency = ((monthlyGeneration / specs.monthlyKWh) * 100).toFixed(1);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Zap className="h-6 w-6 text-yellow-500 mr-2" />
        <h3 className="text-xl font-semibold text-gray-900">
          Análise de Consumo e Geração
        </h3>
      </div>
      
      <Bar options={options} data={data} className="mb-4" />
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-700">
          Seu sistema solar irá gerar aproximadamente{' '}
          <span className="font-semibold text-green-600">
            {monthlyGeneration.toFixed(1)} kWh
          </span>{' '}
          por mês, o que representa{' '}
          <span className="font-semibold text-green-600">
            {efficiency}%
          </span>{' '}
          do seu consumo atual.
        </p>
      </div>
    </div>
  );
}