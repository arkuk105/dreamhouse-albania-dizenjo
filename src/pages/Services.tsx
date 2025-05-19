
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { useLocation } from 'react-router-dom';

const Services = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to section based on hash in URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Layout>
      <div className="pt-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-furniture-navy">Shërbimet Tona</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrojmë një gamë të gjerë shërbimesh për të transformuar shtëpinë tuaj me mobilje të personalizuara dhe funksionale.
            </p>
          </div>
          
          <section id="kuzhina" className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-furniture-navy border-b-2 border-furniture-forest pb-2">Kuzhina Moderne</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80" 
                  alt="Kuzhina moderne" 
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Personalizim i plotë për nevojat tuaja</h3>
                <p className="text-gray-600 mb-4">
                  Kuzhinat tona moderne janë të dizajnuara për të maksimizuar hapësirën, funksionalitetin dhe bukurinë. Ne përdorim materiale të cilësisë së lartë dhe teknologji moderne për të krijuar kuzhinat që do t'ju shërbejnë për shumë vite.
                </p>
                <p className="text-gray-600">
                  Çdo kuzhinë projektohet duke marrë parasysh nevojat tuaja specifike, duke optimizuar përdorimin e hapësirës dhe duke reflektuar stilin tuaj personal. Nga korpusi i kuzhinës deri te aksesorizimet e fundit, ne kujdesemi për çdo detaj.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-furniture-beige p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Materiale Cilësore</h4>
                <p>Përdorim MDF, HDF dhe melaminë të cilësisë së lartë për të siguruar qëndrueshmëri dhe rezistencë ndaj lagështirës.</p>
              </div>
              
              <div className="bg-furniture-beige p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Sisteme të Avancuara</h4>
                <p>Integrojmë sisteme të avancuara tërheqëse, mbyllëse të ngadalta dhe zgjidhje të mençura organizimi për hapësirën.</p>
              </div>
              
              <div className="bg-furniture-beige p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Dizajn Modern</h4>
                <p>Dizajnojmë kuzhinat sipas trendeve më të fundit, me një fokus në ergonomi dhe funksionalitet.</p>
              </div>
            </div>
          </section>
          
          <section id="dhoma-ndenjeje" className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-furniture-navy border-b-2 border-furniture-forest pb-2">Mobilje për Dhoma Ndenjeje</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-3">Komoditet dhe stil në hapësirën tuaj të përbashkët</h3>
                <p className="text-gray-600 mb-4">
                  Dhoma e ndenjjes është zemra e shtëpisë suaj, ku kaloni kohë cilësore me familjen dhe miqtë. Mobiljet tona të personalizuara për dhomën e ndenjjes kombinojnë funksionalitetin me stilin për të krijuar një hapësirë të ngrohtë dhe mikpritëse.
                </p>
                <p className="text-gray-600">
                  Nga kolltukët e rehatshëm deri te bibliotekat elegante, çdo pjesë mobiljeje është e dizajnuar për të reflektuar personalitetin tuaj dhe për t'iu përshtatur nevojave të familjes suaj.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                  alt="Mobilje për dhomë ndenjeje" 
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-furniture-beige p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Biblioteka dhe Rafte</h4>
                <p>Dizajnojmë biblioteka dhe rafte që përshtaten me hapësirën tuaj, duke maksimizuar ruajtjen e librave dhe objekteve dekorative.</p>
              </div>
              
              <div className="bg-furniture-beige p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Tavolina dhe Konsola</h4>
                <p>Krijojmë tavolina qendrore, anësore dhe konsola që plotësojnë stilin e dhomës suaj të ndenjjes.</p>
              </div>
              
              <div className="bg-furniture-beige p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Mobilie TV dhe Mediale</h4>
                <p>Dizajnojmë mobilie TV funksionale që integrojnë teknologjinë tuaj me stil dhe organizim të përsosur të kabllove.</p>
              </div>
            </div>
          </section>
          
          <section id="dhoma-gjumi" className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-furniture-navy border-b-2 border-furniture-forest pb-2">Mobilje për Dhoma Gjumi</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Mobilje për dhomë gjumi" 
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Qetësi dhe elegancë për hapësirën tuaj personale</h3>
                <p className="text-gray-600 mb-4">
                  Dhoma e gjumit është hapësira juaj personale e qetësisë dhe pushimit. Mobiljet tona për dhomën e gjumit janë të dizajnuara për të krijuar një ambient të qetë, komod dhe elegantë, ku mund të relaksoheni dhe të rimbushni energjinë.
                </p>
                <p className="text-gray-600">
                  Nga krevatet dhe komodinat deri te garderobat e integruara, çdo element është i projektuar për të maksimizuar hapësirën e ruajtjes dhe për të reflektuar stilin tuaj personal.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-furniture-beige p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Gardëroba të Personalizuara</h4>
                <p>Dizajnojmë gardëroba të personalizuara që maksimizojnë hapësirën e ruajtjes dhe organizimin e rrobave dhe aksesorëve.</p>
              </div>
              
              <div className="bg-furniture-beige p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Krevate dhe Komodina</h4>
                <p>Krijojmë krevate dhe komodina të përshtatshme për hapësirën dhe stilin tuaj, duke garantuar komoditet dhe funksionalitet.</p>
              </div>
              
              <div className="bg-furniture-beige p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-furniture-navy">Zgjidhje për Ruajtje</h4>
                <p>Ofrojmë zgjidhje të integruara për ruajtjen e objekteve personale dhe organizimin e hapësirës.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
