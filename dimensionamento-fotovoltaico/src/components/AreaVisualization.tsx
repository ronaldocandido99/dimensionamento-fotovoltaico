import React from 'react';
import { Ruler } from 'lucide-react';

interface AreaVisualizationProps {
  requiredArea: number;
}

export function AreaVisualization({ requiredArea }: AreaVisualizationProps) {
  // Calculate dimensions for a roughly square layout
  const width = Math.ceil(Math.sqrt(requiredArea));
  const height = Math.ceil(requiredArea / width);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Ruler className="h-5 w-5 text-blue-500 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">
          Área Necessária
        </h3>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-600">
          Área total necessária: <span className="font-semibold">{requiredArea.toFixed(1)} m²</span>
        </p>
        <p className="text-gray-600">
          Dimensões sugeridas: <span className="font-semibold">{width.toFixed(1)}m x {height.toFixed(1)}m</span>
        </p>
        
        <div className="relative border-2 border-blue-200 rounded-lg p-4">
          <div 
            className="bg-blue-50 rounded"
            style={{
              width: '100%',
              paddingTop: `${(height / width) * 100}%`,
              position: 'relative'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-blue-500 font-semibold text-sm">
                {requiredArea.toFixed(1)} m²
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}