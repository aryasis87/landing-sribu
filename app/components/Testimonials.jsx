"use client"
import React from 'react';
import { FiExternalLink, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Testimonials = () => {
  // Data testimonial (replace with your actual data)
  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      company: 'PT Maju Jaya',
      rating: 5,
      comment: 'Desain logo yang saya dapatkan sangat profesional. Prosesnya cepat dan desainer sangat mengerti kebutuhan bisnis saya.',
      avatar: '/images/p1.jpg'
    },
    {
      id: 2,
      name: 'Anita Wijaya',
      company: 'Toko Online Ani',
      rating: 5,
      comment: 'Saya puas dengan hasil desain kemasan produknya. Revisi dilakukan dengan cepat dan hasilnya sesuai ekspektasi.',
      avatar: '/images/p2.jpg'
    },
    {
      id: 3,
      name: 'Rudi Hermawan',
      company: 'Startup Teknologi',
      rating: 4,
      comment: 'Platform yang memudahkan saya menemukan desainer berbakat. Hasil website company profile kami sangat memuaskan.',
      avatar: '/images/p3.jpg'
    }
  ];

  // Render star rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FiStar 
        key={i} 
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-sepia'} w-5 h-5`} 
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-arena mb-4">
            Apa Kata Klien Kami?
          </h2>
          <p className="text-lg text-sepia max-w-3xl mx-auto">
            Testimonial jujur dari klien yang telah menggunakan layanan Sribu
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-cream rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-arena">{testimonial.name}</h4>
                  <p className="text-sm text-sepia">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-sepia mb-4">"{testimonial.comment}"</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://www.sribu.com/id/testimonial" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-cream bg-ember hover:bg-ember transition-colors"
          >
            Lihat Lebih Banyak Testimonial
            <FiExternalLink className="ml-2" />
          </a>
          <p className="mt-4 text-sm text-sepia">
            Anda bisa melihat testimonial kami di halaman ini
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;