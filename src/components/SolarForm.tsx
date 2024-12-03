import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { calculateSolarSystem, type SolarSystemSpecs } from '../utils/solarCalculations';

interface SolarFormProps {
  onCalculate: (specs: SolarSystemSpecs) => void;
}

export function SolarForm({ onCalculate }: SolarFormProps) {
  const [monthlyKWh, setMonthlyKWh] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const specs = calculateSolarSystem(Number(monthlyKWh), Number(monthlyBill));
    onCalculate(specs);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <label htmlFor="monthlyKWh" className="block text-sm font-medium text-gray-700">
          Consumo Mensal (kWh)
        </label>
        <input
          type="number"
          id="monthlyKWh"
          value={monthlyKWh}
          onChange={(e) => setMonthlyKWh(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-white p-2"
          placeholder="Ex: 500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="monthlyBill" className="block text-sm font-medium text-gray-700">
          Valor da Fatura (R$)
        </label>
        <input
          type="number"
          id="monthlyBill"
          value={monthlyBill}
          onChange={(e) => setMonthlyBill(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-white p-2"
          placeholder="Ex: 400"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <Calculator className="mr-2 h-4 w-4" />
        Calcular Sistema
      </button>
    </form>
  );
}