import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      img: '/assets/icon-online.svg',
      title: 'Online Banking',
      desc: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are.',
    },
    {
      img: '/assets/icon-budgeting.svg',
      title: 'Simple Budgeting',
      desc: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    },
    {
      img: '/assets/icon-onboarding.svg',
      title: 'Fast Onboarding',
      desc: 'Open your account in minutes online and start taking control of your finances right away.',
    },
    {
      img: '/assets/icon-api.svg',
      title: 'Open API',
      desc: 'Manage your savings, investments, pension, and much more from one account.',
    },
  ];

  return (
    <section className="px-6 py-12 text-center md:text-left bg-gray-50">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Why choose Easybank?</h2>
      <p className="text-gray-600 max-w-xl mx-auto md:mx-0">
        We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
        {features.map((item, idx) => (
          <div key={idx} className="text-center md:text-left">
            <img src={item.img} alt={item.title} className="mx-auto md:mx-0 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
