
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Menu, X, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: 'Faqja Kryesore', path: '/' },
    { title: 'Shërbimet', path: '/sherbimet' },
    { title: 'Projektet', path: '/projektet' },
    { title: 'Blog', path: '/blog' },
    { title: 'Mobilje të Vogla', path: '/mobilje-te-vogla' },
    { title: 'Rreth Nesh', path: '/rreth-nesh' },
    { title: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="text-furniture-navy font-bold text-2xl">Dream<span className="text-furniture-forest">House</span></div>
        </NavLink>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Mbyll menunë" : "Hap menunë"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                isActive 
                  ? "font-medium text-furniture-forest border-b-2 border-furniture-forest pb-1" 
                  : "text-gray-600 hover:text-furniture-navy transition-colors"
              }
            >
              {link.title}
            </NavLink>
          ))}
          <NavLink
            to="/admin"
            className={({ isActive }) => 
              isActive 
                ? "font-medium text-furniture-forest border-b-2 border-furniture-forest pb-1" 
                : "text-gray-600 hover:text-furniture-navy transition-colors"
            }
            aria-label="Admin Panel"
            title="Admin Panel"
          >
            <LogIn className="w-5 h-5" />
          </NavLink>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `block py-3 ${isActive ? "font-medium text-furniture-forest" : "text-gray-600"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </NavLink>
            ))}
            <NavLink
              to="/admin"
              className={({ isActive }) => 
                `block py-3 flex items-center ${isActive ? "font-medium text-furniture-forest" : "text-gray-600"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="w-5 h-5 mr-2" /> Admin Panel
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
