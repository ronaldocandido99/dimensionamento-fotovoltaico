import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { SolarSystemSpecs } from '../utils/solarCalculations';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PaybackChartProps {
  specs: SolarSystemSpecs;
}

export function PaybackChart({ specs }: PaybackChartProps) {
  const years = Array.from({ length: 26 }, (_, i) => i);
  const annualSavings = specs.monthlyBill * 12;
  
  const data = {
    labels: years,
    datasets: [
      {
        label: 'Economia Acumulada',
        data: years.map(year => annualSavings * year - specs.totalCost),
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.3,
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
        text: 'Retorno do Investimento ao Longo do Tempo',
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value: number) => {
            return value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            });
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Anos',
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <Line options={options} data={data} />
    </div>
  );
}