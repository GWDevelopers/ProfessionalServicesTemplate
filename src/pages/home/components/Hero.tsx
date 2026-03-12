export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#1e3a5f] to-transparent transform rotate-12"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-[#1e3a5f] text-sm font-semibold tracking-[0.2em] uppercase">
                Professional Services
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-[#2C3E50] leading-tight">
              Professional Services You Can Trust
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Helping individuals and businesses make confident financial and professional decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('consultation')}
                className="bg-[#1e3a5f] text-white px-8 py-4 rounded-lg hover:bg-[#152d4a] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap group"
              >
                Schedule a Consultation
                <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-[#1e3a5f] px-8 py-4 rounded-lg border-2 border-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-all duration-300 font-semibold text-lg whitespace-nowrap"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20professional%20office%20workspace%20with%20clean%20desk%20organized%20documents%20financial%20charts%20and%20laptop%20in%20minimalist%20style%20with%20navy%20blue%20and%20white%20color%20scheme%20bright%20natural%20lighting%20professional%20business%20environment&width=800&height=900&seq=hero-professional-services&orientation=portrait"
                alt="Professional Services"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/20 to-transparent"></div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute bottom-8 right-8 bg-white rounded-xl shadow-xl p-6 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-[#1e3a5f] rounded-full">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1e3a5f]">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}