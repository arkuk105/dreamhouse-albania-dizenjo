
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { book, bookOpen, fileText } from 'lucide-react';

// Sample blog data - in a real app, this would come from an API or database
const blogPosts = [
  {
    id: 1,
    slug: 'si-te-perzgjidhni-materialin-e-duhur',
    title: 'Si të përzgjidhni materialin e duhur për mobiljet tuaja',
    excerpt: 'Udhëzues i detajuar për të kuptuar ndryshimet midis MDF, HDF dhe melaminës dhe përdorimet më të përshtatshme për secilën.',
    category: 'Materiale',
    author: 'Ervis Doda',
    date: '20 Maj 2023',
    image: 'https://images.unsplash.com/photo-1580130732478-4e339fb6836f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    icon: fileText,
  },
  {
    id: 2,
    slug: 'trendet-e-dizajnit-te-mobiljeve',
    title: 'Trendet e dizajnit të mobiljeve për 2023',
    excerpt: 'Një vështrim mbi trendet më të fundit në dizajnin e mobiljeve dhe si mund t\'i inkorporoni ato në shtëpinë tuaj.',
    category: 'Dizajn',
    author: 'Elidon Gjuni',
    date: '12 Qershor 2023',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    icon: book,
  },
  {
    id: 3,
    slug: 'si-te-organizoni-hapesiren-ne-kuzhine',
    title: 'Si të organizoni hapësirën në kuzhinë',
    excerpt: 'Këshilla dhe truke për të maksimizuar hapësirën e ruajtjes në kuzhinën tuaj me zgjidhje të personalizuara.',
    category: 'Organizim',
    author: 'Ervis Doda',
    date: '3 Korrik 2023',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    icon: bookOpen,
  },
  {
    id: 4,
    slug: 'mobilje-ekologjike-dhe-te-qendrueshme',
    title: 'Mobilje ekologjike dhe të qëndrueshme',
    excerpt: 'Si po evoluon industria e mobiljeve drejt zgjidhjeve më të qëndrueshme dhe mënyrat se si mund të zgjidhni mobilje miqësore me mjedisin.',
    category: 'Qëndrueshmëri',
    author: 'Elidon Gjuni',
    date: '25 Gusht 2023',
    image: 'https://images.unsplash.com/photo-1616486701797-0f33f61038ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    icon: fileText,
  },
  {
    id: 5,
    slug: 'si-te-krijosh-ambient-komod-ne-dhome-ndenjeje',
    title: 'Si të krijosh ambient komod në dhomë ndenjeje',
    excerpt: 'Ide për të krijuar një dhomë ndenjeje komode dhe funksionale që i përshtatet stilit tuaj të jetesës.',
    category: 'Dizajn Interior',
    author: 'Ervis Doda',
    date: '10 Shtator 2023',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    icon: book,
  },
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'Të Gjitha' },
  { id: 'materiale', name: 'Materiale' },
  { id: 'dizajn', name: 'Dizajn' },
  { id: 'organizim', name: 'Organizim' },
  { id: 'qendrueshmeri', name: 'Qëndrueshmëri' },
  { id: 'dizajn-interior', name: 'Dizajn Interior' },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-furniture-navy mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Artikuj dhe këshilla në lidhje me mobilje, dizajn interior, materiale dhe gjithçka tjetër për të bërë shtëpinë tuaj më të bukur dhe funksionale.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-furniture-forest mb-2">
                  <post.icon className="h-4 w-4 mr-1" />
                  <span>{post.category}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start pt-0">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>Nga {post.author}</span>
                  <Separator orientation="vertical" className="mx-2 h-4" />
                  <span>{post.date}</span>
                </div>
                <Button asChild variant="outline">
                  <Link to={`/blog/${post.slug}`}>Lexo më shumë</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
