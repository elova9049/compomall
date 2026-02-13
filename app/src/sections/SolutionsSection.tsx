import { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { solutions } from '../data/content';

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="solutions"
      className="py-12 md:py-16 bg-murata-light"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`mb-6 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-murata-gray text-sm mb-2">产品信息</p>
          <h2 className="text-2xl md:text-3xl font-bold text-murata-dark mb-4">
            解决方案
          </h2>
          <p className="text-murata-gray max-w-2xl">
            我们为客户的产品计划、开发及实现提供广泛的"启示"和"契机"。
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`mb-10 transition-all duration-600 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#all-solutions"
            className="inline-block bg-murata-red hover:bg-red-700 text-white px-8 py-3 text-sm font-medium transition-colors"
          >
            解决方案一览
          </a>
        </div>

        {/* Solution cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <a
              key={solution.id}
              href={solution.url}
              className={`group block relative overflow-hidden transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-lg font-bold mb-2">
                  {solution.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {solution.description}
                </p>
                <span className="inline-flex items-center text-white text-sm group-hover:translate-x-1 transition-transform">
                  阅读详细内容
                  <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
