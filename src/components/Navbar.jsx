
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import logoIlpText from '../assets/logo-ilp-text.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // untuk kontrol dropdown desktop
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null); // untuk mobile accordion
  const { t, i18n } = useTranslation();

  const navLinks = [
    { title: t('navbar.home'), path: '/' },
    {
      title: t('navbar.about'),
      path: '/about',
      submenu: [
        { title: t('navbar.profile'), path: '/about/profile' },
        { title: t('navbar.vision_mission'), path: '/about/vision-mission' },
        { title: t('navbar.values'), path: '/about/values' },
        { title: t('navbar.csr'), path: '/about/csr' },
      ]
    },
    {
      title: t('navbar.products'),
      path: '/products',
      submenu: [
        { title: t('navbar.pipe_fittings'), path: '/products/pipe-fittings' },
        { title: t('navbar.drainage'), path: '/products/drainage' },
        { title: t('navbar.construction'), path: '/products/construction' },
        { title: t('navbar.automotive'), path: '/products/automotive' },
        { title: t('navbar.mining'), path: '/products/mining' },
        { title: t('navbar.heavy_equipment'), path: '/products/heavy-equipment' },
        { title: t('navbar.others'), path: '/products/others' },
      ]
    },
    { title: t('navbar.customers'), path: '/customers' },
    { title: t('navbar.blog'), path: '/blog' },
    { title: t('navbar.contact'), path: '/contact' },
  ];

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
              <img
                src={logoIlpText}
                alt="Inti Logam Persada Logo"
                className="h-6 object-contain"
              />
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
              <NavLink to="/" className="inline-block align-middle">
                <img
                  src={logoIlpText}
                  alt="Inti Logam Persada Logo"
                  className="h-10 w-25 object-contain"
                />
              </NavLink>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link, idx) => (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(idx)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    onFocus={() => setOpenDropdown(idx)}
                    onBlur={(e) => {
                      // close dropdown if focus leaves the dropdown
                      if (!e.currentTarget.contains(e.relatedTarget)) setOpenDropdown(null);
                    }}
                  >
                    {link.submenu ? (
                      <>
                        <button
                          className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center gap-1 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:text-red-700 focus:outline-none"
                          tabIndex={0}
                          aria-haspopup="true"
                          aria-expanded={openDropdown === idx}
                        >
                          {link.title}
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <AnimatePresence>
                          {openDropdown === idx && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.18 }}
                              className="absolute left-0 top-full min-w-[220px] bg-white shadow-xl rounded-lg py-2 z-30"
                              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
                            >
                              {link.submenu.map((sublink) => (
                                <NavLink
                                  key={sublink.path}
                                  to={sublink.path}
                                  className={({ isActive }) =>
                                    `block px-5 py-2 text-sm rounded-md transition-colors duration-200 whitespace-nowrap ${
                                      isActive
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-red-700'
                                    }`
                                  }
                                  tabIndex={0}
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {sublink.title}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
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
                    )}
                  </div>
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
                {navLinks.map((link, idx) => (
                  <div key={link.path} className="w-full">
                    {link.submenu ? (
                      <>
                        <button
                          className="w-full flex justify-between items-center px-4 py-3 rounded-md text-base font-medium text-left text-gray-700 hover:bg-gray-100 focus:outline-none"
                          onClick={() => setOpenMobileAccordion(openMobileAccordion === idx ? null : idx)}
                          aria-expanded={openMobileAccordion === idx}
                        >
                          <span>{link.title}</span>
                          <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${openMobileAccordion === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <AnimatePresence initial={false}>
                          {openMobileAccordion === idx && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              {link.submenu.map((sublink) => (
                                <NavLink
                                  key={sublink.path}
                                  to={sublink.path}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenMobileAccordion(null);
                                  }}
                                  className={({ isActive }) =>
                                    `block pl-8 pr-4 py-2 rounded-md text-base font-medium transition-colors duration-200 whitespace-nowrap ${
                                      isActive
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-red-700'
                                    }`
                                  }
                                >
                                  {sublink.title}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
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
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}