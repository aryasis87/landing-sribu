"use client"
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PortfolioShowcase = () => {
  // Sample portfolio items (replace with your actual data)
  const portfolioItems = [
    {
      id: 1,
      title: 'Logo Perusahaan Modern',
      category: 'Logo Design',
      imageUrl: '/images/p1.jpg',
      link: 'https://www.sribu.com/id/portfolio/logo-design'
    },
    {
      id: 2,
      title: 'Website E-Commerce',
      category: 'Web Design',
      imageUrl: '/images/p2.jpg',
      link: 'https://www.sribu.com/id/portfolio/web-design'
    },
    {
      id: 3,
      title: 'Kemasan Produk',
      category: 'Packaging',
      imageUrl: '/images/p3.jpg',
      link: 'https://www.sribu.com/id/portfolio/packaging'
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'Digital Marketing',
      imageUrl: '/images/p4.jpg',
      link: 'https://www.sribu.com/id/portfolio/digital-marketing'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-arena mb-4">
            Anda akan mendapatkan desain seperti ini saat bekerja dengan desainer berbakat secara online
          </h2>
          <p className="text-lg text-sepia max-w-3xl mx-auto">
            Lihat bukti kualitas dari ribuan desain profesional yang telah kami hasilkan untuk klien ternama
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-cream rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 text-xs font-medium text-ember bg-ember/12 rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="font-semibold text-arena mb-2">{item.title}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-ember hover:text-ember"
                >
                  Lihat detail <FiExternalLink className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://www.sribu.com/id/portfolio-contest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-cream bg-ember hover:bg-ember transition-colors"
          >
            Lihat Portfolio Lengkap di Sribu
            <FiExternalLink className="ml-2" />
          </a>
          <p className="mt-4 text-sm text-sepia">
            * Klik untuk melihat ratusan contoh desain profesional
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;