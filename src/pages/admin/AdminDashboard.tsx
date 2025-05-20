
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { BookOpen, FileText, Pencil } from 'lucide-react';

import AdminSidebar from '@/components/admin/AdminSidebar';
import BlogPostListing from '@/components/admin/BlogPostListing';
import ArticleCreationForm from '@/components/admin/ArticleCreationForm';
import AIArticleGenerator from '@/components/admin/AIArticleGenerator';

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
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');

  const handleLogout = () => {
    toast({
      title: "Dalje e suksesshme",
      description: "Jeni shkëputur nga paneli i administratorit.",
    });
    navigate('/admin');
  };

  const handleAIArticleGenerated = (title: string, content: string) => {
    setArticleTitle(title);
    setArticleContent(content);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <AdminSidebar />

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
                  <BlogPostListing posts={sampleBlogPosts} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="create">
              <Card>
                <CardHeader>
                  <CardTitle>Krijo Artikull të Ri</CardTitle>
                  <CardDescription>Shkruani dhe publikoni një artikull të ri për blogun.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ArticleCreationForm 
                    initialTitle={articleTitle} 
                    initialContent={articleContent} 
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai">
              <AIArticleGenerator onArticleGenerated={handleAIArticleGenerated} />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
