import Link from 'next/link';
import { RESMI } from '@/lib/sayembara';

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <p className="bg-ember px-6 py-2 text-center text-xs font-semibold text-cream sm:text-sm">
        Konsep redesain tidak resmi — tidak berafiliasi dengan Sribu.{' '}
        <a href={RESMI} rel="noopener noreferrer" target="_blank" className="underline underline-offset-2">Situs resmi<span className="sr-only"> (tab baru)</span> ↗</a>
      </p>
      <div className="border-b border-arena/10 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-6">
          <Link href="/" className="flex items-baseline gap-2 text-arena">
            <span className="font-[family-name:var(--font-shoulders)] text-2xl font-extrabold uppercase tracking-wide">Sribu</span>
            <span className="judge-label text-sepia">konsep</span>
          </Link>
          <nav aria-label="Navigasi utama" className="flex items-center gap-5 sm:gap-8">
            <Link href="/#cara" className="hidden text-sm font-semibold text-sepia hover:text-arena sm:inline">Cara kerja</Link>
            <Link href="/catatan-redesain" className="hidden text-sm font-semibold text-sepia hover:text-arena sm:inline">Catatan redesain</Link>
            <Link href="/#juri" className="bg-arena px-4 py-2.5 text-sm font-semibold text-cream hover:bg-ember">Coba jadi juri</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-arena px-6 text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div>
          <p className="font-[family-name:var(--font-shoulders)] text-3xl font-extrabold uppercase tracking-wide">Sribu · konsep</p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/80">
            Halaman ini adalah latihan desain ulang untuk portofolio, dibuat oleh <a href="https://www.pintuweb.com" className="font-semibold text-cream underline underline-offset-2">PintuWeb</a>. Nama Sribu milik pemiliknya. Kontes, desainer, karya, dan angka di sini fiktif dan tidak menggambarkan layanan, harga, atau kebijakan Sribu.
          </p>
        </div>
        <nav aria-label="Halaman">
          <p className="judge-label mb-4 text-cream/80">Halaman</p>
          <ul className="space-y-2.5 text-sm text-cream/80">
            <li><Link href="/#cara" className="hover:text-cream">Cara sayembara bekerja</Link></li>
            <li><Link href="/#juri" className="hover:text-cream">Coba jadi juri</Link></li>
            <li><Link href="/catatan-redesain" className="hover:text-cream">Catatan redesain</Link></li>
            <li><a href={RESMI} rel="noopener noreferrer" target="_blank" className="hover:text-cream">Situs resmi Sribu<span className="sr-only"> (tab baru)</span> ↗</a></li>
          </ul>
        </nav>
      </div>
      <p className="judge-label mx-auto max-w-6xl border-t border-cream/15 py-6 leading-[1.9] text-cream/70">Konsep redesain tidak resmi · 2026</p>
    </footer>
  );
}
