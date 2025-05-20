
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-furniture-navy mb-4">Projektet Tona</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Shikoni disa nga projektet tona të fundit të realizuara për klientët tanë. Çdo projekt është i dizajnuar dhe prodhuar me kujdes për të plotësuar nevojat specifike të çdo klienti.
          </p>
        </div>

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
                  <Card key={project.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="text-sm text-gray-500">
                        <p><span className="font-medium">Klienti:</span> {project.client}</p>
                        <p><span className="font-medium">Vendndodhja:</span> {project.location}</p>
                        <p><span className="font-medium">Viti:</span> {project.year}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default Projects;
