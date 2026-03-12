const services = [
  {
    icon: 'ri-file-text-line',
    title: 'Tax Preparation',
    description: 'Comprehensive tax planning and preparation services for individuals and businesses, ensuring compliance and maximizing returns.',
  },
  {
    icon: 'ri-line-chart-line',
    title: 'Financial Consulting',
    description: 'Strategic financial guidance to help you make informed decisions and achieve your long-term financial goals.',
  },
  {
    icon: 'ri-briefcase-line',
    title: 'Business Advising',
    description: 'Expert business consulting services to optimize operations, improve profitability, and drive sustainable growth.',
  },
  {
    icon: 'ri-shield-line',
    title: 'Insurance Planning',
    description: 'Tailored insurance solutions to protect your assets, family, and business from unexpected risks and liabilities.',
  },
  {
    icon: 'ri-scales-line',
    title: 'Legal Services',
    description: 'Professional legal counsel for business matters, contracts, compliance, and regulatory requirements.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <i className="ri-service-line text-[#1e3a5f] text-xl"></i>
            <span className="text-[#1e3a5f] text-sm font-semibold tracking-[0.2em] uppercase">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#2C3E50] mb-6">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-[#1e3a5f] mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 hover:border-[#1e3a5f]/30 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-[#1e3a5f] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${service.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-[#1e3a5f] font-semibold group-hover:gap-3 transition-all duration-300">
                <span>Learn More</span>
                <i className="ri-arrow-right-line text-xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}