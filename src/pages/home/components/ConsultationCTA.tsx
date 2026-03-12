import { useState, FormEvent } from 'react';

export default function ConsultationCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d6pf9rdsbgrc47filmhg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="consultation" className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="bg-[#1e3a5f]/5 rounded-3xl p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-[#1e3a5f] text-sm font-semibold tracking-[0.2em] uppercase">
                Get Started
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] leading-tight">
                Schedule Your Consultation Today
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Take the first step towards achieving your financial and professional goals. Our consultation process is designed to understand your unique needs and provide tailored solutions.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#1e3a5f] rounded-full flex-shrink-0">
                    <i className="ri-check-line text-white text-xl"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Free Initial Consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#1e3a5f] rounded-full flex-shrink-0">
                    <i className="ri-check-line text-white text-xl"></i>
                  </div>
                  <span className="text-gray-700 font-medium">No Obligation Required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#1e3a5f] rounded-full flex-shrink-0">
                    <i className="ri-check-line text-white text-xl"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Quick Response Within 24 Hours</span>
                </div>
              </div>

              {/* Phone Number */}
              <div className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#1e3a5f] rounded-full flex-shrink-0">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Call us directly</div>
                    <a href="tel:+15551234567" className="text-2xl lg:text-3xl font-bold text-[#1e3a5f] hover:text-[#152d4a] transition-colors whitespace-nowrap">
                      (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="consultation-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#2C3E50] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 transition-all text-sm"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#2C3E50] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#2C3E50] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 transition-all text-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[#2C3E50] mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 transition-all text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="tax-preparation">Tax Preparation</option>
                    <option value="financial-consulting">Financial Consulting</option>
                    <option value="business-advising">Business Advising</option>
                    <option value="insurance-planning">Insurance Planning</option>
                    <option value="legal-services">Legal Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#2C3E50] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 transition-all resize-none text-sm"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                  <div className="text-xs text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1e3a5f] text-white py-4 rounded-lg hover:bg-[#152d4a] transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                  {!isSubmitting && <i className="ri-arrow-right-line text-xl"></i>}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                    Thank you! We'll contact you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}