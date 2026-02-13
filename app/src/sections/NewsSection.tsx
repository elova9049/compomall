import { useEffect, useRef, useState } from 'react';
import { newsItems } from '../data/content';

export default function NewsSection() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-2xl md:text-3xl font-bold text-murata-dark mb-8 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          产品及活动新闻
        </h2>

        <div className="space-y-0">
          {newsItems.map((item, index) => (
            <a
              key={item.id}
              href={item.url}
              className={`block py-5 border-b border-gray-200 group transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <span className="text-sm text-murata-gray flex-shrink-0 w-24">
                  {item.date}
                </span>
                <span className="text-murata-dark group-hover:text-murata-red transition-colors leading-relaxed">
                  {item.title}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div
          className={`mt-8 transition-all duration-600 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#news-list"
            className="text-murata-gray hover:text-murata-red transition-colors text-sm inline-flex items-center"
          >
            产品・活动新闻列表
            <span className="ml-1">→</span>
          </a>
          <span className="mx-4 text-gray-300">|</span>
          <a
            href="#press"
            className="text-murata-gray hover:text-murata-red transition-colors text-sm inline-flex items-center"
          >
            查看公司新闻稿
            <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
