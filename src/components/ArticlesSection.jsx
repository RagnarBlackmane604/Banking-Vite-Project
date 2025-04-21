import React from 'react';

const ArticlesSection = () => {
  const articles = [
    {
      img: '/assets/image-currency.jpg',
      author: 'Claire Robinson',
      title: 'Receive money in any currency with no fees',
      desc: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...',
    },
    {
      img: '/assets/image-restaurant.jpg',
      author: 'Wilson Hutton',
      title: 'Treat yourself without worrying about money',
      desc: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.',
    },
    {
      img: '/assets/image-plane.jpg',
      author: 'Wilson Hutton',
      title: 'Take your Easybank card wherever you go',
      desc: 'We want you to enjoy your travels. That’s why we don’t charge fees on purchases while you’re abroad.',
    },
    {
      img: '/assets/image-confetti.jpg',
      author: 'Claire Robinson',
      title: 'Our invite-only Beta accounts are now live!',
      desc: 'After lots of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite.',
    },
  ];

  return (
    <section id="section3" className="px-6 py-12 bg-gray-100">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {articles.map((article, i) => (
          <div key={i} className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img src={article.img} alt={article.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-2">By {article.author}</p>
              <h3 className="text-md font-semibold mb-2 hover:text-lime-600 cursor-pointer">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
