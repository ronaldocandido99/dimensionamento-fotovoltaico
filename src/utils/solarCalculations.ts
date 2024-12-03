export interface SolarSystemSpecs {
  numberOfPanels: number;
  inverterPower: number;
  totalCost: number;
  requiredArea: number;
  monthlyBill: number;
  monthlyKWh: number;
}

// Canadian Solar Panel Specifications
const PANEL_SPECS = {
  power: 570,
  area: 2.7816,
  efficiency: 0.206,
};

const IRRADIANCE = {
  average: 5.37,
};

export const calculateSolarSystem = (monthlyKWh: number, monthlyBill: number): SolarSystemSpecs => {

  const energy_produce = IRRADIANCE.average * PANEL_SPECS.area * PANEL_SPECS.efficiency * 30;

  const energy_produce_losses = energy_produce * 0.8;

  const numberOfPanels = Math.ceil(monthlyKWh / energy_produce_losses);
  
  // Calculate inverter
  const systemPowerKW = (numberOfPanels * PANEL_SPECS.power) / 1000;
  const inverterPower = Math.ceil(systemPowerKW * 1.2);
  
  // Calculate total cost (average cost per kW installed)
  const costPerKW = 4000; // R$ per kW
  const totalCost = Math.ceil(systemPowerKW * costPerKW);

  const requiredArea = numberOfPanels * PANEL_SPECS.area;

  return {
    numberOfPanels,
    inverterPower,
    totalCost,
    requiredArea,
    monthlyBill,
    monthlyKWh
  };
};