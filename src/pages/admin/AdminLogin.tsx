
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real app, this would connect to an authentication API
    // For demonstration purposes, we're using a hardcoded username and password
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        toast({
          title: "Hyrje e suksesshme",
          description: "Jeni identifikuar si administrator.",
        });
        navigate('/admin/dashboard');
      } else {
        toast({
          title: "Hyrje e pasuksesshme",
          description: "Emri i përdoruesit ose fjalëkalimi është i pasaktë.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-furniture-beige">
      <div className="w-full max-w-md p-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-furniture-navy">Dream<span className="text-furniture-forest">House</span></h1>
          <p className="text-gray-600">Panel Administratori</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Hyrje Administratori</CardTitle>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Emri i përdoruesit</Label>
                <Input
                  id="username"
                  placeholder="Vendosni emrin e përdoruesit"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Fjalëkalimi</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Vendosni fjalëkalimin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Duke u identifikuar..." : "Identifikohu"}
              </Button>
            </CardFooter>
          </form>
        </Card>
        
        <p className="text-center text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} DreamHouse. Të gjitha të drejtat e rezervuara.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
