import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const allServices = [
  { title: "CNC Machining", desc: "Proses permesinan terkomputerisasi untuk membuat komponen kompleks dengan tingkat akurasi mikron.", img: "https://images.unsplash.com/photo-1617953141905-d2c710f1edde?q=80&w=2070" },
  { title: "Sheet Metal Fabrication", desc: "Layanan pemotongan, penekukan, dan perakitan lembaran logam untuk berbagai aplikasi industri.", img: "https://images.unsplash.com/photo-1589178428813-261556a3108c?q=80&w=2070" },
  { title: "Welding & Assembly", desc: "Jasa pengelasan profesional (MIG, TIG) dan perakitan akhir untuk konstruksi yang kokoh dan rapi.", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069" },
  { title: "Surface Finishing", desc: "Menyediakan layanan finishing seperti powder coating, anodizing, dan polishing untuk estetika dan proteksi.", img: "https://images.unsplash.com/photo-1598454449852-527568325a59?q=80&w=1964" },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Layanan Kami - PT Inti Logam Persada</title>
        <meta name="description" content="Jelajahi layanan manufaktur logam kami, termasuk CNC Machining, Fabrikasi, Welding, dan Surface Finishing." />
      </Helmet>

      <header className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Layanan Komprehensif Kami</h1>
      </header>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {allServices.map((service, index) => (
            <motion.div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="overflow-hidden h-64">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}