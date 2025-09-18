
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Calculator, Upload, Brain, Wrench, Palette, Camera, Sparkles } from 'lucide-react';

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

interface HardwareSuggestion {
  name: string;
  type: string;
  price: number;
  reason: string;
}

interface StyleAnalysis {
  style: string;
  confidence: number;
  characteristics: string[];
  suggestedColors: string[];
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
  const [dimensions, setDimensions] = useState({ width: 200, height: 100, depth: 60 });
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState(0);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<{
    hardware: HardwareSuggestion[];
    style: StyleAnalysis | null;
  } | null>(null);
  
  useEffect(() => {
    calculateCost();
  }, [furnitureType, material, dimensions, selectedAccessories]);
  
  const calculateCost = () => {
    const selectedFurniture = furnitureTypes.find(type => type.value === furnitureType) as FurnitureType;
    const selectedMaterial = materialOptions.find(mat => mat.value === material) as MaterialOption;
    
    // Base calculation based on dimensions (in cm) converted to cubic volume
    const volume = (dimensions.width * dimensions.height * dimensions.depth) / 1000000; // Convert to cubic meters
    let cost = selectedFurniture.basePrice * volume * 10; // Adjust multiplier for volume
    
    // Apply material multiplier
    cost = cost * selectedMaterial.priceMultiplier;
    
    // Add accessories
    const accessoriesCost = accessoryOptions
      .filter(acc => selectedAccessories.includes(acc.id))
      .reduce((sum, acc) => sum + acc.price, 0);
    
    // Add AI suggested hardware cost
    const hardwareCost = aiAnalysis?.hardware
      .reduce((sum, hw) => sum + hw.price, 0) || 0;
    
    cost += accessoriesCost + hardwareCost;
    
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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        // Trigger AI analysis
        analyzeImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async (file: File) => {
    setIsAnalyzing(true);
    
    // Mock AI analysis with realistic delay
    setTimeout(() => {
      const mockHardware: HardwareSuggestion[] = [
        {
          name: "Doreza inox moderne",
          type: "hardware",
          price: 25,
          reason: "Përshtatet mirë me stilin modern të mobiljes"
        },
        {
          name: "Sisteme tërheqëse me frenë",
          type: "mechanism",
          price: 45,
          reason: "Rekomandohen për sirtarët e kuzhinës"
        },
        {
          name: "Mentesha të forta 35mm",
          type: "hinge",
          price: 15,
          reason: "Të nevojshme për dyer të rënda"
        }
      ];

      const mockStyle: StyleAnalysis = {
        style: "Modern Minimalist",
        confidence: 87,
        characteristics: ["Vija të drejta", "Sipërfaqe të lëmuara", "Ngjyra neutrale"],
        suggestedColors: ["Bardhë mat", "Gri hiri", "Dru natyror"]
      };

      setAiAnalysis({
        hardware: mockHardware,
        style: mockStyle
      });
      setIsAnalyzing(false);
    }, 2000);
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
        {/* Image Upload Section */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <div className="space-y-4">
            {!imagePreview ? (
              <>
                <Camera className="mx-auto text-gray-400" size={48} />
                <div>
                  <Label htmlFor="image-upload" className="cursor-pointer">
                    <div className="text-lg font-medium text-gray-700 mb-2">
                      Ngarkoni një foto të mobiljes
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      JPG, PNG, WEBP deri në 10MB
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Upload size={16} />
                      Zgjidhni foton
                    </Button>
                  </Label>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <img 
                  src={imagePreview} 
                  alt="Uploaded furniture" 
                  className="max-w-full max-h-64 mx-auto rounded-lg shadow-md"
                />
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setImagePreview('');
                    setUploadedImage(null);
                    setAiAnalysis(null);
                  }}
                  className="gap-2"
                >
                  <Upload size={16} />
                  Ndryshoni foton
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* AI Analysis Results */}
        {isAnalyzing && (
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Sparkles className="animate-pulse" size={20} />
                <span className="font-medium">AI po analizon foton tuaj...</span>
              </div>
            </CardContent>
          </Card>
        )}

        {aiAnalysis && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Style Analysis */}
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-purple-700">
                  <Palette size={20} />
                  Analiza e Stilit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    {aiAnalysis.style.style}
                  </Badge>
                  <span className="text-sm text-gray-600">
                    {aiAnalysis.style.confidence}% besueshmëri
                  </span>
                </div>
                <div>
                  <Label className="text-sm font-medium">Karakteristikat:</Label>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    {aiAnalysis.style.characteristics.map((char, index) => (
                      <li key={index}>• {char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Label className="text-sm font-medium">Ngjyrat e sugjeruara:</Label>
                  <div className="flex gap-2 mt-2">
                    {aiAnalysis.style.suggestedColors.map((color, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hardware Suggestions */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Wrench size={20} />
                  Pajisje të Sugjeruara
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {aiAnalysis.hardware.map((hardware, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{hardware.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        +{hardware.price}€
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600">{hardware.reason}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        <Separator />

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
          <h3 className="font-medium text-lg">Përmasat e mobiljes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="flex justify-between">
                <Label>Gjerësia (cm)</Label>
                <span className="text-sm font-medium">{dimensions.width} cm</span>
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
                <Label>Lartësia (cm)</Label>
                <span className="text-sm font-medium">{dimensions.height} cm</span>
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

            <div>
              <div className="flex justify-between">
                <Label>Thellësia (cm)</Label>
                <span className="text-sm font-medium">{dimensions.depth} cm</span>
              </div>
              <Slider
                className="mt-2"
                value={[dimensions.depth]}
                min={20}
                max={80}
                step={5}
                onValueChange={(val) => setDimensions({ ...dimensions, depth: val[0] })}
              />
            </div>
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
