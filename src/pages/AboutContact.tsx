
import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutContact = () => {
  return (
    <Layout>
      <div className="pt-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-furniture-navy">Rreth DreamHouse</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Njihuni me punën dhe vizionin tonë dhe na kontaktoni për çdo pyetje.
            </p>
          </div>
          
          <Tabs defaultValue="about" className="w-full mb-12">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="about" className="px-6 py-3">Rreth Nesh</TabsTrigger>
                <TabsTrigger value="contact" className="px-6 py-3">Na Kontaktoni</TabsTrigger>
              </TabsList>
            </div>
            
            {/* About Tab Content */}
            <TabsContent value="about">
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
            </TabsContent>
            
            {/* Contact Tab Content */}
            <TabsContent value="contact">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
                <div className="lg:col-span-2 bg-furniture-beige p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6 text-furniture-navy">Informacione Kontakti</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="text-furniture-forest mr-4 flex-shrink-0 h-6 w-6" />
                      <div>
                        <h3 className="font-semibold mb-1">Adresa</h3>
                        <p className="text-gray-600">Rruga Kavajës, Tiranë, Shqipëri</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="text-furniture-forest mr-4 flex-shrink-0 h-6 w-6" />
                      <div>
                        <h3 className="font-semibold mb-1">Telefon</h3>
                        <p className="text-gray-600">+355 69 123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="text-furniture-forest mr-4 flex-shrink-0 h-6 w-6" />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">info@dreamhouse.al</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="text-furniture-forest mr-4 flex-shrink-0 h-6 w-6" />
                      <div>
                        <h3 className="font-semibold mb-1">Orari</h3>
                        <p className="text-gray-600">E Hënë - E Premte: 9:00 - 18:00</p>
                        <p className="text-gray-600">E Shtunë: 10:00 - 15:00</p>
                        <p className="text-gray-600">E Dielë: Mbyllur</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-semibold mb-4">Na ndiqni</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-furniture-navy text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-furniture-forest transition-colors">
                        <span className="sr-only">Facebook</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="bg-furniture-navy text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-furniture-forest transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-furniture-navy">Na Dërgoni një Mesazh</h2>
                  <ContactForm />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-96">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.1087840984723!2d19.811600076546648!3d41.32908947130538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0xc1b0a589c41e114b!2sRruga%20e%20Kavaj%C3%ABs%2C%20Tirana%2C%20Albania!5e0!3m2!1sen!2sus!4v1620136371024!5m2!1sen!2sus" 
                    allowFullScreen 
                    loading="lazy"
                    title="DreamHouse Location"
                  ></iframe>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AboutContact;
