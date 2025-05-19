
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ServiceHighlight from '@/components/sections/ServiceHighlight';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <HeroSection
        title="DreamHouse - Mobilje me cilësi të lartë"
        subtitle="Ne dizajnojmë dhe prodhojmë mobilje të personalizuara me materiale cilësore për një shtëpi sipas ëndrrës suaj"
        backgroundImage="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        buttonText="Zbuloni Shërbimet"
        buttonLink="/sherbimet"
      />

      <section className="py-16 bg-furniture-beige">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-furniture-navy">Mobilje të Personalizuara për Shtëpinë Tuaj</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            DreamHouse është specializuar në prodhimin e mobiljeve të personalizuara me cilësi të lartë, duke përdorur materiale të zgjedhura dhe mjete moderne.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-furniture-navy">Materiale Cilësore</h3>
              <p className="text-gray-600">Përdorim materiale të cilësisë së lartë si MDF, HDF dhe melaminë për të garantuar qëndrueshmëri dhe jetëgjatësi.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-furniture-navy">Dizajn i Personalizuar</h3>
              <p className="text-gray-600">Çdo projekt dizajnohet në përputhje me nevojat, preferencat dhe hapësirën tuaj për të maksimizuar funksionalitetin.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-furniture-navy">Montim Profesional</h3>
              <p className="text-gray-600">Ekipi ynë i specializuar kujdeset për montimin profesional të mobiljeve në shtëpinë tuaj.</p>
            </div>
          </div>
        </div>
      </section>

      <ServiceHighlight
        title="Kuzhina Moderne"
        description="Kuzhinat tona moderne kombinojnë funksionalitetin me estetikën. Përdorim materiale të cilësisë së lartë dhe pajisje moderne për të krijuar hapësira gatimi që janë praktike dhe elegante. Çdo kuzhinë projektohet sipas nevojave dhe hapësirës suaj."
        image="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80"
        link="/sherbimet#kuzhina"
      />
      
      <ServiceHighlight
        title="Mobilje për Dhoma Ndenjeje"
        description="Krijojmë mobilje për dhoma ndenjeje që kombinojnë komoditetin me stilin. Nga kolltukë komodë deri te bibliotekat dhe tavolinat e kafesë, çdo pjesë dizajnohet për të plotësuar nevojat tuaja dhe stilin e shtëpisë."
        image="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        link="/sherbimet#dhoma-ndenjeje"
        reverse
      />
      
      <ServiceHighlight
        title="Mobilje për Dhoma Gjumi"
        description="Dhoma e gjumit është një hapësirë personale ku duhet të ndiheni të relaksuar dhe të qetë. Ne krijojmë mobilje të personalizuara që maksimizojnë hapësirën e ruajtjes dhe plotësojnë stilin tuaj personal."
        image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        link="/sherbimet#dhoma-gjumi"
      />

      <section className="bg-furniture-forest text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gati për të Transformuar Shtëpinë Tuaj?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Kontaktoni ekipin tonë sot për të filluar projektin tuaj të ri ose për të marrë një preventiv pa pagesë.</p>
          <div className="space-x-4">
            <Button 
              asChild
              className="bg-white text-furniture-forest hover:bg-furniture-beige hover:text-furniture-navy px-6 py-3 text-lg"
            >
              <NavLink to="/kontakt">Na Kontaktoni</NavLink>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-furniture-forest px-6 py-3 text-lg"
            >
              <NavLink to="/kalkulator">Llogaritni një Preventiv</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
