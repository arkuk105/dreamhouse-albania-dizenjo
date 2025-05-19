
import React from 'react';
import { Button } from "@/components/ui/button";
import { NavLink } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink
}) => {
  return (
    <div 
      className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>{subtitle}</p>
        <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Button 
            asChild
            className="bg-furniture-forest hover:bg-furniture-navy text-white px-6 py-3 text-lg"
          >
            <NavLink to={buttonLink}>{buttonText}</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
