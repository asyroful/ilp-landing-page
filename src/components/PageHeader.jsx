import { motion } from 'framer-motion';
import bgProduct from '../assets/bg_product_3.png';

export default function PageHeader({ title, subtitle }) {
  return (
    <header className="relative py-16 px-4 text-center overflow-hidden">
      {/* Background image horizontal */}
      <div
        className="absolute inset-0 w-full h-full bg-center"
        style={{
          backgroundImage: `url(${bgProduct})`,
          backgroundSize: 'cover',
          backgroundPosition: '0% 40%',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.div
            className="text-lg text-gray-100 mt-2 drop-shadow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.div>
        )}
      </div>
    </header>
  );
}
