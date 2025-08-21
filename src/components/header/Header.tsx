import React, { useState } from 'react';
import { ChevronDown, Menu, X, Zap } from '../../components/icons';

interface Language {
  code: string;
  name: string;
  flag: string;
  url: string;
}

interface MenuItem {
  name: string;
  url: string;
  isActive?: boolean;
}

interface SubMenuItem {
  name: string;
  url: string;
  icon: string;
}

const Header: React.FC = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Reduced languages for mobile (top 6 only)
  const languages: Language[] = [
    { code: 'th', name: 'ไทย', flag: '🇹🇭', url: '/' },
    { code: 'en', name: 'EN', flag: '🇺🇸', url: '/en' },
    { code: 'id', name: 'ID', flag: '🇮🇩', url: 'https://ufabet.id' },
    { code: 'vn', name: 'VN', flag: '🇻🇳', url: '/vn' },
    { code: 'cn', name: 'CN', flag: '🇨🇳', url: '/cn' },
    { code: 'es', name: 'ES', flag: '🇪🇸', url: '/es' }
  ];

  const mainMenuItems: MenuItem[] = [
    { name: 'แทงกีฬา', url: '/', isActive: true },
    { name: 'ผลบอล', url: '/livescore/' },
    { name: 'คาสิโนสด', url: '/online-casino/' },
    { name: 'สล็อต', url: '#' }
  ];

  // Reduced sports for mobile (top 8 only)
  const subMenuItems: SubMenuItem[] = [
    { name: 'ฟุตบอล', url: '/football/', icon: '⚽' },
    { name: 'บาสเก็ต', url: '/basketball/', icon: '🏀' },
    { name: 'เทนนิส', url: '/tennis/', icon: '🎾' },
    { name: 'มวย', url: '/boxing/', icon: '🥊' },
    { name: 'เบสบอล', url: '/baseball/', icon: '⚾' },
    { name: 'วอลเลย์', url: '/volleyball/', icon: '🏐' },
    { name: 'MMA', url: '/mma/', icon: '🥋' },
    { name: 'อื่นๆ', url: '/more-sports/', icon: '🏆' }
  ];

  const currentLanguage = languages[0];

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageSelect = (language: Language) => {
    setIsLanguageDropdownOpen(false);
    if (language.url.startsWith('http')) {
      window.open(language.url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <>
      <header className="bg-blue-900 sticky top-0 z-50">
        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-blue-900" />
              </div>
              <span className="text-lg font-bold text-white">UFABET</span>
            </a>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-2">
              {/* Language */}
              <div className="relative">
                <button
                  onClick={toggleLanguageDropdown}
                  className="flex items-center space-x-1 px-2 py-1 rounded bg-white/10 text-white"
                >
                  <span className="text-sm">{currentLanguage.flag}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLanguageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 w-24 bg-white rounded shadow-lg py-1 z-50">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageSelect(language)}
                        className="w-full flex items-center space-x-2 px-2 py-1 hover:bg-gray-50 text-xs"
                      >
                        <span>{language.flag}</span>
                        <span className="text-gray-700">{language.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Login */}
              <button className="px-3 py-1 bg-yellow-400 text-blue-900 text-sm font-semibold rounded">
                เข้าสู่ระบบ
              </button>

              {/* Hamburger */}
              <button
                onClick={toggleMobileMenu}
                className="p-1 text-white"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="bg-blue-800 border-t border-blue-700">
              {/* Main Menu */}
              <div className="px-4 py-2">
                {mainMenuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className={`block py-2 text-sm ${item.isActive ? 'text-yellow-400 font-semibold' : 'text-white'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Sports Menu - Compact Grid */}
              <div className="border-t border-blue-700 px-4 py-2">
                <div className="grid grid-cols-4 gap-2">
                  {subMenuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      className="flex flex-col items-center py-2 text-white hover:text-yellow-400 text-xs"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-sm mb-1">{item.icon}</span>
                      <span className="text-center leading-tight">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Header (unchanged but optimized) */}
        <div className="hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <a href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-900" />
                </div>
                <span className="text-2xl font-bold text-white">UFABET</span>
              </a>

              {/* Desktop Controls */}
              <div className="flex items-center space-x-4">
                {/* Language Dropdown */}
                <div className="relative">
                  <button
                    onClick={toggleLanguageDropdown}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
                  >
                    <span>{currentLanguage.flag}</span>
                    <span className="text-sm font-medium">TH</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isLanguageDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 max-h-64 overflow-y-auto">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageSelect(language)}
                          className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 text-left"
                        >
                          <span>{language.flag}</span>
                          <span className="text-sm text-gray-700">{language.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold rounded-lg transition-all shadow-lg">
                  เข้าสู่ระบบ
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="border-t border-white/20">
              <div className="flex items-center space-x-8 py-4">
                {mainMenuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className={`px-4 py-2 rounded-lg transition-colors ${item.isActive
                      ? 'bg-yellow-400 text-blue-900 font-semibold'
                      : 'text-white hover:bg-white/10'
                      }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="border-t border-white/10 py-4">
                <div className="grid grid-cols-7 gap-4">
                  {subMenuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-white hover:bg-white/10 transition-colors"
                    >
                      <span>{item.icon}</span>
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {(isLanguageDropdownOpen || isMobileMenuOpen) && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => {
            setIsLanguageDropdownOpen(false);
            setIsMobileMenuOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Header;