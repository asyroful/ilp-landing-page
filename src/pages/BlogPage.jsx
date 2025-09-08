import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';
import { useEffect } from 'react';

export default function BlogPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('blog_page.title')}</title>
        <meta name="description" content={t('blog_page.description')} />
      </Helmet>

      <header className="bg-gray-100 py-16 px-4 text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {t('blog_page.header_title')}
        </motion.h1>
        <motion.div
          className="text-lg text-gray-600 mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('blog_page.header_subtitle')}
        </motion.div>
      </header>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, shadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }}
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="overflow-hidden h-56">
                  <img src={post.thumbnail} alt={post.title[currentLang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date} • {post.author}</p>
                  <h2 className="text-xl font-bold text-gray-800 mb-3 h-20">{post.title[currentLang]}</h2>
                  <div className="text-lg text-gray-600 mb-4">{post.excerpt[currentLang]}</div>
                  <span className="font-bold text-blue-600 group-hover:underline">
                    {t('blog_page.read_more')}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
