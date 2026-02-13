import { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { productCategories } from '../data/content';

export default function ProductInfoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [category, setCategory] = useState('全部显示');
  const [subCategory, setSubCategory] = useState('全部显示');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="py-12 md:py-16 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`mb-10 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-murata-gray text-sm mb-2">产品信息</p>
          <h2 className="text-2xl md:text-3xl font-bold text-murata-dark">
            电子元器件
          </h2>
        </div>

        {/* Search filter */}
        <div
          className={`bg-murata-dark p-6 md:p-8 mb-10 transition-all duration-600 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-white text-sm mb-4">通过选择类别及子类别可搜索产品型号。</p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col sm:flex-row gap-4">
              {/* Category select */}
              <div className="relative flex-1">
                <div className="flex">
                  <span className="bg-gray-200 text-murata-dark px-4 py-3 text-sm flex items-center">
                    类别
                  </span>
                  <div className="relative flex-1">
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-white border-0 appearance-none cursor-pointer"
                    >
                      <option>全部显示</option>
                      <option>电容器</option>
                      <option>电感器</option>
                      <option>静噪元件</option>
                      <option>电阻器</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-murata-gray pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Sub-category select */}
              <div className="relative flex-1">
                <div className="flex">
                  <span className="bg-gray-200 text-murata-dark px-4 py-3 text-sm flex items-center">
                    子类别
                  </span>
                  <div className="relative flex-1">
                    <select
                      value={subCategory}
                      onChange={(e) => setSubCategory(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-white border-0 appearance-none cursor-pointer"
                    >
                      <option>全部显示</option>
                      <option>多层陶瓷电容器</option>
                      <option>铝电解电容器</option>
                      <option>薄膜电容器</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-murata-gray pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Search button */}
            <button className="bg-murata-red hover:bg-red-700 text-white px-8 py-3 text-sm font-medium transition-colors flex items-center justify-center">
              <Search className="w-4 h-4 mr-2" />
              搜索
            </button>
          </div>
        </div>

        {/* Product categories */}
        <div>
          <h3
            className={`text-lg font-bold text-murata-dark mb-6 transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            产品一览
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCategories.map((item, index) => (
              <a
                key={item.id}
                href={item.url}
                className={`block p-4 border border-gray-200 hover:border-murata-red hover:shadow-md transition-all duration-300 group ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                <span className="text-sm text-murata-dark group-hover:text-murata-red transition-colors leading-relaxed block">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
          
          <div
            className={`mt-6 text-center transition-all duration-600 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#all-products"
              className="text-murata-gray hover:text-murata-red transition-colors text-sm inline-flex items-center"
            >
              产品列表
              <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
