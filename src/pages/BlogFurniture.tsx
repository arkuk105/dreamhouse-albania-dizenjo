
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, MessageSquare, BookOpen } from 'lucide-react';

const BlogFurniture = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      icon: FileText,
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
      icon: MessageSquare,
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
      icon: BookOpen,
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
      icon: FileText,
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
      icon: MessageSquare,
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

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-furniture-navy mb-4">Blog dhe Mobilje</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lexoni artikujt tanë të fundit dhe njihuni me zgjidhjet tona të personalizuara për mobiljet e vogla.
          </p>
        </div>

        <Tabs defaultValue="blog" className="w-full mb-8">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="blog" className="px-6 py-3">Blog</TabsTrigger>
              <TabsTrigger value="mobilje" className="px-6 py-3">Mobilje të Vogla</TabsTrigger>
            </TabsList>
          </div>
          
          {/* Blog Tab Content */}
          <TabsContent value="blog">
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
          </TabsContent>
          
          {/* Small Furniture Tab Content */}
          <TabsContent value="mobilje">
            <div className="mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-furniture-navy">Mobilje të Vogla të Personalizuara</h2>
                  <p className="text-gray-600 mb-4">
                    Specializohemi në krijimin e mobiljeve të vogla të personalizuara që përmirësojnë hapësirën tuaj duke kombinuar funksionalitetin, estetikën dhe efikasitetin e hapësirës. 
                  </p>
                  <p className="text-gray-600 mb-4">
                    Qoftë nëse keni nevojë për rafte librash të personalizuara, tavolina anësore, komodina apo zgjidhje të tjera të vogla mobilimi, ne i dizajnojmë dhe i ndërtojmë me të njëjtën kujdes dhe cilësi si projektet tona më të mëdha.
                  </p>
                  <Button asChild>
                    <Link to="/kontakt">Na kontaktoni për një konsultim</Link>
                  </Button>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Mobilje të vogla të personalizuara" 
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 text-furniture-navy">Zgjidhjet Tona për Mobilje të Vogla</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                      alt="Rafte Librash" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Rafte Librash</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Rafte librash të personalizuara që përshtaten me hapësirën dhe nevojat tuaja, duke ofruar organizim dhe stil.</p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1499933374294-4584851497cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Tavolina Anësore" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Tavolina Anësore</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Tavolina anësore funksionale dhe elegante që plotësojnë hapësirën tuaj të ndenjjes.</p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Komodina" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Komodina</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Komodina të personalizuara për dhomën e gjumit, të dizajnuara për të maksimizuar hapësirën dhe për t'iu përshtatur stilit tuaj.</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-furniture-beige p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-furniture-navy text-center">Përse të Zgjidhni Mobiljet Tona të Vogla</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-2 text-furniture-navy">Personalizim i Plotë</h3>
                    <p className="text-gray-600">Çdo mobilje e vogël është e dizajnuar sipas nevojave tuaja specifike, duke u përshtatur me hapësirën dhe stilin tuaj.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-2 text-furniture-navy">Materiale Cilësore</h3>
                    <p className="text-gray-600">Përdorim vetëm materiale të cilësisë së lartë për të siguruar që mobiljet të jenë të qëndrueshme dhe të zgjasin në kohë.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-2 text-furniture-navy">Çmime Konkurruese</h3>
                    <p className="text-gray-600">Ofrojmë çmime konkurruese për mobiljet e vogla të personalizuara, duke siguruar vlerë për investimin tuaj.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default BlogFurniture;
