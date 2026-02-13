import { useEffect, useRef, useState } from 'react';
import { Linkedin } from 'lucide-react';

export default function SocialShareSection() {
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
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-8 bg-white border-t border-gray-200"
    >
      <div
        className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-murata-gray text-sm mb-4">共享此页面</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/shareArticle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077B5] hover:opacity-80 transition-opacity"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://service.weibo.com/share/share.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E6162D] hover:opacity-80 transition-opacity"
            aria-label="Share on Weibo"
          >
            {/* Weibo icon */}
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.737 5.439l-.002.004zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.18.573h.014zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.64 4.318-.341 5.132-2.179.8-1.793-.201-3.642-2.161-4.149zm7.563-1.224c-.346-.105-.579-.18-.405-.649.381-1.017.421-1.896-.003-2.521-.801-1.172-2.996-1.109-5.514-.031 0 0-.791.345-.589-.281.39-1.209.332-2.219-.276-2.804-1.381-1.333-5.055.047-8.206 3.086C1.399 10.491 0 12.521 0 14.247c0 3.287 4.217 5.289 8.344 5.289 5.408 0 9.009-3.14 9.009-5.633 0-1.507-1.272-2.361-2.294-2.654zM21.084 3.99c-1.305-1.452-3.227-2.005-5.046-1.548l.014-.02c-.279.071-.448.354-.377.633.071.279.354.448.633.377l-.016.004c1.39-.354 2.898.059 3.918 1.194 1.019 1.135 1.274 2.688.727 4.022l.008-.016c-.104.266.027.566.293.67.266.104.566-.027.67-.293l-.004.008c.695-1.694.357-3.658-.82-5.031zm-1.589 2.123c-.648-.722-1.604-.997-2.508-.768l.012-.02c-.279.071-.448.354-.377.633.071.279.354.448.633.377l-.016.004c.576-.147 1.201.031 1.619.496.419.465.523 1.096.314 1.639l.008-.016c-.104.266.027.566.293.67.266.104.566-.027.67-.293l-.004.008c.336-.895.157-1.934-.644-2.73z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
