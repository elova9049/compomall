import { useEffect, useRef, useState } from 'react';
import { ChevronRight, User } from 'lucide-react';

export default function SupportSection() {
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
      className="py-12 md:py-16 bg-murata-light"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Support card */}
          <div
            className={`flex flex-col md:flex-row gap-6 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex-1">
              <a
                href="#support"
                className="group inline-flex items-center text-xl font-bold text-murata-dark hover:text-murata-red transition-colors mb-4"
              >
                <ChevronRight className="w-5 h-5 text-murata-red mr-1" />
                支持
              </a>
              <p className="text-murata-gray text-sm leading-relaxed">
                为您提供产品介绍视频、产品目录、资料等实用工具
              </p>
            </div>
            <div className="w-full md:w-48 h-32 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=200&h=150&fit=crop"
                alt="Support"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* My Murata card */}
          <div
            className={`flex flex-col md:flex-row gap-6 transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex-1">
              <a
                href="#my-murata"
                className="group inline-flex items-center text-xl font-bold text-murata-dark hover:text-murata-red transition-colors mb-4"
              >
                <ChevronRight className="w-5 h-5 text-murata-red mr-1" />
                my Murata
              </a>
              <p className="text-murata-gray text-sm leading-relaxed">
                会员制的门户网站。本网站提供电子元件网站和解决方案网站无法提供的别具一格的内容和服务。
              </p>
            </div>
            <div className="w-full md:w-48 h-32 flex-shrink-0 relative">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=150&fit=crop"
                alt="My Murata"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 px-4 py-2 rounded flex items-center">
                  <User className="w-4 h-4 text-murata-gray mr-2" />
                  <span className="text-sm text-murata-dark">Login</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div
          className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-600 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <h4 className="font-bold text-murata-dark mb-2">SimSurfing</h4>
            <p className="text-murata-gray text-sm">
              设计辅助软件，易于选择电子元件
            </p>
          </div>
          <div>
            <h4 className="font-bold text-murata-dark mb-2">电子杂志</h4>
            <p className="text-murata-gray text-sm mb-3">
              不仅介绍产品和多种活动、促销活动的相关信息，而且还介绍零件的使用方法、应用程序和技术信息服务等内容广泛。
            </p>
            <a
              href="#register"
              className="inline-block bg-murata-red hover:bg-red-700 text-white px-6 py-2 text-sm font-medium transition-colors"
            >
              免费注册
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
