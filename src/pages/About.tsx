
import React from 'react';
import Layout from '@/components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="pt-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-furniture-navy">Rreth Nesh</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mësoni më shumë për historinë, misionin dhe filozofinë tonë të prodhimit të mobiljeve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                alt="Punishtja DreamHouse" 
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-furniture-navy">Historia Jonë</h2>
              <p className="text-gray-600 mb-4">
                DreamHouse u themelua në vitin 2005 nga një grup mjeshtërish pasionantë të punimit të drurit, me vizionin për të krijuar mobilje të personalizuara, funksionale dhe me cilësi të lartë për shtëpitë shqiptare.
              </p>
              <p className="text-gray-600 mb-4">
                Që nga fillimi, kemi qenë të përkushtuar ndaj cilësisë, duke përdorur vetëm materialet më të mira dhe duke përqafuar teknikat më të avancuara të prodhimit. Me kalimin e viteve, DreamHouse është rritur nga një punishte e vogël në një nga prodhuesit kryesorë të mobiljeve në Shqipëri.
              </p>
              <p className="text-gray-600">
                Sot, me një ekip prej mbi 50 profesionistësh të talentuar, vazhdojmë të ofrojmë mobilje të personalizuara që kombinojnë funksionalitetin, estetikën dhe qëndrueshmërinë, duke e bërë çdo shtëpi një vend më të këndshëm për të jetuar.
              </p>
            </div>
          </div>
          
          <div className="bg-furniture-beige p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-furniture-navy text-center">Misioni dhe Vlerat Tona</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-furniture-forest">Cilësia e Pakompromis</h3>
                <p className="text-gray-600">
                  Ne besojmë se mobiljet duhet të jenë të bukura dhe të qëndrueshme. Përdorim vetëm materiale cilësore dhe teknika të përparuara të prodhimit për të siguruar që çdo produkt të këtë jetëgjatësi maksimale.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-furniture-forest">Klienti në Qendër</h3>
                <p className="text-gray-600">
                  Kënaqësia e klientit është prioriteti ynë kryesor. Punojmë ngushtë me klientët tanë për të kuptuar nevojat dhe dëshirat e tyre, duke ofruar zgjidhje të personalizuara që tejkalojnë pritshmëritë.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-furniture-forest">Inovacion i Vazhdueshëm</h3>
                <p className="text-gray-600">
                  Jemi gjithmonë në kërkim të ideve dhe teknikave të reja për të përmirësuar produktet tona. Investojmë vazhdimisht në teknologji dhe trajnime për të qëndruar në krye të trendeve të industrisë.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-furniture-navy text-center">Procesi Ynë i Punës</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg shadow-md bg-white">
                <div className="bg-furniture-navy text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3 text-furniture-navy">Konsultimi</h3>
                <p className="text-gray-600">
                  Fillojmë me një takim ku diskutojmë nevojat, preferencat dhe buxhetin tuaj. Kuptojmë hapësirën dhe vizionin tuaj për projektin.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg shadow-md bg-white">
                <div className="bg-furniture-navy text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3 text-furniture-navy">Dizajni</h3>
                <p className="text-gray-600">
                  Bazuar në diskutimet tona, krijojmë një dizajn të detajuar dhe ju prezantojmë vizualizimet për miratimin tuaj.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg shadow-md bg-white">
                <div className="bg-furniture-navy text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3 text-furniture-navy">Prodhimi</h3>
                <p className="text-gray-600">
                  Pasi miratohet dizajni, nisim prodhimin e mobiljeve, duke përdorur teknologji të përparuar dhe mjeshtëri tradicionale.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg shadow-md bg-white">
                <div className="bg-furniture-navy text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-semibold mb-3 text-furniture-navy">Instalimi</h3>
                <p className="text-gray-600">
                  Ekipi ynë profesional kujdeset për transportin dhe montimin e mobiljeve në shtëpinë tuaj, duke siguruar një përfundim të përkryer.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-furniture-navy text-center">Ekipi Ynë</h2>
            
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Fuqia jonë qëndron në ekipin tonë të përkushtuar - një përzierje e mjeshtërve të punimit të drurit, dizajnerëve kreativë dhe specialistëve të shërbimit ndaj klientit - të gjithë të bashkuar nga pasioni për krijimin e mobiljeve të jashtëzakonshme.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Arben Mala - Themelues dhe CEO" 
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-furniture-navy">Arben Mala</h3>
                <p className="text-furniture-forest font-medium">Themelues dhe CEO</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                  alt="Teuta Hoxha - Dizajnere Kryesore" 
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-furniture-navy">Teuta Hoxha</h3>
                <p className="text-furniture-forest font-medium">Dizajnere Kryesore</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Dritan Berisha - Mjeshtër Prodhimi" 
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-furniture-navy">Dritan Berisha</h3>
                <p className="text-furniture-forest font-medium">Mjeshtër Prodhimi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
