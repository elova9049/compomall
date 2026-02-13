import { useEffect, useRef, useState } from 'react';
import { ChevronRight, Calendar, Video } from 'lucide-react';

export default function EventsSection() {
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
      id="events"
      className="py-12 md:py-16 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Events card */}
          <a
            href="#events-list"
            className={`group block p-6 border border-gray-200 hover:border-murata-red hover:shadow-lg transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-murata-red mr-3" />
              <h3 className="text-xl font-bold text-murata-red group-hover:text-murata-red transition-colors flex items-center">
                展会信息
                <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </h3>
            </div>
            <p className="text-murata-gray text-sm">
              展会信息一览表。
            </p>
          </a>

          {/* Webinars card */}
          <a
            href="#webinars"
            className={`group block p-6 border border-gray-200 hover:border-murata-red hover:shadow-lg transition-all duration-300 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center mb-4">
              <Video className="w-6 h-6 text-murata-red mr-3" />
              <h3 className="text-xl font-bold text-murata-red group-hover:text-murata-red transition-colors flex items-center">
                在线研讨会
                <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </h3>
            </div>
            <p className="text-murata-gray text-sm">
              在线研讨会一览表。
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
