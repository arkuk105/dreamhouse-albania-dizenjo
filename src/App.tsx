
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AboutContact from "./pages/AboutContact";
import ServicesProjectsCalculator from "./pages/ServicesProjectsCalculator";
import BlogFurniture from "./pages/BlogFurniture";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sherbimet" element={<ServicesProjectsCalculator />} />
          <Route path="/projektet" element={<ServicesProjectsCalculator />} />
          <Route path="/kalkulator" element={<ServicesProjectsCalculator />} />
          <Route path="/blog" element={<BlogFurniture />} />
          <Route path="/mobilje-te-vogla" element={<BlogFurniture />} />
          <Route path="/rreth-nesh" element={<AboutContact />} />
          <Route path="/kontakt" element={<AboutContact />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
