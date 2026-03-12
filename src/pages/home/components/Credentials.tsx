const credentials = [
  {
    icon: 'ri-medal-line',
    title: 'Certified Public Accountant',
    year: '1998',
    description: 'Licensed CPA with extensive experience in tax and accounting',
  },
  {
    icon: 'ri-award-line',
    title: 'Certified Financial Planner',
    year: '2002',
    description: 'CFP certification for comprehensive financial planning',
  },
  {
    icon: 'ri-graduation-cap-line',
    title: 'MBA in Finance',
    year: '1995',
    description: 'Advanced degree from accredited business school',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Licensed Insurance Agent',
    year: '2005',
    description: 'Authorized to provide insurance planning services',
  },
];

const memberships = [
  { name: 'American Institute of CPAs', icon: 'ri-building-line' },
  { name: 'Financial Planning Association', icon: 'ri-organization-chart' },
  { name: 'National Association of Tax Professionals', icon: 'ri-community-line' },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1e3a5f] to-transparent transform -rotate-12"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#1e3a5f] text-sm font-semibold tracking-[0.2em] uppercase">
            Credentials & Certifications
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#2C3E50] mt-4">
            Trusted Expertise
          </h2>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="bg-[#FAFBFC] rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#1e3a5f] rounded-full mx-auto mb-6">
                <i className={`${credential.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                {credential.title}
              </h3>
              <div className="text-[#1e3a5f] font-semibold mb-3">
                {credential.year}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {credential.description}
              </p>
            </div>
          ))}
        </div>

        {/* Professional Memberships */}
        <div className="bg-[#F8F9FA] rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-[#2C3E50] text-center mb-8">
            Professional Memberships
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mb-4 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <i className={`${membership.icon} text-[#1e3a5f] text-3xl`}></i>
                </div>
                <p className="text-gray-700 font-medium group-hover:text-[#1e3a5f] transition-colors">
                  {membership.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}