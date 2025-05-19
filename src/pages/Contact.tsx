
import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="pt-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-furniture-navy">Na Kontaktoni</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jemi këtu për t'ju ndihmuar me çdo pyetje që keni. Kontaktoni ekipin tonë miqësor për më shumë informacion.
            </p>
          </div>
          
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
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
