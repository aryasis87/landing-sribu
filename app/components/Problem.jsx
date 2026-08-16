import React from 'react';
import { FiFrown, FiClock, FiDollarSign, FiUserX } from 'react-icons/fi';

const Problem = () => {
  // Style objects
  const containerStyle = {
    padding: '6rem 2rem',
    background: '#ffffff',
    position: 'relative'
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center'
  };

  const headingStyle = {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '1rem'
  };

  const subHeadingStyle = {
    fontSize: '1.125rem',
    color: '#4b5563',
    maxWidth: '700px',
    margin: '0 auto 3rem',
    lineHeight: 1.6
  };

  const problemGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  };

  const problemCardStyle = {
    background: '#f9fafb',
    borderRadius: '0.75rem',
    padding: '2rem',
    transition: 'all 0.3s ease',
    border: '1px solid #e5e7eb'
  };

  const iconContainerStyle = {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem'
  };

  return (
    <section style={containerStyle} id="problem">
      <div style={contentStyle}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.5rem 1rem',
          borderRadius: '999px',
          background: '#f7e7de',
          color: '#8f2d0c',
          marginBottom: '1rem'
        }}>
          <FiFrown style={{ marginRight: '0.5rem' }} />
          <span style={{ fontWeight: 600 }}>Masalah Umum</span>
        </div>
        
        <h2 style={headingStyle}>
          Sulit menemukan desain terbaik melalui freelancer, studio/agen, atau desainer in-house
        </h2>
        
        <p style={subHeadingStyle}>
          Berbagai hambatan yang sering dihadapi ketika mencari solusi desain melalui metode konvensional
        </p>
        
        <div style={problemGridStyle}>
          <div style={problemCardStyle}>
            <div style={{ ...iconContainerStyle, background: '#f7e7de' }}>
              <FiClock style={{ color: '#8f2d0c', fontSize: '1.5rem' }} />
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.25rem', color: "black" }}>Proses Lama</h3>
            <p style={{ color: '#6b7280' }}>
              Waktu pencarian dan revisi yang panjang, seringkali melebihi deadline proyek
            </p>
          </div>
          
          <div style={problemCardStyle}>
            <div style={{ ...iconContainerStyle, background: '#dbeafe' }}>
              <FiDollarSign style={{ color: '#2563eb', fontSize: '1.5rem' }} />
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.25rem', color: "black" }}>Biaya Tinggi</h3>
            <p style={{ color: '#6b7280' }}>
              Biaya agency mahal atau freelancer berkualitas sulit terjangkau
            </p>
          </div>
          
          <div style={problemCardStyle}>
            <div style={{ ...iconContainerStyle, background: '#ecfccb' }}>
              <FiUserX style={{ color: '#65a30d', fontSize: '1.5rem' }} />
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.25rem', color: "black" }}>Kualitas Tidak Konsisten</h3>
            <p style={{ color: '#6b7280' }}>
              Hasil kerja bervariasi dan tidak sesuai ekspektasi
            </p>
          </div>
          
          <div style={problemCardStyle}>
            <div style={{ ...iconContainerStyle, background: '#e9d5ff' }}>
              <FiFrown style={{ color: '#7e22ce', fontSize: '1.5rem' }} />
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.25rem', color: "black" }}>Komunikasi Rumit</h3>
            <p style={{ color: '#6b7280' }}>
              Koordinasi dengan banyak pihak menyulitkan proses kreatif
            </p>
          </div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        div[style*="problemCardStyle"]:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          background: #ffffff;
          border-color: #d1d5db;
        }
        
        @media (max-width: 640px) {
          div[style*="problemGridStyle"] {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Problem;