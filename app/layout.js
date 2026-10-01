import { Big_Shoulders, Geist, Kalam } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const shoulders = Big_Shoulders({ variable: "--font-shoulders", subsets: ["latin"], weight: ["700", "800"] });
const kalam = Kalam({ variable: "--font-kalam", subsets: ["latin"], weight: "400" });

const __jsonld = {"@context":"https://schema.org","@type":"CreativeWork","name":"Konsep redesain landing page Sribu (tidak resmi)","description":"Latihan desain ulang untuk portofolio; tidak berafiliasi dengan Sribu.","url":"https://landing-sribu.vercel.app","inLanguage":"id","creator":{"@type":"Organization","name":"PintuWeb","url":"https://www.pintuweb.com"}};

export const metadata = {
  metadataBase: new URL("https://landing-sribu.vercel.app"),
  title: { default: "Sribu — Konsep Redesain Tidak Resmi", template: "%s — Konsep Redesain Sribu" },
  description: "Konsep redesain tidak resmi landing page Sribu oleh PintuWeb: kontes desain sebagai sayembara, dengan simulasi “Coba jadi juri”. Tidak berafiliasi dengan Sribu.",
  applicationName: "Konsep Redesain Sribu",
  keywords: ["konsep redesain", "redesain landing page", "studi kasus UI", "kontes desain", "portofolio web"],
  authors: [{ name: "PintuWeb", url: "https://www.pintuweb.com" }],
  creator: "PintuWeb",
  publisher: "PintuWeb",
  alternates: { canonical: "https://landing-sribu.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-sribu.vercel.app",
    siteName: "Konsep Redesain Sribu",
    title: "Sribu — Konsep Redesain Tidak Resmi",
    description: "Konsep redesain tidak resmi landing page Sribu oleh PintuWeb: kontes desain sebagai sayembara, dengan simulasi “Coba jadi juri”. Tidak berafiliasi dengan Sribu.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Sribu — Konsep Redesain Tidak Resmi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sribu — Konsep Redesain Tidak Resmi",
    description: "Konsep redesain tidak resmi landing page Sribu oleh PintuWeb: kontes desain sebagai sayembara, dengan simulasi “Coba jadi juri”. Tidak berafiliasi dengan Sribu.",
    images: ["/og.jpg"],
  },
  // Konsep tidak resmi untuk merek nyata: jangan bersaing dengan situs resminya di mesin pencari.
  robots: { index: false, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${shoulders.variable} ${kalam.variable} antialiased`}>
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-arena focus:px-4 focus:py-2 focus:text-cream">Lompat ke konten</a>
        <SiteHeader />
        <div id="konten">{children}</div>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
      </body>
    </html>
  );
}
