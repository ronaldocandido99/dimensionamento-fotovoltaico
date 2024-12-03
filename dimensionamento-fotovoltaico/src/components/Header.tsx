import React from 'react';

export function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-start p-4">
      {/* UFAL Logo */}
      <img 
        src="https://ufal.br/++theme++ufal.tema.tematico/++theme++ufal.tema.tematico/imgs/brasao-ufal.svg" 
        alt="UFAL Logo" 
        className="h-16 bg-white p-2 rounded-lg shadow-md"
      />
      
      {/* IC Logo */}
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxk0_tV2T-VL5hO56OLX8YYK3Wu3-UCxqgA&s" 
        alt="IC Logo" 
        className="h-16 bg-white p-2 rounded-lg shadow-md"
      />
    </div>
  );
}