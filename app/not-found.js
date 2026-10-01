import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="paper-fiber flex min-h-[80vh] items-center px-6 pt-32">
      <div className="relative mx-auto max-w-md border border-arena/15 bg-white p-10 text-center">
        <span aria-hidden="true" className="stamp judge-label absolute -top-4 -right-4 bg-cream px-4 py-3 text-ember">Gugur</span>
        <p className="entry-no font-[family-name:var(--font-shoulders)] text-7xl text-arena">No. 404</p>
        <h1 className="mt-3 text-2xl text-arena">Karya ini tidak ada di lembar penjurian</h1>
        <p className="mt-3 leading-relaxed">Halaman yang Anda cari tidak ditemukan.</p>
        <Link href="/" className="mt-7 inline-flex bg-arena px-6 py-3.5 font-semibold text-cream hover:bg-ember">Kembali ke beranda</Link>
      </div>
    </main>
  );
}
