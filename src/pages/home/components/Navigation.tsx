import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="https://public.readdy.ai/ai/img_res/69a8b931-4903-4197-988f-d81d2ce51daf.png" 
              alt="Professional Services Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#2C3E50] hover:text-[#1e3a5f] transition-colors duration-300 font-medium whitespace-nowrap"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#2C3E50] hover:text-[#1e3a5f] transition-colors duration-300 font-medium whitespace-nowrap"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('credentials')}
              className="text-[#2C3E50] hover:text-[#1e3a5f] transition-colors duration-300 font-medium whitespace-nowrap"
            >
              Credentials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#2C3E50] hover:text-[#1e3a5f] transition-colors duration-300 font-medium whitespace-nowrap"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('consultation')}
            className="hidden lg:block bg-[#1e3a5f] text-white px-6 py-3 rounded-lg hover:bg-[#152d4a] transition-all duration-300 font-medium whitespace-nowrap shadow-sm hover:shadow-md"
          >
            Schedule Consultation
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#2C3E50]"
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-[#2C3E50] hover:text-[#1e3a5f] transition-colors duration-300 font-medium text-left whitespace-nowrap"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#2C3E50] hover:text-[#1e3a5f] transition-colors duration-300 font-medium text-left whitespace-nowrap"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('credentials')}
                className="text-[#2C3E50] hover:text-[#1e3a5f] transition-colors duration-300 font-medium text-left whitespace-nowrap"
              >
                Credentials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#2C3E50] hover:text-[#1e3a5f] transition-colors duration-300 font-medium text-left whitespace-nowrap"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('consultation')}
                className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg hover:bg-[#152d4a] transition-all duration-300 font-medium text-center whitespace-nowrap"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}