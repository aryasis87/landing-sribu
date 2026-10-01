/* ==========================================================================
   Konsep redesain TIDAK RESMI untuk landing page Sribu (latihan portofolio
   PintuWeb). Tidak berafiliasi dengan Sribu. Kontes, desainer, karya, dan
   angka di sini fiktif; tidak ada klaim tentang layanan, harga, atau
   kebijakan Sribu yang sebenarnya.
   ========================================================================== */

export const SITE = 'https://landing-sribu.vercel.app';
export const RESMI = 'https://www.sribu.com';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

export const KONTES = {
  judul: 'Logo untuk Kedai Teh Seduh Pelan',
  usaha: 'Seduh Pelan',
  kota: 'Yogyakarta',
  hadiah: 2500000,
  brief: 'Kedai teh tubruk dan teh tarik di gang dekat kampus. Pelanggannya datang untuk duduk lama, bukan pesan-bawa.',
  rasa: ['pelan', 'hangat', 'sedikit jenaka'],
};

// Sembilan karya contoh — semua digambar dengan SVG di komponen Karya.
export const KARYA = [
  { no: 1, oleh: '@garisbiru', gaya: 'cangkir', catatan: 'Uap teh membentuk huruf S.' },
  { no: 2, oleh: '@nadi.studio', gaya: 'teko', catatan: 'Teko blirik, ikon warung teh Jawa.' },
  { no: 3, oleh: '@lembarputih', gaya: 'daun', catatan: 'Satu daun teh di dalam lingkaran utuh.' },
  { no: 4, oleh: '@hurufpelan', gaya: 'kata', catatan: 'Huruf kecil yang renggang, dibaca pelan.' },
  { no: 5, oleh: '@kotakhitam', gaya: 'monogram', catatan: 'Monogram SP untuk cap gelas plastik.' },
  { no: 6, oleh: '@pasirwaktu', gaya: 'jam-pasir', catatan: 'Jam pasir berisi daun: waktu menyeduh.' },
  { no: 7, oleh: '@capbatu', gaya: 'cap', catatan: 'Cap bulat untuk stempel karet di kantong.' },
  { no: 8, oleh: '@arus.kecil', gaya: 'gelombang', catatan: 'Tiga garis uap yang melambat.' },
  { no: 9, oleh: '@tali.teh', gaya: 'kantong', catatan: 'Label kantong teh celup sebagai bentuk dasar.' },
];

export const TAHAP = [
  ['Tulis brief & tetapkan hadiah', 'Ceritakan usaha, rasa yang dicari, dan yang ingin dihindari. Hadiah menentukan seberapa banyak desainer tertarik ikut.'],
  ['Karya berdatangan', 'Desainer mengirim gagasan dengan nomor peserta. Anda bisa memberi masukan selama kontes berjalan.'],
  ['Pilih finalis', 'Sempitkan menjadi beberapa karya. Finalis memperbaiki karyanya sesuai catatan juri — Anda.'],
  ['Tetapkan pemenang', 'Pemenang menerima hadiah dan menyerahkan file akhir beserta hak ciptanya.'],
];

export const COCOK = [
  'Logo, nama merek, atau poster — saat Anda ingin melihat banyak arah sebelum memutuskan.',
  'Brief yang bisa ditulis jelas dalam satu halaman.',
  'Anda punya waktu menilai karya dan memberi masukan selama kontes.',
];
export const KURANG = [
  'Sistem desain besar yang butuh riset dan banyak pertemuan.',
  'Pekerjaan berulang setiap minggu — lebih cocok dengan satu desainer tetap.',
  'Brief yang belum jelas; banyak karya tidak akan membantu memutuskan.',
];

// Catatan redesain: [masalah di versi sebelumnya, keputusan di konsep ini].
export const CATATAN = [
  ['Judul hero bisa dipakai platform mana pun.', 'Hero langsung memperlihatkan mekanisme kontes: karya bernomor dan cap pemenang.'],
  ['Tabel perbandingan memuat klaim yang tidak bisa kami verifikasi, seperti jumlah desainer dan layanan 24 jam.', 'Tabel dibuang. Diganti panduan jujur kapan kontes cocok dan kapan tidak.'],
  ['Galeri memajang karya klien sungguhan tanpa konteks dan izin yang jelas.', 'Diganti sembilan karya contoh fiktif yang digambar dengan SVG.'],
  ['Testimoni bernama tanpa sumber.', 'Dibuang. Konsep ini tidak memakai testimoni.'],
  ['Pengunjung hanya membaca; tidak ada yang bisa dicoba.', 'Simulasi “Coba jadi juri”: tandai finalis, tetapkan pemenang, dalam setengah menit.'],
  ['Font generik dan ikon warna-warni yang tidak berhubungan.', 'Big Shoulders untuk nomor peserta, Kalam untuk catatan juri, palet krem–arang–bata dari lembar penjurian.'],
];
