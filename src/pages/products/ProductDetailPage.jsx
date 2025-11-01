import ProductCard from "../../components/ProductCard";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { productCategories } from "../../data/productsData";
import {
  FaArrowLeft,
  FaWhatsapp,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

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
  const images =
    product.images && product.images.length > 0 ? product.images : [];
  const mainImage = images[mainImageIdx] || "";

  return (
    <div className="container mx-auto px-4 md:px-8 py-6 md:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="col-span-1 lg:col-span-2">
          <div className="mb-4 flex flex-col md:flex-row md:gap-6 gap-2 items-start md:items-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-red-600 text-red-600 font-semibold rounded px-3 py-2 md:px-4 md:py-2 hover:bg-red-50 transition text-base md:text-lg"
            >
              <FaArrowLeft />
              {t("products_page.back")}
            </Link>
            <nav className="text-xs md:text-sm text-gray-500 mt-2 md:mt-0" aria-label="Breadcrumb">
              <ol className="list-none flex flex-wrap gap-1 items-center">
                <li>
                  <Link
                    to="/products"
                    className="hover:underline text-red-600 font-semibold"
                  >
                    {t("navbar.products")}
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Content */}
            <div className="mb-6 flex flex-col items-center">
              <div className="flex w-full justify-center items-center gap-2 md:gap-4">
                {/* Main image */}
                <div className="relative flex-1 flex justify-center items-center">
                  {images.length > 1 && (
                    <button
                      className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                      onClick={() => setMainImageIdx((prev) => prev === 0 ? images.length - 1 : prev - 1)}
                      aria-label="Previous image"
                    >
                      <FaChevronLeft size={24} />
                    </button>
                  )}
                  <img
                    src={mainImage}
                    alt={product.name}
                    className="rounded-lg shadow w-full object-contain bg-gray-50"
                    style={{ maxHeight: '500px' }}
                  />
                  {images.length > 1 && (
                    <button
                      className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                      onClick={() => setMainImageIdx((prev) => prev === images.length - 1 ? 0 : prev + 1)}
                      aria-label="Next image"
                    >
                      <FaChevronRight size={24} />
                    </button>
                  )}
                </div>
                {/* Thumbnails vertical, align items-start, hide overflow if too tall, auto-scroll to active */}
                {images.length > 1 && (
                  <div
                    className="flex flex-col gap-2 items-start overflow-y-hidden"
                    style={{ maxHeight: '500px', position: 'relative' }}
                    ref={el => {
                      // Auto scroll thumbnail to active
                      if (el && images.length > 5) {
                        const activeBtn = el.querySelector('.thumbnail-active');
                        if (activeBtn) {
                          const btnTop = activeBtn.offsetTop;
                          const btnHeight = activeBtn.offsetHeight;
                          const containerHeight = el.offsetHeight;
                          // Scroll so active is always visible in center
                          el.scrollTop = btnTop - containerHeight / 2 + btnHeight / 2;
                        }
                      }
                    }}
                  >
                    {images.map((img, idx) => (
                      <button
                        key={img}
                        className={`border rounded-lg p-1 bg-white shadow ${mainImageIdx === idx ? "border-red-500 thumbnail-active" : "border-gray-200"}`}
                        onClick={() => setMainImageIdx(idx)}
                        aria-label={`Show image ${idx + 1}`}
                        style={{ minWidth: '56px' }}
                      >
                        <img
                          src={img}
                          alt={product.name + " thumbnail " + (idx + 1)}
                          className="w-14 h-14 md:w-16 md:h-16 object-contain rounded"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="ml-0 lg:ml-8">
              <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">
                {product.name}
              </h1>
              <div className="text-base md:text-lg w-full text-gray-700 whitespace-pre-wrap mb-6 md:mb-8">
                {product.description}
                <div className="mt-3 md:mt-4">
                  <span className="font-semibold">Material :</span>
                  <ul className="list-disc list-inside mt-2">
                    {Array.isArray(product.material) && product.material.length > 0 ? (
                      product.material.map((mat, idx) => (
                        <li key={idx} className="flex gap-2 items-center">
                          <div className="font-semibold min-w-[100px] md:min-w-[120px] text-left">{mat.label}</div>
                          <span className="mx-2">:</span>
                          <div>{mat.value}</div>
                        </li>
                      ))
                    ) : (
                      <li>-</li>
                    )}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">
                  {t("products_page.interested", "Interested in:")}{" "}
                  <span className="text-red-500">{product.name}</span>?
                </h3>
                <a
                  href={`https://wa.me/6289528931203?text=${encodeURIComponent(
                    `Halo, saya tertarik dengan produk ${product.name}. Mohon informasinya lebih lanjut. Terima kasih! Detail produk: https://intilogampersada.netlify.app/products/${category}/${slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-green-500 hover:bg-green-100 text-green-500 font-bold py-2 px-4 rounded mb-2 text-center"
                >
                  <FaWhatsapp />{" "}
                  {t("products_page.button_whatsapp", "WhatsApp")}
                </a>
                <a
                  href="tel:+622112345678"
                  className="flex items-center justify-center gap-2 border border-blue-500 hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded text-center"
                >
                  <FaEnvelopeOpenText />{" "}
                  {t("products_page.button_email", "Email")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
