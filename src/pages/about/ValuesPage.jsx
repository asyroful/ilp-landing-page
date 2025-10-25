import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/PageHeader';

export default function ValuesPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('values.title')}</title>
        <meta name="description" content={t('values.meta')} />
      </Helmet>
      {/* Page Header */}
      <PageHeader title={t('values.title')} />
      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="text-lg text-gray-600 mb-4">
            {(() => {
              const desc = t('values.desc');
              const [tagline, ...rest] = desc.split(/\n\n/);
              // Find value points (numbered)
              const valueRegex = /^(\d+)\.\s*(.+)$/;
              const values = [];
              let currentTitle = null;
              let currentDesc = [];
              rest.forEach(par => {
                const lines = par.split(/\n/).filter(Boolean);
                lines.forEach(line => {
                  const match = valueRegex.exec(line.trim());
                  if (match) {
                    if (currentTitle) {
                      values.push({ title: currentTitle, desc: currentDesc.join(' ') });
                    }
                    currentTitle = match[2];
                    currentDesc = [];
                  } else if (currentTitle) {
                    currentDesc.push(line.trim());
                  }
                });
              });
              if (currentTitle) {
                values.push({ title: currentTitle, desc: currentDesc.join(' ') });
              }
              return (
                <>
                  <div className="mb-4 font-semibold">{tagline}</div>
                  <ol className="space-y-6 mt-4">
                    {values.map((v, idx) => (
                      <li key={idx}>
                        <div className="flex items-center mb-1">
                          <span className="font-bold text-red-700 text-xl mr-2">{idx + 1}.</span>
                          <span className="font-bold text-gray-800 text-lg">{v.title}</span>
                        </div>
                        <div>{v.desc}</div>
                      </li>
                    ))}
                  </ol>
                </>
              );
            })()}
          </div>
        </motion.div>
      </div>
    </>
  );
}
