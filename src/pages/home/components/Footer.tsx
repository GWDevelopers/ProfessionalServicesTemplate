export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#2C3E50] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="https://public.readdy.ai/ai/img_res/69a8b931-4903-4197-988f-d81d2ce51daf.png" 
              alt="Professional Services Logo" 
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Trusted professional services for individuals and businesses since 1998.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#1e3a5f] transition-all duration-300"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#1e3a5f] transition-all duration-300"
              >
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#1e3a5f] transition-all duration-300"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#1e3a5f] transition-all duration-300"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                >
                  Tax Preparation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                >
                  Financial Consulting
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                >
                  Business Advising
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                >
                  Insurance Planning
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                >
                  Legal Services
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-[#1e3a5f] text-xl flex-shrink-0 mt-1"></i>
                <span className="text-gray-300">
                  123 Professional Plaza<br />
                  Suite 400<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-[#1e3a5f] text-xl flex-shrink-0"></i>
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-[#1e3a5f] text-xl flex-shrink-0"></i>
                <a href="mailto:info@professionalservices.com" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">
                  info@professionalservices.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6">Business Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-300">
                <span>Monday - Friday</span>
                <span className="font-semibold text-white whitespace-nowrap">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Saturday</span>
                <span className="font-semibold text-white whitespace-nowrap">10:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Sunday</span>
                <span className="font-semibold text-white whitespace-nowrap">Closed</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-sm text-gray-300">
                <i className="ri-information-line text-[#1e3a5f] mr-2"></i>
                Evening appointments available by request
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Professional Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
                Terms of Service
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}