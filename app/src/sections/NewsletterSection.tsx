import { useEffect, useRef, useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterSection() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-12 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`border-2 border-murata-red p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center text-murata-red mr-4">
              <Mail className="w-8 h-8" />
            </div>
            <span className="text-lg md:text-xl text-murata-dark font-medium">
              订阅产品信息及活动新闻
            </span>
          </div>
          
          <a
            href="#newsletter"
            className="bg-murata-red hover:bg-red-700 text-white px-8 py-3 text-sm font-medium transition-colors whitespace-nowrap"
          >
            免费注册电子杂志
          </a>
        </div>
      </div>
    </section>
  );
}
