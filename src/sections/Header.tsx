import { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, Globe } from 'lucide-react';
import { navItems, utilityLinks } from '../data/content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white'
      }`}
    >
      {/* Top utility bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-9 text-xs">
            {utilityLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-murata-gray hover:text-murata-red transition-colors ml-6 flex items-center"
              >
                {link.label === 'my Murata' && (
                  <span className="mr-1">👤</span>
                )}
                {link.label}
              </a>
            ))}
            <button className="ml-6 flex items-center text-murata-gray hover:text-murata-red transition-colors">
              <Globe className="w-3 h-3 mr-1" />
              中文
              <ChevronDown className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="text-2xl font-bold text-murata-red tracking-tight">
              mu<span className="italic">R</span>ata
            </div>
            <span className="ml-2 text-xs text-murata-gray hidden sm:block">
              INNOVATOR IN ELECTRONICS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="px-4 py-2 text-sm text-murata-dark hover:text-murata-red transition-colors flex items-center group"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                  )}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-murata-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
                
                {/* Dropdown menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 py-2 min-w-48 z-50">
                    <a href="#" className="block px-4 py-2 text-sm text-murata-dark hover:bg-gray-50 hover:text-murata-red">
                      子菜单项 1
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-murata-dark hover:bg-gray-50 hover:text-murata-red">
                      子菜单项 2
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-murata-dark hover:bg-gray-50 hover:text-murata-red">
                      子菜单项 3
                    </a>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="产品/关键字搜索"
                className="w-48 xl:w-64 pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-murata-red focus:ring-1 focus:ring-murata-red"
              />
              <button className="absolute right-0 top-0 h-full px-3 text-murata-gray hover:text-murata-red">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-murata-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4">
            {/* Mobile search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="产品/关键字搜索"
                className="w-full pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-sm"
              />
              <button className="absolute right-0 top-0 h-full px-3 text-murata-gray">
                <Search className="w-4 h-4" />
              </button>
            </div>
            
            {/* Mobile nav items */}
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-3 text-murata-dark hover:text-murata-red border-b border-gray-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
