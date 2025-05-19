
import React from 'react';
import Layout from '@/components/layout/Layout';
import CostCalculator from '@/components/CostCalculator';

const Calculator = () => {
  return (
    <Layout>
      <div className="pt-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-furniture-navy">Kalkulator Kostoje</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Llogaritni koston e përafërt për projektin tuaj të ri të mobiljeve. Kjo ju ndihmon të planifikoni buxhetin dhe të kuptoni kostot përpara se të vendosni.
            </p>
          </div>
          
          <div className="mb-10">
            <CostCalculator />
          </div>
          
          <div className="bg-furniture-beige p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-furniture-navy text-center">Si të përdorni kalkulatorin</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-furniture-forest font-bold text-xl mb-2">1. Zgjidhni llojin dhe materialin</div>
                <p className="text-gray-600">Filloni duke zgjedhur llojin e mobiljes që dëshironi (kuzhinë, dhomë ndenjeje, dhomë gjumi) dhe materialin e preferuar (MDF, HDF, melaminë).</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-furniture-forest font-bold text-xl mb-2">2. Vendosni përmasat</div>
                <p className="text-gray-600">Përcaktoni gjerësinë dhe lartësinë e mobiljeve tuaja në centimetra duke përdorur rrëshqitësit.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-furniture-forest font-bold text-xl mb-2">3. Zgjidhni aksesorët</div>
                <p className="text-gray-600">Shtoni aksesorë opsionalë si doreza, sisteme tërheqëse dhe ndriçim për të plotësuar dizajnin tuaj.</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Vini re që ky është vetëm një vlerësim i përafërt. Për një preventiv të saktë, ju rekomandojmë të <a href="/kontakt" className="text-furniture-forest font-medium hover:underline">na kontaktoni</a> për një konsultim të personalizuar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Calculator;
