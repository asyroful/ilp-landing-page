import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMedal, FaUsers, FaDraftingCompass } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { blogPosts } from '../data/blogData';
import BlogCard from '../components/BlogCard';
import PDAMLogo from '../assets/customer/pdam.svg';
import PUPRLogo from '../assets/customer/pupr.svg';
import AdhiKaryaLogo from '../assets/customer/Adhi_Karya.svg';
import WaskitaKaryaLogo from '../assets/customer/Waskita_Karya.svg';
import WijayaKaryaLogo from '../assets/customer/Wijaya_Karya.svg';
import PPLogo from '../assets/customer/PT_PP_logo.svg';
import HutamaKaryaLogo from '../assets/customer/Hutama_Karya.svg';
import SchindlerLogo from '../assets/customer/schindler.svg';
import NindyaKaryaLogo from '../assets/customer/nindya_karya.svg';
import JayaKencanaLogo from '../assets/customer/jaya_kencana.svg';
import PLNLogo from '../assets/customer/pln.svg';
import bgProduct from '../assets/bg_product_3.png';
import LogoILP from '../assets/logo ILP.png';
import { productCategories } from '../data/productsData';

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
        className="absolute inset-0 bg-cover z-0"
        style={{ 
          backgroundImage: `url(${bgProduct})`,
          backgroundPosition: '60% 0%',
          filter: 'blur(4px)',
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
      <div className="container mx-auto max-w-5xl px-8 md:px-16 text-center">
        <motion.div className="w-full" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeInOut" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">{t('homepage.about_snippet.title')}</h2>
          <div className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">{t('homepage.about_snippet.description')}</div>
          <Link to="/about" className="inline-flex items-center bg-red-600 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg hover:bg-red-700 transition-colors">
            {t('homepage.about_snippet.button')} <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};


// 4. Client Logos Section
  const ClientLogosSection = () => {
    const logos = [
      PDAMLogo,
      PUPRLogo,
      AdhiKaryaLogo,
      WaskitaKaryaLogo,
      WijayaKaryaLogo,
      PPLogo,
      PLNLogo,
      HutamaKaryaLogo,
      SchindlerLogo,
      NindyaKaryaLogo,
      JayaKencanaLogo
    ];

    // **Kunci untuk Infinite Scroll: Gandakan daftar logo**
    const infiniteLogos = [...logos, ...logos];

    const { t } = useTranslation();
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    // Logic untuk mendeteksi apakah komponen sudah terlihat (View Logic)
    useEffect(() => {
      const handleScroll = () => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        // Cek apakah komponen ada di viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setInView(true);
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Durasi animasi yang disarankan (sesuaikan dengan jumlah logo)
    const DURATION = logos.length * 4; // Contoh: 8 logo * 5 detik = 40 detik
    
    return (
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">{t('homepage.clients.title')}</h2>
          
          {/* Wrapper utama yang menyembunyikan overflow dan menampung slider */}
          <div className="relative overflow-hidden">
            {/* Animasi In-View (opacity dan x: 0) - Gunakan motion.div luar */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {/* Animasi Slider (x: -100%) - Gunakan motion.div dalam */}
              <motion.div
                className="flex items-center"
                // Mulai dari 0%
                initial={{ x: '0%' }}
                // Bergerak sampai -50%. Karena kita punya 2 set logo (200%), -100% dari total minWidth berarti menggeser 1 set logo penuh.
                animate={{ x: '-50%' }} 
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'loop', 
                  duration: DURATION, // Durasi yang lebih dinamis
                  ease: 'linear' 
                }}
                // Memastikan container cukup lebar untuk menampung semua logo ganda
                style={{ minWidth: 'max-content' }}
              >
                {/* Mapping ke daftar logo yang sudah digandakan */}
                {infiniteLogos.map((logo, index) => {
                  // Tentukan apakah logo ini adalah logo terakhir dari set PERTAMA atau set KEDUA
                  const isLastOfFirstGroup = index === logos.length - 1;
                  // Hilangkan margin pada logo terakhir set pertama agar logo pertama set kedua menempel
                  const isLastOfAnyGroup = index === infiniteLogos.length - 1;

                  return (
                    <div
                      key={index}
                      className={`w-32 h-16 rounded-md flex items-center justify-center bg-white shadow
                        ${!isLastOfFirstGroup && !isLastOfAnyGroup ? ' mr-12' : ''}
                        ${isLastOfFirstGroup ? ' mr-12' : ''} 
                      `}
                    >
                      <img 
                        src={logo} 
                        alt={`Logo ${index % logos.length + 1}`} 
                        className="h-full w-auto object-contain p-2" 
                      />
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    );
}


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
            <BlogCard key={post.slug} post={post} index={index} currentLang={currentLang} variant="compact" />
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

// Our Product Section
const OurProductSection = () => {
  const { t } = useTranslation();
  // Ambil 1 produk pertama dari tiap kategori yang memiliki produk
  const categories = productCategories;
  const featuredProducts = categories
    .map(cat => {
      if (cat.products && cat.products.length > 0) {
        const p = cat.products[0];
        return {
          ...p,
          _categoryKey: cat.key,
          _categoryName: cat.name,
        };
      }
      return null;
    })
    .filter(Boolean);
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('homepage.our_product.title', 'Our Product')}</h2>
        <div className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">{t('homepage.our_product.subtitle', 'Produk-produk unggulan kami untuk berbagai kebutuhan industri.')}</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.images && product.images.length > 0 ? product.images[0] : '/assets/no-image.png'}
                alt={product.name}
                className="w-full h-40 object-contain bg-gray-50"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">{product.description}</p>
                <Link
                  to={`/products/${product._categoryKey}/${product.id}`}
                  className="mt-auto inline-block text-red-600 font-semibold hover:underline"
                >
                  {t('products_page.button_view', 'View Product')}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/products"
          className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors shadow-lg"
        >
          {t('homepage.our_product.button', 'View All Products')}
        </Link>
      </div>
    </section>
  );
};
export default function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Helmet>
        <title>CV. Inti Logam Persada - Solusi Manufaktur Logam</title>
        <meta name="description" content="Menyediakan produk logam berkualitas tinggi dengan presisi dan keandalan yang terjamin untuk mendukung pertumbuhan bisnis Anda." />
      </Helmet>
      
      <HeroSection />
      <WhyChooseUsSection />
      <OurProductSection />
      <AboutSnippetSection />
      {/* <LatestNewsSection /> */}
      <ClientLogosSection />
      <CtaSection />
    </>
  );
}