import Image from 'next/image';
import Link from 'next/link';
import { CATATAN, SITE } from '@/lib/sayembara';

export const metadata = {
  title: 'Catatan Redesain',
  description: 'Apa yang diubah dalam konsep redesain tidak resmi landing page Sribu, dan alasannya: klaim tak terverifikasi dibuang, galeri diganti karya contoh SVG, simulasi juri ditambahkan.',
  alternates: { canonical: `${SITE}/catatan-redesain` },
};

// Palet dari globals.css; rasio kontras dihitung, bukan ditulis tangan.
const PALET = [
  ['Arang', '#241c15'],
  ['Sepia', '#55452f'],
  ['Bata', '#9c380f'],
  ['Juri', '#3f5730'],
  ['Krem', '#faf5ec'],
];

function luminans(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function kontras(a, b) {
  const [x, y] = [luminans(a), luminans(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
}

const HURUF = [
  ['Big Shoulders', 'Nomor peserta & judul', 'var(--font-shoulders)', 'No. 07', 'text-5xl font-extrabold uppercase'],
  ['Kalam', 'Catatan juri', 'var(--font-kalam)', 'Uapnya bagus, hurufnya kurang pelan.', 'text-2xl'],
  ['Geist', 'Teks isi', 'var(--font-geist-sans)', 'Tulis brief sekali, terima banyak gagasan.', 'text-lg'],
];

export default function CatatanRedesain() {
  return (
    <main className="paper-fiber px-6 pt-36 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="judge-label text-ember">Catatan redesain · Oktober 2026</p>
        <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-shoulders)] text-[3.2rem] leading-[0.92] font-extrabold uppercase text-arena md:text-7xl">Dari halaman fitur ke lembar sayembara</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">
          Latihan desain ulang oleh PintuWeb untuk portofolio — tidak dipesan oleh Sribu dan tidak berafiliasi dengannya. Titik awalnya adalah versi template kami sendiri dari Agustus 2026.
        </p>

        <figure className="mt-12">
          <div className="border border-arena/15 bg-white p-2 shadow-[0_14px_30px_-20px_rgb(36_28_21/0.5)]">
            <Image src="/images/sebelum.webp" alt="Hero versi sebelumnya: judul umum di tengah, tombol jingga, dan tiga kartu fitur berikon warna-warni" width={1280} height={800} className="h-auto w-full" />
          </div>
          <figcaption className="judge-label mt-3">Sebelum · hero versi Agustus 2026</figcaption>
        </figure>

        <section aria-labelledby="ubah" className="mt-20">
          <h2 id="ubah" className="font-[family-name:var(--font-shoulders)] text-5xl leading-[0.95] font-extrabold uppercase text-arena">Masalah & keputusan</h2>
          <ol className="mt-10 border-t-2 border-arena">
            {CATATAN.map(([m, k], i) => (
              <li key={m} className="grid gap-4 border-b border-arena/15 py-7 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-8">
                <span className="entry-no font-[family-name:var(--font-shoulders)] text-4xl text-ember">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="judge-label text-sepia">Sebelumnya</p>
                  <p className="mt-2 leading-relaxed">{m}</p>
                </div>
                <div>
                  <p className="judge-label text-laurel">Di konsep ini</p>
                  <p className="mt-2 leading-relaxed text-arena">{k}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="huruf" className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <h2 id="huruf" className="font-[family-name:var(--font-shoulders)] text-5xl leading-[0.95] font-extrabold uppercase text-arena">Tiga huruf, tiga peran</h2>
            <ul className="mt-8 space-y-6">
              {HURUF.map(([n, p, v, c, k]) => (
                <li key={n} className="border border-arena/15 bg-white p-6">
                  <p className="judge-label text-sepia">{n} · {p}</p>
                  <p className={`mt-3 text-arena ${k}`} style={{ fontFamily: v }}>{c}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-shoulders)] text-5xl leading-[0.95] font-extrabold uppercase text-arena">Palet lembar penjurian</h2>
            <ul className="mt-8 space-y-3">
              {PALET.map(([n, hex]) => {
                const r = kontras(hex, '#faf5ec');
                return (
                  <li key={n} className="flex items-center gap-4 border border-arena/15 bg-white p-3">
                    <span aria-hidden="true" className="h-12 w-12 shrink-0 border border-arena/15" style={{ backgroundColor: hex }} />
                    <span className="flex-1">
                      <span className="block font-semibold text-arena">{n}</span>
                      <span className="text-sm">{hex}</span>
                    </span>
                    <span className="text-right text-sm">
                      {hex === '#faf5ec' ? 'latar' : (
                        <>
                          <span className="block font-semibold text-arena">{r.toFixed(1)} : 1</span>
                          <span>{r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : 'teks besar saja'} di atas krem</span>
                        </>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <div className="mt-20 flex flex-col gap-3 border-t-2 border-arena pt-10 sm:flex-row">
          <Link href="/#juri" className="inline-flex justify-center bg-ember px-7 py-4 font-semibold text-cream hover:bg-arena">Coba simulasi juri</Link>
          <Link href="/" className="inline-flex justify-center border-2 border-arena px-7 py-4 font-semibold text-arena hover:bg-arena hover:text-cream">Kembali ke beranda konsep</Link>
        </div>
      </div>
    </main>
  );
}
