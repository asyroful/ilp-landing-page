import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';

// Import semua halaman
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {
  // State untuk tombol scroll ke atas
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HelmetProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/6281234567890" // Ganti dengan nomor WhatsApp yang benar
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-300"
            aria-label="Chat WhatsApp"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
          >
            <FaWhatsapp size={32} />
          </a>
          {/* Floating Scroll to Top Button */}
          {showScroll && (
            <button
              onClick={handleScrollTop}
              className="fixed z-50 bottom-24 right-6 opacity-40 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-300 animate-bounce"
              aria-label="Scroll to top"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
            >
              <FaArrowUp size={28} />
            </button>
          )}
        </MainLayout>
      </Router>
    </HelmetProvider>
  );
}

export default App;