const testimonials = [
  {
    text: 'Working with this firm has been a game-changer for our business. Their expertise in tax planning saved us thousands of dollars, and their strategic advice helped us navigate complex financial decisions with confidence. Highly professional and always responsive.',
    name: 'Sarah Mitchell',
    title: 'CEO, Mitchell Enterprises',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20confident%20smile%20corporate%20headshot%20navy%20blue%20business%20attire%20white%20background%20high%20quality%20portrait&width=200&height=200&seq=testimonial-avatar-1&orientation=squarish',
    rating: 5,
  },
  {
    text: 'I have been a client for over 10 years and cannot recommend them enough. Their attention to detail, personalized service, and deep knowledge of financial planning have given me peace of mind. They truly care about their clients\' success and well-being.',
    name: 'Michael Chen',
    title: 'Small Business Owner',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20man%20confident%20expression%20corporate%20headshot%20formal%20attire%20white%20background%20high%20quality%20portrait&width=200&height=200&seq=testimonial-avatar-2&orientation=squarish',
    rating: 5,
  },
  {
    text: 'Exceptional service from start to finish. They took the time to understand my unique situation and provided tailored solutions that exceeded my expectations. Their professionalism, integrity, and expertise make them stand out in the industry.',
    name: 'Jennifer Rodriguez',
    title: 'Financial Director',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20friendly%20smile%20corporate%20headshot%20business%20attire%20white%20background%20high%20quality%20portrait&width=200&height=200&seq=testimonial-avatar-3&orientation=squarish',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-[#1e3a5f] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#2a4d7a] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#2a4d7a] rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-white/80 text-sm font-semibold tracking-[0.2em] uppercase">
            Client Testimonials
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mt-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 hover:bg-white/15 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <i className="ri-double-quotes-l text-5xl text-white/40"></i>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-lg leading-relaxed mb-8">
                {testimonial.text}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white shadow-lg flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-white/70">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}