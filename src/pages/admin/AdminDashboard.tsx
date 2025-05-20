import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { BookOpen, FileText, Image, MessageSquare, Pencil } from 'lucide-react';

// This would normally be connected to a real API
const generateArticleWithAI = async (topic: string, keywords: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Sample AI-generated content based on furniture topics
  const topics = {
    'materiale': `
      # Përdorimi i materialeve të qëndrueshme në mobiljet moderne

      Në botën e sotme, ku ndërgjegjësimi për mjedisin po rritet vazhdimisht, përdorimi i materialeve të qëndrueshme për mobilje është bërë një trend i rëndësishëm në industrinë e dizajnit të interierit. Mobiljet e qëndrueshme janë ato që prodhohen duke marrë parasysh ndikimin mjedisor dhe social gjatë gjithë ciklit të tyre të jetës.

      ## Çfarë janë materialet e qëndrueshme?

      Materialet e qëndrueshme përfshijnë:
      
      - Dru i çertifikuar FSC nga pyje të menaxhuara në mënyrë të qëndrueshme
      - Materiale të ricikluara ose të riciklueshme
      - Materiale natyrale dhe biodegradable
      - Materiale me toksicitet të ulët dhe emisione të ulëta të përbërjeve organike të paqëndrueshme (VOC)

      ## Përfitimet e mobiljeve të qëndrueshme

      Mobiljet e prodhuara nga materiale të qëndrueshme ofrojnë disa përfitime:

      1. Reduktimi i ndikimit mjedisor
      2. Përmirësimi i cilësisë së ajrit të brendshëm
      3. Qëndrueshmëri më e madhe dhe jetëgjatësi
      4. Mbështetje për komunitetet lokale kur përdoren materiale vendore

      Në përfundim, zgjedhja e mobiljeve të qëndrueshme nuk është vetëm një vendim i përgjegjshëm mjedisor, por gjithashtu një investim i mençur që sjell përfitime të shumta për shëndetin dhe mirëqenien.
    `,
    'dizajn': `
      # Trendet e dizajnit të mobiljeve për vitin e ardhshëm

      Dizajni i mobiljeve është në një evoluim të vazhdueshëm, duke reflektuar ndryshimet në stilin e jetesës, teknologji dhe vlerat shoqërore. Duke parë përpara, po shfaqen disa trende interesante që pritet të formësojnë industrinë e mobiljeve në vitin e ardhshëm.

      ## Forma organike dhe të rrumbullakosura

      Mobiljet me forma të buta, organike dhe të rrumbullakosura po fitojnë popullaritet, duke zëvendësuar linjat e drejta dhe këndet e mprehta që kanë dominuar dizajnin e mobiljeve për vite me radhë. Këto forma krijojnë një ndjenjë qetësie dhe komoditeti në hapësirë.

      ## Qëndrueshmëria në qendër të vëmendjes

      Qëndrueshmëria po bëhet një konsideratë kryesore në dizajnin e mobiljeve. Konsumatorët po kërkojnë gjithnjë e më shumë:

      - Mobilje të prodhuara nga materiale të riciklueshme
      - Produkte me jetëgjatësi të lartë
      - Procese prodhimi me ndikim të ulët mjedisor

      ## Ngjyra të guximshme dhe të ngrohta

      Paleta e ngjyrave për mobilje po lëviz drejt nuancave më të ngrohta dhe më të guximshme. Tonalitetet e tokës si terrakota, oker dhe jeshile ulliri po shoqërohen me nuanca të thella blu dhe jeshile për të krijuar ambiente komode dhe elegante.

      Këto trende ofrojnë mundësi të shkëlqyera për të rifreskuar hapësirën tuaj të banimit dhe për të krijuar një shtëpi që është njëkohësisht moderne, komode dhe e qëndrueshme.
    `,
    'kuzhinë': `
      # Maksimizimi i hapësirës në kuzhinat e vogla

      Kuzhinat e vogla paraqesin sfida unike në dizajn dhe funksionalitet, por me planifikim të kujdesshëm dhe zgjidhje të zgjuara, edhe një kuzhinë e vogël mund të jetë praktike dhe estetikisht tërheqëse.

      ## Zgjidhje për ruajtje

      Maksimizimi i hapësirës së ruajtjes është thelbësor në kuzhinat e vogla:

      - Përdorni lartësinë e plotë të murit për dollapë
      - Instaloni rafte të hapura për gjërat që përdoren shpesh
      - Konsideroni dollapë me ndarje të brendshme të optimizuara
      - Përdorni hapësirat e papërdorura nën rafte dhe dollapë

      ## Pajisje të përmasave të duhura

      Zgjedhja e pajisjeve të përshtatshme për hapësirën është shumë e rëndësishme:

      - Përzgjidhni pajisje të dizajnuara për hapësira të vogla
      - Konsideroni pajisje multifunksionale
      - Zgjidhni pajisje me efikasitet të lartë energjetik

      ## Dizajn që krijon përshtypjen e hapësirës

      Disa truke dizajni mund të bëjnë që kuzhina të duket më e madhe:

      1. Përdorni ngjyra të lehta për të reflektuar dritën
      2. Instaloni ndriçim të mjaftueshëm
      3. Konsideroni mobilje dhe pajisje me dizajn "të lehtë" vizualisht
      4. Përdorni sipërfaqe pasqyruese për të krijuar përshtypjen e thellësisë

      Me këto strategji, edhe një kuzhinë e vogël mund të transformohet në një hapësirë funksionale dhe tërheqëse që plotëson nevojat tuaja kulinare.
    `,
  };
  
  // Default content if topic doesn't match predefined ones
  let content = `
    # ${topic}
    
    Ky është një artikull i gjeneruar me AI për temën "${topic}". Ai përmban informacione dhe këshilla të dobishme në lidhje me këtë temë.
    
    ## Seksioni 1
    
    Këtu mund të flisni për aspektet kryesore të temës, duke përfshirë:
    
    - Pika kryesore 1 që lidhet me ${keywords}
    - Pika kryesore 2 për t'u marrë parasysh
    - Pika kryesore 3 dhe rëndësia e saj
    
    ## Seksioni 2
    
    Më shumë detaje dhe analiza në lidhje me temën, duke theksuar fjalët kyçe si ${keywords}.
    
    ## Përfundime
    
    Në përfundim, tema jonë ${topic} është një aspekt i rëndësishëm i dizajnit të mobiljeve dhe i amenajimit të brendshëm. Duke marrë parasysh faktorët e diskutuar më sipër, mund të arrini rezultate më të mira në projektet tuaja.
  `;
  
  // Check if the topic matches any of our predefined topics
  for (const [key, value] of Object.entries(topics)) {
    if (topic.toLowerCase().includes(key)) {
      content = value;
      break;
    }
  }
  
  return content;
};

