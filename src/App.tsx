import React, { useState } from 'react';
import { SolarForm } from './components/SolarForm';
import { ResultCard } from './components/ResultCard';
import { PaybackChart } from './components/PaybackChart';
import { AreaVisualization } from './components/AreaVisualization';
import { IrradiationChart } from './components/IrradiationChart';
import { ConsumptionChart } from './components/ConsumptionChart';
import { Header } from './components/Header';
import { type SolarSystemSpecs } from './utils/solarCalculations';
import { Sun } from 'lucide-react';

function App() {
  const [specs, setSpecs] = useState<SolarSystemSpecs | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[40vh]"
        style={{
          backgroundImage: 'url("https://noticias.ufal.br/ufal/noticias/2023/6/miniusina-solar-da-ufal-inicia-geracao-de-energia-conectada-a-rede-eletrica-da-equatorial-alagoas/10.jpg/@@images/image")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <Header />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="flex items-center justify-center mb-4">
              <Sun className="h-12 w-12 text-yellow-400" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Dimensionamento Fotovoltaico</h1>
            <p className="text-xl">Por Ronaldo Cândido</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Form Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Insira seus Dados</h2>
            <SolarForm onCalculate={setSpecs} />
          </div>
        </div>

        {specs && (
          <div className="space-y-8">
            {/* System Specs and Solar Potential */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ResultCard specs={specs} />
              <IrradiationChart />
            </div>

            {/* Consumption Analysis */}
            <ConsumptionChart specs={specs} />

            {/* Additional Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PaybackChart specs={specs} />
              <AreaVisualization requiredArea={specs.requiredArea} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;