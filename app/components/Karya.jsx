/* Sembilan karya contoh untuk kontes fiktif "Seduh Pelan", digambar SVG. */

const A = '#241c15';
const B = '#9c380f';
const H = '#3f5730';

const gambar = (uid) => ({
  cangkir: (
    <>
      <path d="M52 58 H108 V78 a20 20 0 0 1 -20 20 H72 a20 20 0 0 1 -20 -20 Z" fill={A} />
      <path d="M108 64 h6 a8 8 0 0 1 0 16 h-6" fill="none" stroke={A} strokeWidth="4" />
      <path d="M72 50 c-8 -8 8 -12 0 -22 M88 50 c-8 -8 8 -12 0 -22" fill="none" stroke={B} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  teko: (
    <>
      <ellipse cx="80" cy="74" rx="30" ry="24" fill={H} />
      <path d="M50 70 l-16 -10 v6 l14 14" fill={H} />
      <path d="M110 64 q14 2 12 20" fill="none" stroke={H} strokeWidth="5" />
      <rect x="70" y="42" width="20" height="8" rx="3" fill={A} />
      {[60, 72, 84, 96].map((x) => <circle key={x} cx={x} cy="74" r="2.5" fill="#faf5ec" />)}
    </>
  ),
  daun: (
    <>
      <circle cx="80" cy="60" r="40" fill="none" stroke={A} strokeWidth="4" />
      <path d="M80 30 C104 44 104 76 80 90 C56 76 56 44 80 30 Z" fill={H} />
      <path d="M80 36 V86" stroke="#faf5ec" strokeWidth="2" />
    </>
  ),
  kata: (
    <>
      <text x="80" y="58" textAnchor="middle" fontSize="22" fontWeight="600" letterSpacing="5" fill={A}>seduh</text>
      <text x="80" y="84" textAnchor="middle" fontSize="22" fontWeight="600" letterSpacing="9" fill={B}>pelan</text>
    </>
  ),
  monogram: (
    <>
      <rect x="48" y="28" width="64" height="64" fill={A} />
      <text x="80" y="72" textAnchor="middle" fontSize="30" fontWeight="800" fill="#faf5ec">SP</text>
    </>
  ),
  'jam-pasir': (
    <>
      <path d="M58 26 H102 L82 60 L102 94 H58 L78 60 Z" fill="none" stroke={A} strokeWidth="4" strokeLinejoin="round" />
      <path d="M72 88 C76 78 84 78 88 88 Z" fill={H} />
      <path d="M68 32 H92 L80 50 Z" fill={H} />
    </>
  ),
  cap: (
    <>
      <circle cx="80" cy="60" r="42" fill="none" stroke={B} strokeWidth="3" />
      <circle cx="80" cy="60" r="30" fill="none" stroke={B} strokeWidth="1.5" />
      <path id={`lingkar-${uid}`} d="M80 60 m-36 0 a36 36 0 1 1 72 0 a36 36 0 1 1 -72 0" fill="none" />
      <text fontSize="8.5" letterSpacing="2.2" fill={B} fontWeight="700"><textPath href={`#lingkar-${uid}`}>SEDUH PELAN · YOGYAKARTA · TEH ·</textPath></text>
      <text x="80" y="66" textAnchor="middle" fontSize="18" fontWeight="800" fill={B}>SP</text>
    </>
  ),
  gelombang: (
    <>
      {[0, 1, 2].map((i) => <path key={i} d={`M${46 + i * 6} ${40 + i * 14} q12 -10 24 0 t24 0 t24 0`} fill="none" stroke={i === 1 ? B : A} strokeWidth="4" strokeLinecap="round" />)}
      <path d="M50 88 H110" stroke={A} strokeWidth="4" />
    </>
  ),
  kantong: (
    <>
      <path d="M80 14 V36" stroke={A} strokeWidth="2" />
      <rect x="66" y="36" width="28" height="18" fill={B} />
      <path d="M58 54 H102 V100 H58 Z" fill="none" stroke={A} strokeWidth="3" strokeDasharray="5 4" />
      <text x="80" y="82" textAnchor="middle" fontSize="16" fontWeight="800" fill={A}>SP</text>
    </>
  ),
});

export default function Karya({ gaya, label, uid = gaya, className = '' }) {
  return (
    <svg viewBox="0 0 160 120" role="img" aria-label={label} className={`h-auto w-full bg-cream ${className}`}>
      {gambar(uid)[gaya]}
    </svg>
  );
}
