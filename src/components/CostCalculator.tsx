
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Calculator } from 'lucide-react';

interface MaterialOption {
  value: string;
  label: string;
  priceMultiplier: number;
}

interface AccessoryOption {
  id: string;
  name: string;
  price: number;
}

interface FurnitureType {
  value: string;
  label: string;
  basePrice: number;
}

const CostCalculator = () => {
  const furnitureTypes: FurnitureType[] = [
    { value: 'kitchen', label: 'Kuzhinë', basePrice: 350 },
    { value: 'livingRoom', label: 'Dhomë ndenjeje', basePrice: 300 },
    { value: 'bedroom', label: 'Dhomë gjumi', basePrice: 280 }
  ];
  
  const materialOptions: MaterialOption[] = [
    { value: 'mdf', label: 'MDF', priceMultiplier: 1.0 },
    { value: 'hdf', label: 'HDF', priceMultiplier: 1.2 },
    { value: 'melamine', label: 'Melaminë', priceMultiplier: 0.8 }
  ];
  
  const accessoryOptions: AccessoryOption[] = [
    { id: 'handles', name: 'Doreza cilësore', price: 45 },
    { id: 'sliders', name: 'Sisteme tërheqëse', price: 65 },
    { id: 'lighting', name: 'Ndriçim LED', price: 85 }
  ];
  
  const [furnitureType, setFurnitureType] = useState(furnitureTypes[0].value);
  const [material, setMaterial] = useState(materialOptions[0].value);
  const [dimensions, setDimensions] = useState({ width: 200, height: 100 });
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState(0);
  
  useEffect(() => {
    calculateCost();
  }, [furnitureType, material, dimensions, selectedAccessories]);
  
  const calculateCost = () => {
    const selectedFurniture = furnitureTypes.find(type => type.value === furnitureType) as FurnitureType;
    const selectedMaterial = materialOptions.find(mat => mat.value === material) as MaterialOption;
    
    // Base calculation based on dimensions (in cm) converted to square meters
    const area = (dimensions.width * dimensions.height) / 10000; // Convert to square meters
    let cost = selectedFurniture.basePrice * area;
    
    // Apply material multiplier
    cost = cost * selectedMaterial.priceMultiplier;
    
    // Add accessories
    const accessoriesCost = accessoryOptions
      .filter(acc => selectedAccessories.includes(acc.id))
      .reduce((sum, acc) => sum + acc.price, 0);
    
    cost += accessoriesCost;
    
    setTotalCost(Math.round(cost));
  };
  
  const toggleAccessory = (accessoryId: string) => {
    setSelectedAccessories(prev => {
      if (prev.includes(accessoryId)) {
        return prev.filter(id => id !== accessoryId);
      } else {
        return [...prev, accessoryId];
      }
    });
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="text-furniture-forest" size={24} />
          Kalkulator Kostoje për Mobilje
        </CardTitle>
        <CardDescription>
          Përzgjidhni specifikimet dhe parametrat për të marrë një vlerësim të përafërt të kostos për mobiljen tuaj të personalizuar.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="furniture-type">Lloji i mobiljes</Label>
            <Select
              value={furnitureType}
              onValueChange={setFurnitureType}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Zgjidhni llojin e mobiljes" />
              </SelectTrigger>
              <SelectContent>
                {furnitureTypes.map(type => (
                  <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="material">Materiali</Label>
            <Select
              value={material}
              onValueChange={setMaterial}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Zgjidhni materialin" />
              </SelectTrigger>
              <SelectContent>
                {materialOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <Label>Gjerësia (cm): {dimensions.width} cm</Label>
            </div>
            <Slider
              className="mt-2"
              value={[dimensions.width]}
              min={50}
              max={400}
              step={10}
              onValueChange={(val) => setDimensions({ ...dimensions, width: val[0] })}
            />
          </div>
          
          <div>
            <div className="flex justify-between">
              <Label>Lartësia (cm): {dimensions.height} cm</Label>
            </div>
            <Slider
              className="mt-2"
              value={[dimensions.height]}
              min={30}
              max={250}
              step={10}
              onValueChange={(val) => setDimensions({ ...dimensions, height: val[0] })}
            />
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-3">
          <h3 className="font-medium mb-3">Aksesorët</h3>
          {accessoryOptions.map(accessory => (
            <div key={accessory.id} className="flex items-center justify-between">
              <div className="space-x-2 flex items-center">
                <Switch
                  id={`accessory-${accessory.id}`}
                  checked={selectedAccessories.includes(accessory.id)}
                  onCheckedChange={() => toggleAccessory(accessory.id)}
                />
                <Label htmlFor={`accessory-${accessory.id}`}>{accessory.name}</Label>
              </div>
              <div className="text-sm text-gray-600">+{accessory.price}€</div>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex-col space-y-4">
        <Separator />
        <div className="flex justify-between items-center w-full">
          <div className="text-lg font-medium">Kosto e përafërt:</div>
          <div className="text-2xl font-bold text-furniture-forest">{totalCost}€</div>
        </div>
        <div className="text-xs text-gray-500 text-center w-full">
          *Ky është një vlerësim i përafërt. Kostoja përfundimtare mund të ndryshojë bazuar në detaje shtesë dhe specifikimet përfundimtare.
        </div>
      </CardFooter>
    </Card>
  );
};

export default CostCalculator;
