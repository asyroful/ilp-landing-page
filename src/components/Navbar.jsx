import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { title: t('navbar.home'), path: '/' },
    { title: t('navbar.about'), path: '/about' },
    { title: t('navbar.services'), path: '/services' },
    { title: t('navbar.portfolio'), path: '/portfolio' },
    { title: t('navbar.contact'), path: '/contact' },
  ];

  const contactTitle = t('navbar.contact');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Mobile: Hamburger + Logo kiri, Language kanan */}
          <div className="flex items-center w-full lg:hidden justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none${isOpen ? ' z-50 relative' : ''}`}
                aria-label="Toggle menu"
                tabIndex={0}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={20} />}
              </button>
              <NavLink to="/" className="ml-2 text-lg font-bold text-gray-800">
                Inti Logam Persada
              </NavLink>
            </div>
            {/* Language Switcher Mobile */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => changeLanguage('id')}
                className={`px-2 py-1 rounded text-xs font-medium border ${i18n.language === 'id' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
              >
                ID
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded text-xs font-medium border ${i18n.language === 'en' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Desktop: Logo, Nav, Language (justify-between) */}
          <>
            <div className="hidden lg:block flex-shrink-0">
              <NavLink to="/" className="text-lg font-bold text-gray-800">
                Inti Logam Persada
              </NavLink>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                        isActive
                          ? 'bg-red-600 text-white'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`
                    }
                  >
                    {link.title}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="ml-6 flex items-center space-x-2">
                <button
                  onClick={() => changeLanguage('id')}
                  className={`px-3 py-1 text-sm font-bold rounded-md transition-colors ${
                    i18n.language === 'id' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 text-sm font-bold rounded-md transition-colors ${
                    i18n.language === 'en' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </>

        </div>
      </div>

      {/* Mobile Menu - animated dropdown with framer-motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed top-4 right-0 left-0 z-40"
          >
            <div className="mx-auto mt-16 w-full bg-white shadow-2xl rounded-b-xl">
              <div className="flex-1 px-6 pt-4 pb-6 space-y-2 flex flex-col justify-center">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-md text-base font-medium text-left ${
                        isActive ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                      }`
                    }
                  >
                    {link.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}