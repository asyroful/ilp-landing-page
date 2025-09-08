import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function PipeFittingsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('pipe_fittings.title')}</title>
        <meta name="description" content={t('pipe_fittings.meta')} />
      </Helmet>
      {/* Page Header */}
      <header className="bg-gray-100 py-16 px-4 text-center">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {t('pipe_fittings.title')}
        </motion.h1>
      </header>
      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2070" alt="Pipe Fittings" className="rounded-lg shadow-xl"/>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('pipe_fittings.title')}</h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>{t('pipe_fittings.desc')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
