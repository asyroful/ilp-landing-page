import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function CsrPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('csr.title')}</title>
        <meta name="description" content={t('csr.meta')} />
      </Helmet>
      {/* Page Header */}
      <header className="bg-gray-100 py-16 px-4 text-center">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {t('csr.title')}
        </motion.h1>
      </header>
      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('csr.title')}</h2>
          <div className="text-lg text-gray-600 leading-relaxed mb-4">{t('csr.desc')}</div>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>{t('csr.item1')}</li>
            <li>{t('csr.item2')}</li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}
