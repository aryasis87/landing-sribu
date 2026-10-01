import Link from 'next/link';
import { CATATAN, COCOK, KARYA, KURANG, RESMI, TAHAP } from '@/lib/sayembara';
import Karya from './Karya';

const no = (n) => String(n).padStart(2, '0');

export function Hero() {
  const kipas = [KARYA[2], KARYA[6], KARYA[3]];
  return (
    <section className="paper-fiber px-6 pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <p className="judge-label text-ember">Kontes desain · lembar penjurian</p>
          <h1 className="mt-5 font-[family-name:var(--font-shoulders)] text-[3.4rem] leading-[0.92] font-extrabold uppercase text-arena sm:text-7xl">Satu brief. Banyak gagasan. Anda jurinya.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            Tulis brief sekali, terima karya dari banyak desainer, beri catatan, lalu cap pemenangnya. Konsep halaman ini memperlakukan kontes desain sebagai sayembara: karya bernomor, lembar penjurian, dan cap juri.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#juri" className="inline-flex justify-center bg-ember px-7 py-4 font-semibold text-cream hover:bg-arena">Coba jadi juri</Link>
            <a href={RESMI} rel="noopener noreferrer" target="_blank" className="inline-flex justify-center border-2 border-arena px-7 py-4 font-semibold text-arena hover:bg-arena hover:text-cream">Mulai kontes di situs resmi<span className="sr-only"> (tab baru)</span> ↗</a>
          </div>
        </div>
        <div aria-hidden="true" className="relative mx-auto h-[22rem] w-full max-w-md">
          {kipas.map((k, i) => (
            <div key={k.no} className="absolute w-[62%] border border-arena/15 bg-white p-3 shadow-[0_14px_30px_-18px_rgb(36_28_21/0.55)]" style={{ left: `${i * 19}%`, top: `${[14, 0, 22][i]}%`, transform: `rotate(${[-7, 2, 9][i]}deg)`, zIndex: i === 1 ? 10 : i }}>
              <Karya gaya={k.gaya} uid={`hero-${k.no}`} label="" />
              <p className="mt-2 flex items-baseline justify-between">
                <span className="entry-no font-[family-name:var(--font-shoulders)] text-2xl text-arena">No. {no(k.no)}</span>
                <span className="text-xs">{k.oleh}</span>
              </p>
              {i === 1 && <span className="stamp judge-label absolute -top-4 -right-4 bg-cream px-4 py-3 text-ember">Pemenang</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cara() {
  return (
    <section id="cara" className="scroll-mt-28 bg-arena px-6 py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="judge-label text-cream/80">Cara sayembara bekerja</p>
        <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-shoulders)] text-5xl leading-[0.95] font-extrabold uppercase text-cream md:text-6xl">Empat tahap dari brief ke cap pemenang</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {TAHAP.map(([j, d], i) => (
            <li key={j} className="border-t-2 border-cream/25 pt-5">
              <span className="entry-no font-[family-name:var(--font-shoulders)] text-6xl text-ember-light">{no(i + 1)}</span>
              <h3 className="mt-3 text-xl text-cream">{j}</h3>
              <p className="mt-2 leading-relaxed text-cream/80">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Cocok() {
  return (
    <section className="paper-fiber px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="judge-label text-ember">Sebelum memulai</p>
        <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-shoulders)] text-5xl leading-[0.95] font-extrabold uppercase text-arena md:text-6xl">Kontes tidak cocok untuk semua hal</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[['Cocok untuk', COCOK, 'text-laurel', 'Ya'], ['Kurang cocok untuk', KURANG, 'text-ember', 'Tidak']].map(([j, isi, warna, cap]) => (
            <div key={j} className="relative border border-arena/15 bg-white p-7">
              <span aria-hidden="true" className={`stamp judge-label absolute top-6 right-6 px-3 py-2 ${warna}`}>{cap}</span>
              <h3 className="text-2xl text-arena">{j}</h3>
              <ul className="mt-5 space-y-4">
                {isi.map((x) => <li key={x} className="border-b border-dashed border-arena/20 pb-4 leading-relaxed last:border-0">{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CatatanTeaser() {
  return (
    <section className="border-t border-arena/10 bg-cream-2 px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div>
          <p className="judge-label text-ember">Catatan redesain</p>
          <h2 className="mt-4 font-[family-name:var(--font-shoulders)] text-5xl leading-[0.95] font-extrabold uppercase text-arena md:text-6xl">{CATATAN.length} hal yang kami ubah, dan alasannya</h2>
          <p className="mt-5 max-w-xl leading-relaxed">Dari klaim yang tak bisa diverifikasi sampai galeri karya klien — versi sebelumnya dibongkar satu per satu.</p>
        </div>
        <Link href="/catatan-redesain" className="inline-flex justify-center self-end bg-arena px-7 py-4 font-semibold text-cream hover:bg-ember lg:justify-self-end">Baca catatan redesain</Link>
      </div>
    </section>
  );
}

