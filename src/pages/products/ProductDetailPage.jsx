import ProductCard from "../../components/ProductCard";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { productCategories } from "../../data/productsData";
import { FaArrowLeft, FaWhatsapp, FaPhone, FaChevronLeft, FaChevronRight, FaMailchimp, FaEnvelopeOpenText } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { FaMessage } from "react-icons/fa6";

export default function ProductDetailPage() {
  const { t } = useTranslation();
  const { category, slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState(null);
  const [product, setProduct] = useState(null);
  const [mainImageIdx, setMainImageIdx] = useState(0);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const foundCat = productCategories.find((c) => c.key === category);
      const foundProduct = foundCat
        ? foundCat.products.find((p) => p.id === slug)
        : null;
      setCat(foundCat);
      setProduct(foundProduct);
      setMainImageIdx(0);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [category, slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!cat || !product)
    return <div className="text-center py-20">Product not found.</div>;

  // Image gallery logic
  const images = product.images && product.images.length > 0 ? product.images : [];
  const mainImage = images[mainImageIdx] || "";

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="mb-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-red-600 text-red-600 font-semibold rounded px-4 py-2 hover:bg-red-50 transition"
            >
              <FaArrowLeft />
              {t('products_page.back')}
            </Link>
          </div>
          <nav className="text-sm text-gray-500 mb-2" aria-label="Breadcrumb">
            <ol className="list-none flex flex-wrap gap-1 items-center">
              <li>
                <Link
                  to="/products"
                  className="hover:underline text-red-600 font-semibold"
                >
                  {t('navbar.products')}
                </Link>
              </li>
              <li className="mx-1">&#8226;</li>
              <li>
                <Link
                  to={`/products/${cat.key}`}
                  className="hover:underline text-red-600 font-semibold"
                >
                  {t(`navbar.${cat.key}`) || cat.name}
                </Link>
              </li>
              <li className="mx-1">&#8226;</li>
              <li className="text-gray-800 font-bold">{product.name}</li>
            </ol>
          </nav>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="w-1/2">
              <h1 className="text-2xl md:text-4xl font-bold mb-6">
                {product.name}
              </h1>
              {/* Image Gallery */}
              <div className="mb-6 flex flex-col items-center">
                <div className="relative w-full flex justify-center items-center">
                  {images.length > 1 && (
                    <button
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                      onClick={() => setMainImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                      aria-label="Previous image"
                    >
                      <FaChevronLeft size={24} />
                    </button>
                  )}
                  <img
                    src={mainImage}
                    alt={product.name}
                    className="rounded-lg shadow w-full object-contain bg-gray-50"
                  />
                  {images.length > 1 && (
                    <button
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                      onClick={() => setMainImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                      aria-label="Next image"
                    >
                      <FaChevronRight size={24} />
                    </button>
                  )}
                </div>
                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex gap-2 mt-4 justify-center">
                    {images.map((img, idx) => (
                      <button
                        key={img}
                        className={`border rounded-lg p-1 bg-white shadow ${mainImageIdx === idx ? 'border-red-500' : 'border-gray-200'}`}
                        onClick={() => setMainImageIdx(idx)}
                        aria-label={`Show image ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt={product.name + ' thumbnail ' + (idx + 1)}
                          className="w-16 h-16 object-contain rounded"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/2 text-gray-700 whitespace-pre-wrap mb-4 text-base">
              {product.description || "-"}
            </div>
          </div>
        </div>
        <aside className="w-full shrink-0">
          <div className="sticky top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl p-6 mb-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-2 text-center">
              {t('products_page.interested', 'Interested in:')} <span className="text-red-500">{product.name}</span>?
            </h3>
            <p className="mb-4 text-center">{t('products_page.order_info', 'You can place an order by contacting us below:')}</p>
            <a
              href={`https://wa.me/6289528931203?text=${encodeURIComponent(`Halo, saya tertarik dengan produk ${product.name}. Mohon informasinya lebih lanjut. Terima kasih! Detail produk: https://intilogampersada.netlify.app/products/${category}/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-2 text-center"
            >
              <FaWhatsapp /> {t('products_page.button_whatsapp', 'WhatsApp')}
            </a>
            <a
              href="tel:+622112345678"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center"
            >
              <FaEnvelopeOpenText /> {t('products_page.button_email', 'Email')}
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
