import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import PDAMLogo from '../assets/customer/pdam.svg';
import PUPRLogo from '../assets/customer/pupr.svg';
import AdhiKaryaLogo from '../assets/customer/Adhi_Karya.svg';
import WaskitaKaryaLogo from '../assets/customer/Waskita_Karya.svg';
import WijayaKaryaLogo from '../assets/customer/Wijaya_Karya.svg';
import PPLogo from '../assets/customer/PT_PP_logo.svg';
import PertaminaLogo from '../assets/customer/pertamina.svg';
import PLNLogo from '../assets/customer/pln.svg';

const customers = [
  { name: 'PDAM', logo: PDAMLogo },
  { name: 'PUPR', logo: PUPRLogo },
  { name: 'Adhi Karya', logo: AdhiKaryaLogo },
  { name: 'Waskita Karya', logo: WaskitaKaryaLogo },
  { name: 'Wijaya Karya', logo: WijayaKaryaLogo },
  { name: 'PP', logo: PPLogo },
  { name: 'Pertamina', logo: PertaminaLogo },
  { name: 'PLN', logo: PLNLogo },
];

export default function CustomersPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('customers.title')}</title>
        <meta name="description" content={t('customers.meta')} />
      </Helmet>
      {/* Page Header */}
      <PageHeader title={t('customers.title')} />
      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-lg text-gray-600 text-center mb-8">{t('customers.desc')}</p>
        </motion.div>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          {customers.map((c) => (
            <div key={c.name} className="flex flex-col items-center">
              <img src={c.logo} alt={c.name} className="h-20 w-auto object-contain mb-2 drop-shadow-md bg-white rounded p-2"/>
              <span className="text-gray-700 text-sm font-medium mt-1">{c.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
