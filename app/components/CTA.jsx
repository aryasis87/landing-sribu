"use client"
import React, { useState } from 'react';
import { FiSend, FiLock } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-ember to-ember">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-arena mb-4">
            Dapatkan Panduan Gratis
          </h2>
          <p className="text-lg text-sepia mb-8 max-w-2xl mx-auto">
            Masukkan alamat email Anda dan kami akan mengirimkan panduan lengkap tentang cara bekerja dengan desainer berbakat secara online.
          </p>

          {!isSubmitted ? (
            <motion.form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto sm:max-w-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Alamat email Anda"
                  className="w-full px-5 py-3 rounded-lg border-2 border-arena/12 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-ember hover:bg-ember text-cream font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <FiSend />
                Kirim Panduan
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-cream p-6 rounded-lg shadow-md inline-block"
            >
              <h3 className="text-xl font-semibold text-arena mb-2">Terima kasih!</h3>
              <p className="text-sepia">Panduan telah dikirim ke email Anda.</p>
            </motion.div>
          )}

          <div className="flex items-center justify-center mt-6 text-sm text-sepia">
            <FiLock className="mr-2 text-sepia" />
            <span>PS: Kami tidak akan mengirimkan spam kepada Anda</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;