// Sample blog posts for the dashboard
const sampleBlogPosts = [
  {
    id: 1,
    title: 'Si të përzgjidhni materialin e duhur për mobiljet tuaja',
    status: 'Publikuar',
    date: '20 Maj 2023',
    views: 245,
  },
  {
    id: 2,
    title: 'Trendet e dizajnit të mobiljeve për 2023',
    status: 'Publikuar',
    date: '12 Qershor 2023',
    views: 189,
  },
  {
    id: 3,
    title: 'Mobiljet multifunksionale për hapësira të vogla',
    status: 'Draft',
    date: '5 Shtator 2023',
    views: 0,
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [aiTopic, setAiTopic] = useState('');
  const [aiKeywords, setAiKeywords] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [articleImage, setArticleImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleLogout = () => {
    toast({
      title: "Dalje e suksesshme",
      description: "Jeni shkëputur nga paneli i administratorit.",
    });
    navigate('/admin');
  };

  const handleGenerateArticle = async () => {
    if (!aiTopic) {
      toast({
        title: "Kërkohet një temë",
        description: "Ju lutemi vendosni një temë për gjenerimin e artikullit.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const content = await generateArticleWithAI(aiTopic, aiKeywords);
      setGeneratedContent(content);
      setArticleTitle(`Artikull për ${aiTopic}`);
      setArticleContent(content);
    } catch (error) {
      toast({
        title: "Gabim në gjenerim",
        description: "Ndodhi një gabim gjatë gjenerimit të artikullit. Ju lutemi provoni përsëri.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setArticleImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublishArticle = () => {
    if (!articleTitle || !articleContent) {
      toast({
        title: "Informacion i pamjaftueshëm",
        description: "Ju lutemi vendosni një titull dhe përmbajtje për artikullin.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would send data to an API
    toast({
      title: "Artikulli u publikua",
      description: "Artikulli juaj u publikua me sukses.",
    });

    // Reset form fields
    setArticleTitle('');
    setArticleContent('');
    setArticleImage(null);
    setImagePreview('');
    setGeneratedContent('');
    setAiTopic('');
    setAiKeywords('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 hidden md:block">
        <div className="p-6">
          <div className="text-2xl font-bold text-furniture-navy">Dream<span className="text-furniture-forest">House</span></div>
          <div className="text-sm text-gray-500 mt-1">Paneli i Administratorit</div>
        </div>
        <nav className="mt-6">
          <a href="#dashboard" className="flex items-center px-6 py-3 bg-gray-100 text-furniture-forest">
            <FileText className="h-5 w-5 mr-3" />
            <span>Artikuj</span>
          </a>
          <a href="#projects" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
            <Image className="h-5 w-5 mr-3" />
            <span>Projektet</span>
          </a>
          <a href="#messages" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
            <MessageSquare className="h-5 w-5 mr-3" />
            <span>Mesazhe</span>
          </a>
          <a href="#settings" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
            <Pencil className="h-5 w-5 mr-3" />
            <span>Cilësime</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-4 md:px-6">
            <h1 className="text-xl font-semibold text-gray-800">Paneli i Administratorit</h1>
            <Button variant="outline" onClick={handleLogout}>Dilni</Button>
          </div>
        </header>

        {/* Main Container */}
        <main className="container mx-auto px-4 py-8 md:px-6">
          <Tabs defaultValue="articles">
            <TabsList className="mb-8 w-full justify-start">
              <TabsTrigger value="articles" className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                <span>Artikujt</span>
              </TabsTrigger>
              <TabsTrigger value="create">
                <Pencil className="h-4 w-4 mr-2" />
                <span>Krijo Artikull</span>
              </TabsTrigger>
              <TabsTrigger value="ai">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>Gjenerator AI</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="articles">
              <Card>
                <CardHeader>
                  <CardTitle>Artikujt Tuaj</CardTitle>
                  <CardDescription>Menaxhoni artikujt tuaj të blogut dhe shikoni statistikat.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium">Titulli</th>
                          <th className="text-left py-3 px-4 font-medium">Statusi</th>
                          <th className="text-left py-3 px-4 font-medium">Data</th>
                          <th className="text-left py-3 px-4 font-medium">Shikime</th>
                          <th className="text-right py-3 px-4 font-medium">Veprime</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sampleBlogPosts.map((post) => (
                          <tr key={post.id} className="border-b border-gray-100">
                            <td className="py-3 px-4">{post.title}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                post.status === 'Publikuar' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {post.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-gray-500">{post.date}</td>
                            <td className="py-3 px-4 text-gray-500">{post.views}</td>
                            <td className="py-3 px-4 text-right">
                              <Button variant="ghost" size="sm">Redakto</Button>
                              <Button variant="ghost" size="sm" className="text-red-500">Fshi</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="create">
              <Card>
                <CardHeader>
                  <CardTitle>Krijo Artikull të Ri</CardTitle>
                  <CardDescription>Shkruani dhe publikoni një artikull të ri për blogun.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Titulli</Label>
                    <Input
                      id="title"
                      placeholder="Vendosni titullin e artikullit"
                      value={articleTitle}
                      onChange={(e) => setArticleTitle(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="content">Përmbajtja</Label>
                    <Textarea
                      id="content"
                      placeholder="Shkruani përmbajtjen e artikullit këtu..."
                      className="min-h-[300px]"
                      value={articleContent}
                      onChange={(e) => setArticleContent(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="image">Foto e Artikullit</Label>
                    <div className="flex items-center gap-4">
                      <Input 
                        id="image" 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                      />
                    </div>
                    {imagePreview && (
                      <div className="mt-4">
                        <img 
                          src={imagePreview} 
                          alt="Preview" 
                          className="max-w-[200px] rounded-md" 
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Button onClick={handlePublishArticle}>Publiko Artikullin</Button>
                    <Button variant="outline">Ruaj si Draft</Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="ai">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Gjenerator Artikulli me AI</CardTitle>
                    <CardDescription>
                      Lëreni AI-në të gjenerojë përmbajtje për artikullin tuaj. 
                      Thjesht specifikoni temën dhe fjalët kyçe.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ai-topic">Tema</Label>
                      <Input
                        id="ai-topic"
                        placeholder="p.sh. Materiale moderne për mobilje"
                        value={aiTopic}
                        onChange={(e) => setAiTopic(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="ai-keywords">Fjalë Kyçe (të ndara me presje)</Label>
                      <Input
                        id="ai-keywords"
                        placeholder="p.sh. MDF, HDF, melaminë, qëndrueshmëri"
                        value={aiKeywords}
                        onChange={(e) => setAiKeywords(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleGenerateArticle} 
                      disabled={isGenerating || !aiTopic}
                      className="w-full"
                    >
                      {isGenerating ? "Duke gjeneruar..." : "Gjenero Artikull"}
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Artikulli i Gjeneruar</CardTitle>
                    <CardDescription>
                      Mund të redaktoni artikullin e gjeneruar para se ta publikoni.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="min-h-[400px] border rounded-md p-4 overflow-y-auto bg-white">
                      {generatedContent ? (
                        <div className="prose max-w-none">
                          <pre className="whitespace-pre-wrap">{generatedContent}</pre>
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center text-gray-400">
                          Artikulli i gjeneruar do të shfaqet këtu
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-2 w-full">
                      <Button 
                        onClick={() => {
                          setArticleTitle(`Artikull për ${aiTopic}`);
                          setArticleContent(generatedContent);
                        }}
                        disabled={!generatedContent}
                        className="w-full"
                      >
                        Përdor në Artikull
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
