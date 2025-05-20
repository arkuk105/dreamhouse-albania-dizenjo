
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

interface ArticleCreationFormProps {
  initialTitle?: string;
  initialContent?: string;
}

const ArticleCreationForm = ({ initialTitle = '', initialContent = '' }: ArticleCreationFormProps) => {
  const [articleTitle, setArticleTitle] = useState(initialTitle);
  const [articleContent, setArticleContent] = useState(initialContent);
  const [articleImage, setArticleImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');

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
  };

  return (
    <div className="space-y-6">
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
      
      <div className="flex gap-2">
        <Button onClick={handlePublishArticle}>Publiko Artikullin</Button>
        <Button variant="outline">Ruaj si Draft</Button>
      </div>
    </div>
  );
};

export default ArticleCreationForm;
