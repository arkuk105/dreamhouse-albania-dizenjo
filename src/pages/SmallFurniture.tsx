import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Table, Armchair, Sofa, Image, Ruler, Plus, ChevronDown } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const SmallFurniture = () => {
  const [selectedFurniture, setSelectedFurniture] = useState<string | null>(null);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [depth, setDepth] = useState('');
  const [notes, setNotes] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const furnitureTypes = [
    { id: 'table', name: 'Tavolinë e Vogël', icon: Table, description: 'Tavolinë dekorative për ambiente të vogla' },
    { id: 'sofa-small', name: 'Divan i Vogël', icon: Sofa, description: 'Divan i vogël për hapësira të kufizuara' },
    { id: 'armchair', name: 'Kolltuk Individual', icon: Armchair, description: 'Kolltuk i vogël për hapësira të kufizuara' },
    { id: 'sofa', name: 'Divan', icon: Sofa, description: 'Divan për ambiente kompakte' }
  ];

  const readyMadeFurniture = [
    { id: 1, name: 'Tavolinë Kafeje Oslo', description: 'Tavolinë kafeje prej druri ahu, 60x40x45cm', price: '15,000 Lekë', image: '/placeholder.svg' },
    { id: 2, name: 'Kolltuk Milano', description: 'Kolltuk individual me mbulim pëlhure, 70x65x75cm', price: '35,000 Lekë', image: '/placeholder.svg' },
    { id: 3, name: 'Karrike Tirana', description: 'Karrike moderne druri dhe metal, 45x45x85cm', price: '12,000 Lekë', image: '/placeholder.svg' },
    { id: 4, name: 'Raft Librash Mini', description: 'Raft i vogël për libra, 60x25x80cm', price: '18,000 Lekë', image: '/placeholder.svg' }
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const validateDimensions = () => {
    const widthValue = parseFloat(width);
    const heightValue = parseFloat(height);
    
    if (widthValue > 100 || heightValue > 100) {
      toast({
        title: "Përmasat janë shumë të mëdha",
        description: "Mobiljet e vogla nuk mund të tejkalojnë 1 metër në gjerësi ose lartësi.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFurniture) {
      toast({
        title: "Zgjidhni një lloj mobiljeje",
        description: "Ju lutem zgjidhni llojin e mobiljes që dëshironi të porositni.",
        variant: "destructive"
      });
      return;
    }
    
    if (!validateDimensions()) {
      return;
    }
    
    toast({
      title: "Porosia u dërgua me sukses!",
      description: "Do ju kontaktojmë së shpejti për detajet e porosisë tuaj.",
    });
    
    // Reset form
    setSelectedFurniture(null);
    setWidth('');
    setHeight('');
    setDepth('');
    setNotes('');
    setImage(null);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-furniture-navy mb-2">Mobilje të Vogla</h1>
        <p className="text-lg text-gray-600 mb-8">
          Porositni mobilje të vogla të personalizuara ose zgjidhni nga koleksioni ynë i gatshëm
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Custom Furniture Order Form */}
          <div>
            <h2 className="text-2xl font-semibold text-furniture-forest mb-4">Porositni Mobilje të Personalizuara</h2>
            <p className="text-gray-600 mb-6">
              Zgjidhni llojin e mobiljes, vendosni përmasat (maksimumi 1 metër), ngarkoni një foto referencë dhe përshkruani nevojat tuaja.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {furnitureTypes.map((furniture) => (
                  <div 
                    key={furniture.id}
                    className={`border rounded-lg p-4 text-center cursor-pointer transition-all ${
                      selectedFurniture === furniture.id 
                        ? 'border-furniture-forest bg-furniture-beige' 
                        : 'border-gray-200 hover:border-furniture-wood hover:bg-furniture-cream'
                    }`}
                    onClick={() => setSelectedFurniture(furniture.id)}
                  >
                    <furniture.icon className="mx-auto h-10 w-10 mb-2 text-furniture-navy" />
                    <div className="text-sm font-medium">{furniture.name}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="width" className="flex items-center gap-1">
                    <Ruler className="h-4 w-4" />
                    Gjerësia (cm)
                  </Label>
                  <Input 
                    id="width" 
                    type="number" 
                    placeholder="Maksimumi 100cm" 
                    value={width} 
                    onChange={(e) => setWidth(e.target.value)}
                    max="100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height" className="flex items-center gap-1">
                    <Ruler className="h-4 w-4" />
                    Lartësia (cm)
                  </Label>
                  <Input 
                    id="height" 
                    type="number" 
                    placeholder="Maksimumi 100cm" 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)}
                    max="100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="depth" className="flex items-center gap-1">
                    <Ruler className="h-4 w-4" />
                    Thellësia (cm)
                  </Label>
                  <Input 
                    id="depth" 
                    type="number" 
                    placeholder="Thellësia në cm" 
                    value={depth} 
                    onChange={(e) => setDepth(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image" className="flex items-center gap-1">
                  <Image className="h-4 w-4" />
                  Ngarkoni një Foto
                </Label>
                <Input 
                  id="image" 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <p className="text-xs text-gray-500">Imazhe referencë, skica ose fotografi të ngjashme</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Shënime dhe Kërkesa</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Përshkruani detaje shtesë, materialet e preferuara, ngjyrat, etj." 
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full">Dërgo Porosinë</Button>
            </form>
          </div>

          {/* Right Column - Ready-Made Furniture */}
          <div>
            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-furniture-forest">Mobilje të Gatshme</h2>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                    <span className="ml-1">{isOpen ? 'Mbyll' : 'Shiko të gjitha'}</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              
              <p className="text-gray-600 mb-6">
                Zgjidhni nga koleksioni ynë i mobilieve të vogla dhe funksionale, gati për t'u dorëzuar.
              </p>

              {/* Always show first item */}
              <Card className="mb-4 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <img 
                    src={readyMadeFurniture[0].image} 
                    alt={readyMadeFurniture[0].name} 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-furniture-navy">{readyMadeFurniture[0].name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{readyMadeFurniture[0].description}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="font-bold text-furniture-forest">{readyMadeFurniture[0].price}</span>
                      <Button size="sm" variant="outline">Porosit</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <CollapsibleContent className="space-y-4">
                {readyMadeFurniture.slice(1).map(item => (
                  <Card key={item.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-furniture-navy">{item.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                        <div className="mt-2 flex justify-between items-center">
                          <span className="font-bold text-furniture-forest">{item.price}</span>
                          <Button size="sm" variant="outline">Porosit</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SmallFurniture;
