import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const portfolioItems = [
  { id: 1, title: 'Komponen Otomotif', img: 'https://images.unsplash.com/photo-1605513219522-d781b3a1a6f2?q=80&w=2070' },
  { id: 2, title: 'Rangka Mesin Industri', img: 'https://images.unsplash.com/photo-1563889958-3566130b428b?q=80&w=1974' },
  { id: 3, title: 'Panel Elektronik', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070' },
  { id: 4, title: 'Peralatan Medis', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070' },
  { id: 5, title: 'Braket Arsitektur', img: 'https://images.unsplash.com/photo-1556912173-356993125b29?q=80&w=2069' },
  { id: 6, title: 'Prototipe Kustom', img: 'https://images.unsplash.com/photo-1555529940-08226946a3ce?q=80&w=2070' },
];

export default function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Portofolio - PT Inti Logam Persada</title>
        <meta name="description" content="Lihat galeri proyek sukses kami di berbagai industri." />
      </Helmet>

      <header className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Portofolio Proyek Kami</h1>
      </header>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div key={item.id} className="relative rounded-lg overflow-hidden group shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={item.img} alt={item.title} className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}