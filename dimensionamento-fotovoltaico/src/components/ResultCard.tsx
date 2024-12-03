import React from 'react';
import { SolarSystemSpecs } from '../utils/solarCalculations';
import { Sun, Battery, CreditCard, Ruler } from 'lucide-react';

interface ResultCardProps {
  specs: SolarSystemSpecs;
}

export function ResultCard({ specs }: ResultCardProps) {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Especificações do Sistema
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <Sun className="h-5 w-5 text-yellow-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Quantidade de Painéis</p>
            <p className="text-lg font-medium text-gray-900">
              {specs.numberOfPanels} painéis de 570W
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <Battery className="h-5 w-5 text-blue-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Inversor Recomendado</p>
            <p className="text-lg font-medium text-gray-900">
              {specs.inverterPower}kW
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <CreditCard className="h-5 w-5 text-green-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Investimento Estimado</p>
            <p className="text-lg font-medium text-gray-900">
              {formatCurrency(specs.totalCost)}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <Ruler className="h-5 w-5 text-purple-500 mr-3" />
          <div>
            <p className="text-sm text-gray-500">Área Necessária</p>
            <p className="text-lg font-medium text-gray-900">
              {specs.requiredArea.toFixed(1)} m²
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}