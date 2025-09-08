import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCog, FaShieldAlt, FaTruck, FaMedal, FaUsers, FaDraftingCompass } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { blogPosts } from '../data/blogData';

// --- SUB-KOMPONEN UNTUK KERAPIAN ---

// 1. Hero Section (Banner Utama)
const HeroSection = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  // Membuat background bergerak lebih lambat (0.5x kecepatan scroll) saat scroll ke bawah
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Fungsi untuk handle smooth scroll
  const handleScroll = () => {
    const nextSection = document.getElementById('why-us');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581092921462-20520a5a3174?q=80&w=2070')",
          y // Menerapkan efek parallax
        }}
      />
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <motion.div className="relative z-20 container mx-auto px-4" initial="hidden" animate="visible" variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
      }}>
        <motion.h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition:{duration: 0.8} } }}>
          {t('homepage.hero.title')}
        </motion.h1>
        <motion.p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition:{duration: 0.8} } }}>
          {t('homepage.hero.subtitle')}
        </motion.p>
        <motion.button onClick={handleScroll} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition:{duration: 0.8} } }}>
          {t('homepage.hero.button')}
        </motion.button>
      </motion.div>
    </div>
  );
};

// 2. Why Choose Us Section
const WhyChooseUsSection = () => {
  const { t } = useTranslation();
  const features = [
    { icon: <FaMedal size={32} />, title: t('homepage.why_us.feature1_title'), desc: t('homepage.why_us.feature1_desc') },
    { icon: <FaUsers size={32} />, title: t('homepage.why_us.feature2_title'), desc: t('homepage.why_us.feature2_desc') },
    { icon: <FaDraftingCompass size={32} />, title: t('homepage.why_us.feature3_title'), desc: t('homepage.why_us.feature3_desc') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Setiap anak elemen akan muncul dengan jeda 0.2 detik
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 } // Efek pegas
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('homepage.why_us.title')}</h2>
        <div className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">{t('homepage.why_us.subtitle')}</div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Animasi berjalan saat setengah bagian terlihat
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="p-8 rounded-lg shadow-lg bg-gray-50 text-center" variants={itemVariants}>
              <div className="text-red-600 mb-4 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <div className="text-lg text-gray-600">{feature.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 3. About Us Snippet Section
const AboutSnippetSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // Lacak scroll dari awal elemen terlihat hingga akhir elemen hilang
  });
  // Membuat gambar bergerak ke atas (-100px) saat section di-scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-[500px] rounded-lg shadow-xl overflow-hidden">
            <motion.img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974" 
              alt="Tim Profesional" 
              className="w-full h-full object-cover"
              style={{ y }} // Terapkan gerakan vertikal
            />
          </div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeInOut" }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('homepage.about_snippet.title')}</h2>
            <div className="text-lg text-gray-600 leading-relaxed mb-6">{t('homepage.about_snippet.description')}</div>
            <Link to="/about" className="inline-flex items-center bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
              {t('homepage.about_snippet.button')} <FaArrowRight className="ml-2" />
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
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">{t('homepage.clients.title')}</h2>
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
  const { t } = useTranslation();
  return (
    <section className="bg-red-700 text-white" style={{ backgroundImage: "url('/path-to-your-subtle-pattern.png')"}}>
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.h2 className="text-4xl font-extrabold mb-4" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          {t('homepage.cta.title')}
        </motion.h2>
        <motion.p className="max-w-2xl mx-auto mb-8 text-red-100" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
          {t('homepage.cta.subtitle')}
        </motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
          <Link to="/contact" className="bg-white text-red-700 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg">
            {t('homepage.cta.button')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const LatestNewsSection = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  // Pastikan blogPosts sudah di-import
  // Ambil 3 postingan terbaru (urutkan berdasarkan tanggal terbaru)
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('latest_news_section.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }}
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="overflow-hidden h-56">
                  <img
                    src={post.thumbnail}
                    alt={post.title[currentLang]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date} • {post.author}</p>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 h-16">{post.title[currentLang]}</h3>
                  <div className="text-lg text-gray-600 mb-4">{post.excerpt[currentLang]}</div>
                  <span className="font-bold text-red-600 group-hover:underline">
                    {t('blog_page.read_more')}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors shadow-lg"
          >
            {t('latest_news_section.view_all', 'Lihat Semua Berita')}
          </Link>
        </div>
      </div>
    </section>
  );
};


// --- KOMPONEN UTAMA HOMEPAGE ---
export default function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Helmet>
        <title>PT Inti Logam Persada - Solusi Manufaktur Logam</title>
        <meta name="description" content="Menyediakan produk logam berkualitas tinggi dengan presisi dan keandalan yang terjamin untuk mendukung pertumbuhan bisnis Anda." />
      </Helmet>
      
      <HeroSection />
      <WhyChooseUsSection />
      <AboutSnippetSection />
      <LatestNewsSection />
      <ClientLogosSection />
      <CtaSection />
    </>
  );
}