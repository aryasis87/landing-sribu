import React from 'react';
import { FiArrowRight, FiSearch, FiUsers, FiAward } from 'react-icons/fi';

const Hero = () => {
  // Style objects
  const containerStyle = {
    position: 'relative',
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
    overflow: 'hidden',
  };

  const contentWrapperStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2
  };

  const headingStyle = {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 800,
    lineHeight: 1.2,
    color: '#111827',
    marginBottom: '1.5rem',
    maxWidth: '800px'
  };

  const subHeadingStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: '#4b5563',
    lineHeight: 1.6,
    maxWidth: '600px',
    marginBottom: '2.5rem'
  };

  const ctaButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.75rem 2rem',
    borderRadius: '0.5rem',
    background: '#b34114',
    color: 'white',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(179, 65, 20, 0.3)'
  };

  const featureGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '800px',
    marginTop: '4rem'
  };

  const featureCardStyle = {
    background: 'white',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease'
  };

  return (
    <section style={containerStyle}>
      {/* Background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)'
      }} />
      
      <div style={contentWrapperStyle}>
        <h1 style={headingStyle}>
          Bekerja dengan Desainer Grafis Berbakat secara Online
        </h1>
        
        <p style={subHeadingStyle}>
          Dapatkan lebih banyak ide desain berkualitas dan ucapkan selamat tinggal pada pertemuan offline yang memakan waktu.
        </p>
        
        <button style={ctaButtonStyle}>
          Mulai Sekarang
          <FiArrowRight style={{ marginLeft: '0.5rem' }} />
        </button>
        
        <div style={featureGridStyle}>
          <div style={featureCardStyle}>
            <div style={{
              width: '3rem',
              height: '3rem',
              background: '#e0e7ff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem'
            }}>
              <FiSearch style={{ color: '#4f46e5', fontSize: '1.25rem' }} />
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', color: "black" }}>Temukan Talent</h3>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Akses ribuan desainer profesional siap membantu proyek Anda
            </p>
          </div>
          
          <div style={featureCardStyle}>
            <div style={{
              width: '3rem',
              height: '3rem',
              background: '#ecfdf5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem'
            }}>
              <FiUsers style={{ color: '#10b981', fontSize: '1.25rem' }} />
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', color: "black" }}>Kolaborasi Mudah</h3>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Platform online untuk komunikasi dan revisi desain
            </p>
          </div>
          
          <div style={featureCardStyle}>
            <div style={{
              width: '3rem',
              height: '3rem',
              background: '#fef2f2',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem'
            }}>
              <FiAward style={{ color: '#ef4444', fontSize: '1.25rem' }} />
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', color: "black" }}>Kualitas Terjamin</h3>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Hanya desainer terverifikasi dengan portofolio berkualitas
            </p>
          </div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.4);
          background: #2563eb;
        }
        
        div[style*="featureCardStyle"]:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15);
        }
        
        @media (max-width: 768px) {
          div[style*="featureGridStyle"] {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;