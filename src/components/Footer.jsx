import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-red-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kolom 1: Tentang Perusahaan */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">PT Inti Logam Persada</h3>
            <p className="text-white">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-white"><FaFacebook size={24} /></a>
              <a href="#" className="text-white hover:text-white"><FaInstagram size={24} /></a>
              <a href="#" className="text-white hover:text-white"><FaLinkedin size={24} /></a>
            </div>
          </div>

          {/* Kolom 2: Link Cepat */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="text-white hover:text-white">{t('navbar.about')}</NavLink></li>
              <li><NavLink to="/services" className="text-white hover:text-white">{t('navbar.services')}</NavLink></li>
              <li><NavLink to="/portfolio" className="text-white hover:text-white">{t('navbar.portfolio')}</NavLink></li>
              <li><NavLink to="/contact" className="text-white hover:text-white">{t('navbar.contact')}</NavLink></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact_us')}</h3>
            <address className="not-italic text-white space-y-2">
              <p>{t('footer.address')}</p>
              <p>{t('footer.email')}: marketing@intilogampersada.co.id</p>
              <p>{t('footer.phone')}: (021) 1234-5678</p>
            </address>
          </div>
        </div>
      </div>
      <div className="bg-red-900 py-4">
        <div className="container mx-auto px-4 text-center text-white">
          <p>&copy; {new Date().getFullYear()} PT Inti Logam Persada. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}