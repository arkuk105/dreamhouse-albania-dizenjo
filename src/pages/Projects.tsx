import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  // Mock data for realized projects
  const projects = [
    {
      id: 1,
      title: 'Kuzhinë Moderne në Tiranë',
      description: 'Një kuzhinë e plotë moderne me ndriçim LED dhe pajisje të integruara.',
      category: 'Kuzhinë',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Familja Hoxha',
      year: '2024',
      materials: 'MDF, Laminat, Granit'
    },
    {
      id: 2,
      title: 'Dhomë Ndenjeje Klasike',
      description: 'Mobilje klasike për dhomë ndenjeje me detaje të bukura prej druri natyror.',
      category: 'Dhomë Ndenjeje',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Familja Berisha',
      year: '2023',
      materials: 'Dru Natyror, Lëkurë, Tekstil'
    },
    {
      id: 3,
      title: 'Dhomë Gjumi Minimale',
      description: 'Dizajn minimal dhe funksional për dhomë gjumi me hapësirë ruajtjeje të integruar.',
      category: 'Dhomë Gjumi',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Familja Krasniqi',
      year: '2024',
      materials: 'MDF, Melaminë, Metal'
    },
    {
      id: 4,
      title: 'Kuzhinë Industrial',
      description: 'Stil industrial me kombinim druri dhe metali për një apartament modern.',
      category: 'Kuzhinë',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Familja Rama',
      year: '2023',
      materials: 'Dru Natyror, Çelik, Mermër'
    },
    {
      id: 5,
      title: 'Librari e Personalizuar',
      description: 'Librari e madhe e personalizuar për zyrë shtëpiake me hapësira të shumta.',
      category: 'Zyrë',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Z. Gjoni',
      year: '2024',
      materials: 'Dru Natyror, Qelq, Metal'
    },
    {
      id: 6,
      title: 'Garderobë Walk-in',
      description: 'Garderobë e madhe walk-in me sistem organizimi të avancuar dhe pasqyra.',
      category: 'Dhomë Gjumi',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Familja Doci',
      year: '2023',
      materials: 'MDF, Pasqyrë, LED'
    }
  ];

  const categories = ['Të Gjitha', 'Kuzhinë', 'Dhomë Ndenjeje', 'Dhomë Gjumi', 'Zyrë'];
  const [selectedCategory, setSelectedCategory] = React.useState('Të Gjitha');

  const filteredProjects = selectedCategory === 'Të Gjitha' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-furniture-navy mb-4">
              Projektet Tona
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Shikoni disa nga projektet më të suksesshme që kemi realizuar për klientët tanë. 
              Çdo projekt është i personalizuar dhe i krijuar me kujdes të madh.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-furniture-forest text-white'
                    : 'bg-muted text-muted-foreground hover:bg-furniture-forest/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-furniture-navy text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-furniture-navy">
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span className="font-medium">Klienti:</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Viti:</span>
                      <span>{project.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Materialet:</span>
                      <span className="text-right">{project.materials}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="mt-16 bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-furniture-navy mb-8">
              Statistikat Tona
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-furniture-forest mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Projekte të Realizuara</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-furniture-forest mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Kënaqësi e Klientëve</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-furniture-forest mb-2">5</div>
                <div className="text-sm text-muted-foreground">Vite Përvojë</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-furniture-forest mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Kohë Përgjigje</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;