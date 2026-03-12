export default function About() {
  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '500+', label: 'Clients Served' },
    { number: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Image Column */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border-4 border-[#1e3a5f] shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20business%20person%20in%20formal%20attire%20confident%20pose%20modern%20office%20setting%20navy%20blue%20suit%20white%20background%20corporate%20headshot%20portrait%20style%20professional%20photography%20high%20quality&width=600&height=750&seq=about-professional-headshot&orientation=portrait"
                  alt="Professional Headshot"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border-2 border-[#1e3a5f]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1e3a5f]">25+</div>
                  <div className="text-sm text-gray-600 font-medium">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="text-[#1e3a5f] text-sm font-semibold tracking-[0.2em] uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] leading-tight">
              Experience You Can Rely On
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                With over 25 years of experience serving individuals and businesses, we have built a reputation for delivering exceptional professional services with integrity and expertise. Our commitment to excellence has made us a trusted partner for clients seeking reliable financial and business guidance.
              </p>
              <p>
                We understand that every client has unique needs and goals. That's why we take a personalized approach to every engagement, combining deep industry knowledge with innovative solutions to help you achieve success. Our team stays current with the latest regulations, best practices, and industry trends to provide you with the most relevant and effective advice.
              </p>
              <p>
                Whether you're an individual seeking tax preparation services, a business owner looking for strategic consulting, or someone planning for the future, we're here to provide the professional support you need. Our client-first philosophy ensures that your interests always come first.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}