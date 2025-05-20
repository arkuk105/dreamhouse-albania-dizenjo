
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';

// Sample blog posts data
// In a real app, this would come from an API or database
const blogPosts = [
  {
    slug: 'si-te-perzgjidhni-materialin-e-duhur',
    title: 'Si të përzgjidhni materialin e duhur për mobiljet tuaja',
    content: `
      <p class="mb-4">Përzgjedhja e materialeve të duhura për mobiljet është një proces i rëndësishëm që ndikon drejtpërdrejt në cilësinë, qëndrueshmërinë dhe pamjen e mobiljeve tuaja. Në këtë artikull, do të shqyrtojmë ndryshimet midis materialeve më të zakonshme dhe kur është më mirë të përdorni secilin.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">MDF (Medium Density Fiberboard)</h2>
      
      <p class="mb-4">MDF është një material i krijuar nga fibrat e drurit të kompresuara me rrëshirë nën nxehtësi dhe presion të lartë. Ky material është i qëndrueshëm, i lëmuar dhe ideal për sipërfaqe që do të lyhen ose vishen.</p>
      
      <p class="mb-4"><strong>Avantazhet:</strong></p>
      <ul class="list-disc pl-8 mb-4">
        <li>Sipërfaqe e lëmuar dhe e njëtrajtshme</li>
        <li>I përshtatshëm për lyerje dhe lustrim</li>
        <li>Stabiliteti dimensional i mirë (nuk zgjerohet ose tkurret shumë)</li>
        <li>Çmimi i arsyeshëm</li>
      </ul>
      
      <p class="mb-4"><strong>Përdorimet e rekomanduara:</strong></p>
      <ul class="list-disc pl-8 mb-8">
        <li>Fasada frontale të mobiljeve</li>
        <li>Dyer të brendshme</li>
        <li>Sipërfaqe të profilizuara ose të gdhendura</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">HDF (High Density Fiberboard)</h2>
      
      <p class="mb-4">HDF është i ngjashëm me MDF-në, por prodhohet me presion dhe densitet më të lartë. Kjo e bën atë më të fortë dhe më të qëndrueshëm.</p>
      
      <p class="mb-4"><strong>Avantazhet:</strong></p>
      <ul class="list-disc pl-8 mb-4">
        <li>Fortësi dhe qëndrueshmëri e lartë</li>
        <li>Rezistencë e mirë ndaj lagështirës</li>
        <li>Sipërfaqe shumë e lëmuar</li>
      </ul>
      
      <p class="mb-4"><strong>Përdorimet e rekomanduara:</strong></p>
      <ul class="list-disc pl-8 mb-8">
        <li>Dysheme laminat</li>
        <li>Fundet e sirtarëve</li>
        <li>Prapavija e mobiljeve</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Melaminë</h2>
      
      <p class="mb-4">Melaminë është një material i krijuar nga veshja e një pllake bërthamë (zakonisht MDF ose ashkla druri) me letër të ngopur me rrëshirë melamine, e cila është rezistente ndaj gërvishtjeve dhe lagështirës.</p>
      
      <p class="mb-4"><strong>Avantazhet:</strong></p>
      <ul class="list-disc pl-8 mb-4">
        <li>Sipërfaqe e gatshme që nuk kërkon përpunim shtesë</li>
        <li>Varieteti i madh i ngjyrave dhe modeleve</li>
        <li>Rezistencë ndaj gërvishtjeve dhe njollave</li>
        <li>Mirëmbajtje e lehtë</li>
      </ul>
      
      <p class="mb-4"><strong>Përdorimet e rekomanduara:</strong></p>
      <ul class="list-disc pl-8 mb-8">
        <li>Trupa të mobiljeve</li>
        <li>Rafte</li>
        <li>Mobilje zyre dhe shkollore</li>
        <li>Mobilje për ambiente me lagështirë të moderuar</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Kritere për zgjedhjen e materialit</h2>
      
      <p class="mb-4">Kur zgjidhni materialin për mobiljet tuaja, merrni parasysh këto kritere:</p>
      
      <ul class="list-disc pl-8 mb-8">
        <li><strong>Përdorimi:</strong> Për çfarë do të përdoret mobilia dhe sa intensiv do të jetë përdorimi?</li>
        <li><strong>Estetika:</strong> Cili material i përshtatet më mirë stilit të dëshiruar?</li>
        <li><strong>Ambienti:</strong> A do të ekspozohet mobilia ndaj lagështirës, nxehtësisë ose kushteve të tjera të veçanta?</li>
        <li><strong>Buxheti:</strong> Cili material ofron ekuilibrin më të mirë midis cilësisë dhe çmimit për nevojat tuaja?</li>
      </ul>
      
      <p class="mb-4">Në DreamHouse, ekipi ynë i projektimit ju ndihmon të zgjidhni materialet më të përshtatshme për projektin tuaj, duke marrë parasysh të gjitha këto faktorë për të krijuar mobilje që janë si estetikisht tërheqëse ashtu edhe funksionale për një kohë të gjatë.</p>
    `,
    author: 'Ervis Doda',
    date: '20 Maj 2023',
    image: 'https://images.unsplash.com/photo-1580130732478-4e339fb6836f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    category: 'Materiale',
  },
  {
    slug: 'trendet-e-dizajnit-te-mobiljeve',
    title: 'Trendet e dizajnit të mobiljeve për 2023',
    content: `
      <p class="mb-4">Trendet e dizajnit të mobiljeve janë gjithmonë në evoluim, duke reflektuar ndryshimet në shoqëri, teknologji dhe vlera estetike. Në vitin 2023, po shohim një përzierje interesante të stileve tradicionale dhe moderne, me theks në qëndrueshmëri, funksionalitet dhe komoditet.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Materiale Natyrale dhe Tekstura</h2>
      
      <p class="mb-4">Një nga trendet kryesore të vitit 2023 është rikthimi i materialeve natyrale dhe teksturave. Druri i ekspozuar, guri, ratani dhe materialet e tjera organike po bëhen gjithnjë e më të njohura, duke sjellë ngrohtësi dhe autenticitet në hapësirat moderne.</p>
      
      <p class="mb-4">Sipërfaqet me teksturë si druri i ashpër, betoni i ekspozuar dhe metalet me patinë po përdoren për të shtuar dimensione dhe karakter në mobilje që përndryshe do të ishin minimaliste.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Qëndrueshmëria në Plan të Parë</h2>
      
      <p class="mb-4">Qëndrueshmëria nuk është më thjesht një fjalë modës, por një konsideratë thelbësore në prodhimin dhe zgjedhjen e mobiljeve. Konsumatorët po kërkojnë gjithnjë e më shumë:</p>
      
      <ul class="list-disc pl-8 mb-8">
        <li>Mobilje të prodhuara nga materiale të riciklueshme ose të ricikluara</li>
        <li>Produkte me jetëgjatësi të lartë që zëvendësojnë kulturën "përdor dhe hidh"</li>
        <li>Procese prodhimi me ndikim të ulët mjedisor</li>
        <li>Materiale të çertifikuara dhe të qëndrueshme</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Kurba dhe Forma Organike</h2>
      
      <p class="mb-4">Pas vitesh dominimi të linjave të drejta dhe këndeve të mprehta, format e rrumbullakëta dhe organike po kthehen me forcë. Kolltukë të rrumbullakët, tavolina me cepa të butë dhe mobilje të tjera me forma organike po sjellin një ndjenjë qetësie dhe komoditeti në hapësirat e banimit.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Multifunksionaliteti dhe Fleksibiliteti</h2>
      
      <p class="mb-4">Me hapësirat e banimit që po bëhen gjithnjë e më të vogla, veçanërisht në qytetet e mëdha, mobiljet multifunksionale janë bërë të domosdoshme. Shohim një rritje në popullaritetin e:</p>
      
      <ul class="list-disc pl-8 mb-8">
        <li>Tavolinave që konvertohen nga tavolina kafeje në tavolina ngrënieje</li>
        <li>Njësive modulare që mund të riorganizohen sipas nevojave</li>
        <li>Mobiljeve me hapësira të integruara ruajtjeje</li>
        <li>Pajisjeve që kursejnë hapësirë, si shtretër që palosen në mur</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Ngjyrat e Vitit</h2>
      
      <p class="mb-4">Për sa i përket ngjyrave, po shohim një kthim të toneve të ngrohta të tokës si terrakota, okër dhe jeshile ulliri. Këto ngjyra po kombinohen me nuanca neutrale për të krijuar ambiente komode dhe mikpritëse.</p>
      
      <p class="mb-4">Në kontrast, po shohin gjithashtu përdorim të nuancave të guximshme si blu të thellë, të gjelbër të errët dhe të kuqe të pasura për të shtuar dramaticitet dhe karakter në hapësira specifike.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Teknologjia e Integruar</h2>
      
      <p class="mb-4">Shtëpitë po bëhen gjithnjë e më të zgjuara, dhe mobiljet nuk po mbesin pas. Në 2023, po shohim mobilje me:</p>
      
      <ul class="list-disc pl-8 mb-8">
        <li>Portalë të integruar karikimi</li>
        <li>Kontrolle të dritës dhe muzikës të integruara</li>
        <li>Funksionalitet të zgjuar për përmirësimin e komoditetit</li>
        <li>Ruajtje të fshehtë për elektronikë dhe kabllo</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Si t'i integroni këto trende në shtëpinë tuaj</h2>
      
      <p class="mb-4">Ndërsa është tërheqëse të përqafoni trendet më të fundit, është e rëndësishme të zgjidhni ato që harmonizojnë me stilin tuaj ekzistues dhe nevojat funksionale. Këtu janë disa këshilla:</p>
      
      <ul class="list-disc pl-8 mb-8">
        <li>Filloni me artikuj të vegjël si jastëkë, aksesorë ose një mobilje të vetme për të eksperimentuar me një trend të ri</li>
        <li>Përqendrohuni në cilësi dhe funksionalitet mbi modën kalimtare</li>
        <li>Investoni në disa "klasikë modernë" që do të qëndrojnë të testuar në kohë, të plotësuar me artikuj më trend</li>
        <li>Konsideroni mënyrën tuaj unike të jetesës dhe zgjidhni mobilje që e mbështesin atë</li>
      </ul>
      
      <p class="mb-4">Në DreamHouse, ne jemi gjithmonë duke ndjekur trendet më të fundit të dizajnit, ndërsa mbetemi të angazhuar për cilësinë dhe qëndrueshmërinë. Ekipi ynë i dizajnit është këtu për t'ju ndihmuar të krijoni një hapësirë që është njëkohësisht në trend dhe e përshtatshme për jetën tuaj.</p>
    `,
    author: 'Elidon Gjuni',
    date: '12 Qershor 2023',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Dizajn',
  },
  // Additional blog posts would be included here
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Artikulli nuk u gjet</h1>
          <p className="mb-8">Na vjen keq, por artikulli që po kërkoni nuk ekziston.</p>
          <Button onClick={() => navigate('/blog')}>Kthehu te Blog</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center"
          onClick={() => navigate('/blog')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kthehu te Blog
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-64 object-cover rounded-lg" 
            />
          </div>

          <div className="mb-4">
            <span className="bg-furniture-forest/10 text-furniture-forest px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-gray-500 mb-8">
            <span>Nga {post.author}</span>
            <Separator orientation="vertical" className="mx-2 h-4" />
            <span>{post.date}</span>
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <Separator className="my-8" />

          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={() => navigate('/blog')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Artikuj të tjerë
            </Button>
            <Button>
              Ndani artikullin
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
