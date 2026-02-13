import { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function CorporateSection() {
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
      id="about"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop)`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className={`text-white/80 text-sm mb-4 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Innovator in Electronics
        </p>
        
        <h2
          className={`text-2xl md:text-4xl font-bold text-white mb-8 transition-all duration-600 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          希望成为指引电子产业的先驱者
        </h2>
        
        <a
          href="#corporate"
          className={`inline-flex items-center bg-murata-red hover:bg-red-700 text-white px-8 py-4 text-sm font-medium transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          公司信息、可持续发展、新闻编辑室、请访问企业网站
          <ChevronRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
}
