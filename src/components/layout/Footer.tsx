
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-furniture-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DreamHouse</h3>
            <p className="text-gray-300 mb-4">
              DreamHouse përdor materiale cilësore si MDF, HDF dhe melaminë për të krijuar mobilje të personalizuara dhe funksionale.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Shërbimet Tona</h3>
            <ul className="space-y-2">
              <li><NavLink to="/sherbimet-projektet" className="text-gray-300 hover:text-white transition-colors">Kuzhina moderne</NavLink></li>
              <li><NavLink to="/sherbimet-projektet" className="text-gray-300 hover:text-white transition-colors">Mobilje për dhoma ndenjeje</NavLink></li>
              <li><NavLink to="/sherbimet-projektet" className="text-gray-300 hover:text-white transition-colors">Mobilje për dhoma gjumi</NavLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Na Kontaktoni</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Rruga Kavajës, Tiranë, Shqipëri</li>
              <li>Email: info@dreamhouse.al</li>
              <li>Tel: +355 69 123 4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; {year} DreamHouse. Të gjitha të drejtat e rezervuara.</p>
            <div className="flex space-x-4">
              <NavLink to="/rreth-nesh-kontakt" className="text-gray-400 hover:text-white transition-colors">Privatësia</NavLink>
              <NavLink to="/rreth-nesh-kontakt" className="text-gray-400 hover:text-white transition-colors">Kushtet</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
