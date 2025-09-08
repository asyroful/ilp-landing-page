import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function HeavyEquipmentPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('heavy_equipment.title')}</title>
        <meta name="description" content={t('heavy_equipment.meta')} />
      </Helmet>
      {/* Page Header */}
      <header className="bg-gray-100 py-16 px-4 text-center">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {t('heavy_equipment.title')}
        </motion.h1>
      </header>
      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <img src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?q=80&w=2070" alt="Heavy Equipment" className="rounded-lg shadow-xl"/>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('heavy_equipment.title')}</h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>Our heavy equipment products are engineered for power and reliability, supporting large-scale industrial and construction projects.</p>
              <p>We prioritize safety, efficiency, and ease of maintenance in every machine we deliver.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
