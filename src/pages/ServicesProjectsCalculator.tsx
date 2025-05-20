
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { useLocation } from 'react-router-dom';
import CostCalculator from '@/components/CostCalculator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesProjectsCalculator = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to section based on hash in URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Sample projects data - in a real app, this would come from an API or database
  const projectCategories = [
    {
      id: "kuzhina",
      name: "Kuzhina",
      projects: [
        {
          id: 1,
          title: "Kuzhinë Moderne në Tiranë",
          description: "Kuzhinë e personalizuar me MDF të cilësisë së lartë dhe aksesorë Blum.",
          image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
          client: "Familja Hoxha",
          location: "Tiranë",
          year: 2023,
        },
        {
          id: 2,
          title: "Kuzhinë Rustike në Durrës",
          description: "Kuzhinë rustike me materiale natyrale dhe detaje artizanale.",
          image: "https://images.unsplash.com/photo-1556912168-74e7c0e16ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
          client: "Familja Prifti",
          location: "Durrës",
          year: 2023,
        },
      ],
    },
    {
      id: "dhoma-ndenjeje",
      name: "Dhoma Ndenjeje",
      projects: [
        {
          id: 3,
          title: "Dhomë Ndenjeje Moderne",
          description: "Set mobilje për dhomë ndenjeje me stil minimalist dhe funksional.",
          image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
          client: "Familja Balla",
          location: "Vlorë",
          year: 2022,
        },
        {
          id: 4,
          title: "Dhomë Ndenjeje Luksoze",
          description: "Mobilje të personalizuara me materiale premium për një apartament luksoz.",
          image: "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
          client: "Familja Shehi",
          location: "Tiranë",
          year: 2023,
        },
      ],
    },
    {
      id: "dhoma-gjumi",
      name: "Dhoma Gjumi",
      projects: [
        {
          id: 5,
          title: "Set Mobilje për Dhomë Gjumi",
          description: "Set i plotë mobilimi për dhomë gjumi me dizajn modern dhe funksional.",
          image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
          client: "Familja Spahiu",
          location: "Tiranë",
          year: 2022,
        },
        {
          id: 6,
          title: "Garderobë e Personalizuar",
          description: "Garderobë walk-in me ndarje të personalizuara dhe ndriçim të integruar.",
          image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
          client: "Familja Muca",
          location: "Shkodër",
          year: 2023,
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-furniture-navy">Shërbimet & Projektet</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zbuloni shërbimet tona, shihni projektet e realizuara dhe përdorni kalkulatorin e kostove për të planifikuar projektin tuaj të ri.
          </p>
        </div>

        <Tabs defaultValue="sherbimet" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="sherbimet" className="px-6 py-3">Shërbimet</TabsTrigger>
              <TabsTrigger value="projektet" className="px-6 py-3">Projektet</TabsTrigger>
              <TabsTrigger value="kalkulator" className="px-6 py-3">Kalkulator Kostoje</TabsTrigger>
            </TabsList>
          </div>

          {/* Services Tab Content */}
          <TabsContent value="sherbimet">
            <section id="kuzhina" className="py-8">
              <h2 className="text-3xl font-bold mb-8 text-furniture-navy border-b-2 border-furniture-forest pb-2">Kuzhina Moderne</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80" 
                    alt="Kuzhina moderne" 
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Personalizim i plotë për nevojat tuaja</h3>
                  <p className="text-gray-600 mb-4">
                    Kuzhinat tona moderne janë të dizajnuara për të maksimizuar hapësirën, funksionalitetin dhe bukurinë. Ne përdorim materiale të cilësisë së lartë dhe teknologji moderne për të krijuar kuzhinat që do t'ju shërbejnë për shumë vite.
                  </p>
                  <p className="text-gray-600">
                    Çdo kuzhinë projektohet duke marrë parasysh nevojat tuaja specifike, duke optimizuar përdorimin e hapësirës dhe duke reflektuar stilin tuaj personal. Nga korpusi i kuzhinës deri te aksesorizimet e fundit, ne kujdesemi për çdo detaj.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-furniture-beige p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Materiale Cilësore</h4>
                  <p>Përdorim MDF, HDF dhe melaminë të cilësisë së lartë për të siguruar qëndrueshmëri dhe rezistencë ndaj lagështirës.</p>
                </div>
                
                <div className="bg-furniture-beige p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Sisteme të Avancuara</h4>
                  <p>Integrojmë sisteme të avancuara tërheqëse, mbyllëse të ngadalta dhe zgjidhje të mençura organizimi për hapësirën.</p>
                </div>
                
                <div className="bg-furniture-beige p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Dizajn Modern</h4>
                  <p>Dizajnojmë kuzhinat sipas trendeve më të fundit, me një fokus në ergonomi dhe funksionalitet.</p>
                </div>
              </div>
            </section>
            
            <section id="dhoma-ndenjeje" className="py-8">
              <h2 className="text-3xl font-bold mb-8 text-furniture-navy border-b-2 border-furniture-forest pb-2">Mobilje për Dhoma Ndenjeje</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-3">Komoditet dhe stil në hapësirën tuaj të përbashkët</h3>
                  <p className="text-gray-600 mb-4">
                    Dhoma e ndenjjes është zemra e shtëpisë suaj, ku kaloni kohë cilësore me familjen dhe miqtë. Mobiljet tona të personalizuara për dhomën e ndenjjes kombinojnë funksionalitetin me stilin për të krijuar një hapësirë të ngrohtë dhe mikpritëse.
                  </p>
                  <p className="text-gray-600">
                    Nga kolltukët e rehatshëm deri te bibliotekat elegante, çdo pjesë mobiljeje është e dizajnuar për të reflektuar personalitetin tuaj dhe për t'iu përshtatur nevojave të familjes suaj.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                    alt="Mobilje për dhomë ndenjeje" 
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-furniture-beige p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Biblioteka dhe Rafte</h4>
                  <p>Dizajnojmë biblioteka dhe rafte që përshtaten me hapësirën tuaj, duke maksimizuar ruajtjen e librave dhe objekteve dekorative.</p>
                </div>
                
                <div className="bg-furniture-beige p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Tavolina dhe Konsola</h4>
                  <p>Krijojmë tavolina qendrore, anësore dhe konsola që plotësojnë stilin e dhomës suaj të ndenjjes.</p>
                </div>
                
                <div className="bg-furniture-beige p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Mobilie TV dhe Mediale</h4>
                  <p>Dizajnojmë mobilie TV funksionale që integrojnë teknologjinë tuaj me stil dhe organizim të përsosur të kabllove.</p>
                </div>
              </div>
            </section>
            
            <section id="dhoma-gjumi" className="py-8">
              <h2 className="text-3xl font-bold mb-8 text-furniture-navy border-b-2 border-furniture-forest pb-2">Mobilje për Dhoma Gjumi</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Mobilje për dhomë gjumi" 
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Qetësi dhe elegancë për hapësirën tuaj personale</h3>
                  <p className="text-gray-600 mb-4">
                    Dhoma e gjumit është hapësira juaj personale e qetësisë dhe pushimit. Mobiljet tona për dhomën e gjumit janë të dizajnuara për të krijuar një ambient të qetë, komod dhe elegantë, ku mund të relaksoheni dhe të rimbushni energjinë.
                  </p>
                  <p className="text-gray-600">
                    Nga krevatet dhe komodinat deri te garderobat e integruara, çdo element është i projektuar për të maksimizuar hapësirën e ruajtjes dhe për të reflektuar stilin tuaj personal.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-furniture-beige p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Gardëroba të Personalizuara</h4>
                  <p>Dizajnojmë gardëroba të personalizuara që maksimizojnë hapësirën e ruajtjes dhe organizimin e rrobave dhe aksesorëve.</p>
                </div>
                
                <div className="bg-furniture-beige p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Krevate dhe Komodina</h4>
                  <p>Krijojmë krevate dhe komodina të përshtatshme për hapësirën dhe stilin tuaj, duke garantuar komoditet dhe funksionalitet.</p>
                </div>
                
                <div className="bg-furniture-beige p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Zgjidhje për Ruajtje</h4>
                  <p>Ofrojmë zgjidhje të integruara për ruajtjen e objekteve personale dhe organizimin e hapësirës.</p>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Projects Tab Content */}
          <TabsContent value="projektet">
            <div className="py-8">
              <Tabs defaultValue="kuzhina" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    {projectCategories.map((category) => (
                      <TabsTrigger key={category.id} value={category.id} className="px-6 py-3">
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {projectCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.projects.map((project) => (
                        <div key={project.id} className="bg-white overflow-hidden transition-shadow hover:shadow-lg rounded-lg">
                          <div className="h-64 overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
                            />
                          </div>
                          <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="text-sm text-gray-500">
                              <p><span className="font-medium">Klienti:</span> {project.client}</p>
                              <p><span className="font-medium">Vendndodhja:</span> {project.location}</p>
                              <p><span className="font-medium">Viti:</span> {project.year}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </TabsContent>

          {/* Calculator Tab Content */}
          <TabsContent value="kalkulator">
            <div className="py-8">
              <div className="mb-10">
                <CostCalculator />
              </div>
              
              <div className="bg-furniture-beige p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-furniture-navy text-center">Si të përdorni kalkulatorin</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-furniture-forest font-bold text-xl mb-2">1. Zgjidhni llojin dhe materialin</div>
                    <p className="text-gray-600">Filloni duke zgjedhur llojin e mobiljes që dëshironi (kuzhinë, dhomë ndenjeje, dhomë gjumi) dhe materialin e preferuar (MDF, HDF, melaminë).</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-furniture-forest font-bold text-xl mb-2">2. Vendosni përmasat</div>
                    <p className="text-gray-600">Përcaktoni gjerësinë dhe lartësinë e mobiljeve tuaja në centimetra duke përdorur rrëshqitësit.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-furniture-forest font-bold text-xl mb-2">3. Zgjidhni aksesorët</div>
                    <p className="text-gray-600">Shtoni aksesorë opsionalë si doreza, sisteme tërheqëse dhe ndriçim për të plotësuar dizajnin tuaj.</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Vini re që ky është vetëm një vlerësim i përafërt. Për një preventiv të saktë, ju rekomandojmë të <a href="/kontakt" className="text-furniture-forest font-medium hover:underline">na kontaktoni</a> për një konsultim të personalizuar.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ServicesProjectsCalculator;
