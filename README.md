# Sribu — Konsep Redesain Tidak Resmi

Konsep redesain tidak resmi landing page Sribu oleh PintuWeb: kontes desain sebagai sayembara, dengan simulasi “Coba jadi juri”. **Tidak berafiliasi dengan Sribu.**

**Demo live:** https://landing-sribu.vercel.app

![Tangkapan layar Sribu](public/og.jpg)

> Latihan desain ulang untuk portofolio. Nama Sribu milik pemiliknya; kontes, desainer, karya, dan angka di halaman ini fiktif dan tidak menggambarkan layanan, harga, atau kebijakan Sribu. Halaman diberi `noindex` agar tidak bersaing dengan situs resminya di mesin pencari.

## Konsep

Bahasa rupa **Sayembara**: lembar penjurian dengan karya bernomor, catatan juri tulisan tangan, cap pemenang, dan kertas krem.

## Halaman

- `/` — hero sayembara, empat tahap kontes, simulasi “Coba jadi juri” (tandai 3 finalis → tetapkan pemenang), panduan kapan kontes cocok
- `/catatan-redesain` — studi kasus: hero sebelum, enam masalah & keputusan, spesimen huruf, palet dengan rasio kontras yang dihitung

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Sembilan karya contoh digambar dengan SVG (tanpa karya pihak lain)
- Font: Big Shoulders, Kalam, Geist (next/font)
- Metadata per halaman, Open Graph, JSON-LD (CreativeWork), `noindex`

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Bagian dari koleksi 17 template landing page di [PortalLanding](https://portal-landing-seven.vercel.app). Dibuat oleh [PintuWeb](https://pintuweb.com), jasa pembuatan website.
