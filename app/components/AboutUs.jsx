"use client"
import React from 'react';
import { FiGlobe, FiUsers, FiTarget, FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Company Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-ember/12 text-ember mr-4">
                <FiGlobe className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-arena">Tentang Sribu.com</h2>
            </div>
            
            <p className="text-lg text-sepia mb-6">
              Sribu.com adalah platform terkemuka yang menghubungkan klien yang membutuhkan jasa desain dengan komunitas desainer berbakat dari seluruh dunia.
            </p>
            
            <div className="space-y-4">
              <div className="flex">
                <FiAward className="flex-shrink-0 mt-1 mr-3 text-ember" />
                <p className="text-sepia">
                  Kami menawarkan 20+ kategori desain profesional termasuk logo, website, mascot, poster, kemasan produk, dan berbagai kebutuhan desain kreatif lainnya.
                </p>
              </div>
              <div className="flex">
                <FiUsers className="flex-shrink-0 mt-1 mr-3 text-ember" />
                <p className="text-sepia">
                  Dengan konsep kontes yang unik, klien mendapatkan beragam pilihan desain dari berbagai desainer, memastikan hasil terbaik untuk kebutuhan bisnis mereka.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Target Market */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-cream rounded-xl p-8 shadow-sm border border-arena/12"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-ember/12 text-ember mr-4">
                <FiTarget className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-arena">Target Pasar Kami</h3>
            </div>
            
            <div className="space-y-5">
              <div>
                <h4 className="font-semibold text-arena mb-2">Perusahaan Kecil & Menengah</h4>
                <p className="text-sepia">
                  UMKM dengan total karyawan kurang dari 20 orang yang membutuhkan solusi desain profesional dengan anggaran efisien.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-arena mb-2">Pengusaha & Entrepreneur</h4>
                <p className="text-sepia">
                  Individu kreatif berusia 24-58 tahun yang membangun brand dan membutuhkan identitas visual yang kuat.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-arena mb-2">Startup Digital</h4>
                <p className="text-sepia">
                  Perusahaan rintisan yang membutuhkan desain cepat dan berkualitas untuk produk digital mereka.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 rounded-xl border border-ember/25 bg-ember/8 p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold text-center text-arena mb-6">Mengapa Memilih Sribu.com?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-ember/12 text-ember mb-4">
                <FiUsers className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-arena mb-2">5000+ Desainer Berbakat</h4>
              <p className="text-sepia">Komunitas kreatif terbesar dengan berbagai gaya desain</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-ember/12 text-ember mb-4">
                <FiAward className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-arena mb-2">20+ Kategori Desain</h4>
              <p className="text-sepia">Semua kebutuhan desain bisnis dalam satu platform</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-ember/12 text-ember mb-4">
                <FiTarget className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-arena mb-2">Solusi Terjangkau</h4>
              <p className="text-sepia">Kualitas agency dengan harga freelancer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;