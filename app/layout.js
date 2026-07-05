import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Sribu","description":"Platform kontes desain","url":"https://landing-sribu.vercel.app","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://landing-sribu.vercel.app"),
  title: "Sribu — Platform Desain Kontes Terbaik",
  description: "Sribu: temukan desainer berbakat dan dapatkan desain profesional melalui kontes desain online.",
  applicationName: "Sribu",
  keywords: ["kontes desain", "jasa desain", "platform desain", "logo", "desainer"],
  authors: [{ name: "Sribu" }],
  creator: "Sribu",
  publisher: "Sribu",
  alternates: { canonical: "https://landing-sribu.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-sribu.vercel.app",
    siteName: "Sribu",
    title: "Sribu — Platform Desain Kontes Terbaik",
    description: "Sribu: temukan desainer berbakat dan dapatkan desain profesional melalui kontes desain online.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Sribu — Platform Desain Kontes Terbaik" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sribu — Platform Desain Kontes Terbaik",
    description: "Sribu: temukan desainer berbakat dan dapatkan desain profesional melalui kontes desain online.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
