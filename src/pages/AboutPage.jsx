import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaBullseye, FaFlag } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Tentang Kami - PT Inti Logam Persada</title>
        <meta name="description" content="Pelajari lebih lanjut tentang sejarah, visi, dan misi PT Inti Logam Persada dalam industri manufaktur logam." />
      </Helmet>

      {/* Page Header */}
      <header className="bg-gray-100 py-16 text-center">
        <motion.h1 
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          Tentang PT Inti Logam Persada
        </motion.h1>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        {/* Sejarah */}
        <motion.div className="grid md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974" alt="Tim Profesional" className="rounded-lg shadow-xl"/>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Perjalanan Kami</h2>
            <p className="text-gray-600 leading-relaxed">
              Didirikan pada tahun 2010, PT Inti Logam Persada berawal dari sebuah bengkel kecil dengan visi besar untuk menjadi pemimpin dalam industri manufaktur logam. Dengan dedikasi pada kualitas dan adopsi teknologi, kami telah bertransformasi menjadi perusahaan terpercaya yang melayani klien nasional dan internasional.
            </p>
          </div>
        </motion.div>

        {/* Visi & Misi */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex items-center text-red-600 mb-4">
              <FaFlag size={28} className="mr-3" />
              <h3 className="text-2xl font-bold">Visi Kami</h3>
            </div>
            <p className="text-gray-600">Menjadi perusahaan manufaktur logam pilihan utama di Asia Tenggara yang dikenal akan inovasi, kualitas, dan keandalannya.</p>
          </motion.div>
          <motion.div className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex items-center text-red-600 mb-4">
              <FaBullseye size={28} className="mr-3" />
              <h3 className="text-2xl font-bold">Misi Kami</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Menyediakan produk berkualitas tinggi secara konsisten.</li>
              <li>Berinvestasi dalam teknologi dan sumber daya manusia.</li>
              <li>Membangun kemitraan jangka panjang dengan pelanggan.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
}