import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/PageHeader';
import PDAMLogo from '../../assets/customer/pdam.svg';
import PUPRLogo from '../../assets/customer/pupr.svg';
import AdhiKaryaLogo from '../../assets/customer/Adhi_Karya.svg';
import WaskitaKaryaLogo from '../../assets/customer/Waskita_Karya.svg';
import WijayaKaryaLogo from '../../assets/customer/Wijaya_Karya.svg';
import PPLogo from '../../assets/customer/PT_PP_logo.svg';
import PLNLogo from '../../assets/customer/pln.svg';
import HutamaKaryaLogo from '../../assets/customer/Hutama_Karya.svg';
import SchindlerLogo from '../../assets/customer/schindler.svg';
import NindyaKaryaLogo from '../../assets/customer/nindya_karya.svg';
import JayaKencanaLogo from '../../assets/customer/jaya_kencana.svg';

const customers = [
  { name: 'PDAM', logo: PDAMLogo },
  { name: 'PUPR', logo: PUPRLogo },
  { name: 'Adhi Karya', logo: AdhiKaryaLogo },
  { name: 'Waskita Karya', logo: WaskitaKaryaLogo },
  { name: 'Wijaya Karya', logo: WijayaKaryaLogo },
  { name: 'PP', logo: PPLogo },
  { name: 'PLN', logo: PLNLogo },
  { name: 'Hutama Karya', logo: HutamaKaryaLogo },
  { name: 'Schindler', logo: SchindlerLogo },
  { name: 'Nindya Karya', logo: NindyaKaryaLogo },
  { name: 'Jaya Kencana', logo: JayaKencanaLogo },
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
            <div key={c.name} className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center h-20 w-20 mb-2">
                <img src={c.logo} alt={c.name} className="max-h-16 w-full object-contain drop-shadow-md" />
              </div>
              <span className="text-gray-700 text-sm font-semibold mt-2 text-center whitespace-nowrap">{c.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
