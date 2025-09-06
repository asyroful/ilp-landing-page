import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCog, FaShieldAlt, FaTruck, FaMedal, FaUsers, FaDraftingCompass } from 'react-icons/fa';

// --- SUB-KOMPONEN UNTUK KERAPIAN ---

// 1. Hero Section (Banner Utama)
const HeroSection = () => {
  // Fungsi untuk handle smooth scroll
  const handleScroll = () => {
    const nextSection = document.getElementById('why-us');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gray-800 text-white min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092921462-20520a5a3174?q=80&w=2070')" }}></div>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <motion.div className="relative z-20 container mx-auto px-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, staggerChildren: 0.2 }}>
        <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-4" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          Solusi Inovatif Industri Manufaktur
        </motion.h1>
        <motion.p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          Kualitas, Presisi, dan Keandalan dalam Setiap Produk yang Kami Hasilkan.
        </motion.p>
        <motion.button
          onClick={handleScroll}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

// 2. Why Choose Us Section
const WhyChooseUsSection = () => {
  const features = [
    { icon: <FaMedal size={32} />, title: "Kualitas Terjamin", desc: "Kami menggunakan material terbaik dan proses quality control yang ketat." },
    { icon: <FaUsers size={32} />, title: "Tim Profesional", desc: "Didukung oleh para insinyur dan teknisi berpengalaman di bidangnya." },
    { icon: <FaDraftingCompass size={32} />, title: "Teknologi Modern", desc: "Mengadopsi mesin dan perangkat lunak terkini untuk hasil presisi." }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          Mengapa Memilih Kami?
        </motion.h2>
        <motion.p className="text-gray-600 max-w-2xl mx-auto mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
          Komitmen kami adalah memberikan nilai lebih bagi setiap klien melalui keunggulan dalam layanan dan produk.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} className="p-8 rounded-lg shadow-lg bg-gray-50 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-red-600 mb-4 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 3. About Us Snippet Section
const AboutSnippetSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974" alt="Tim Profesional" className="rounded-lg shadow-xl w-full"/>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Lebih dari 15 Tahun Melayani Industri</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              PT Inti Logam Persada adalah mitra terpercaya Anda dalam penyediaan komponen logam presisi. Sejak 2008, kami telah mendedikasikan diri untuk memberikan solusi manufaktur terbaik yang didukung oleh teknologi canggih dan tim yang ahli.
            </p>
            <Link to="/about" className="inline-flex items-center bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
              Profil Perusahaan <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


// 4. Client Logos Section
const ClientLogosSection = () => {
    const logos = [
        '/placeholder-logo-1.svg', '/placeholder-logo-2.svg',
        '/placeholder-logo-3.svg', '/placeholder-logo-4.svg',
        '/placeholder-logo-5.svg', '/placeholder-logo-6.svg',
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">Dipercaya Oleh Perusahaan Terkemuka</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
                    {logos.map((logo, index) => (
                        <motion.div key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Ganti dengan gambar logo Anda. Gunakan placeholder abu-abu untuk sementara. */}
                            <div className="w-32 h-16 bg-gray-300 mx-auto rounded-md flex items-center justify-center text-gray-500">
                                LOGO {index+1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// 5. CTA Section (Call to Action)
const CtaSection = () => {
  return (
    <section className="bg-red-700 text-white" style={{ backgroundImage: "url('/path-to-your-subtle-pattern.png')"}}>
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.h2 className="text-4xl font-extrabold mb-4" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          Mari Wujudkan Proyek Anda Bersama Kami
        </motion.h2>
        <motion.p className="max-w-2xl mx-auto mb-8 text-red-100" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
          Diskusikan kebutuhan Anda dengan tim ahli kami. Dapatkan konsultasi gratis dan penawaran terbaik untuk proyek manufaktur Anda hari ini.
        </motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
          <Link to="/contact" className="bg-white text-red-700 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Hubungi Kami Sekarang
          </Link>
        </motion.div>
      </div>
    </section>
  );
};


// --- KOMPONEN UTAMA HOMEPAGE ---
export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>PT Inti Logam Persada - Solusi Manufaktur Logam</title>
        <meta name="description" content="Menyediakan produk logam berkualitas tinggi dengan presisi dan keandalan yang terjamin untuk mendukung pertumbuhan bisnis Anda." />
      </Helmet>
      
      <HeroSection />
      <WhyChooseUsSection />
      <AboutSnippetSection />
      <ClientLogosSection />
      <CtaSection />
    </>
  );
}