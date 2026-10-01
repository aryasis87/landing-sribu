import { CatatanTeaser, Cara, Cocok, Hero } from "./components/Beranda";
import Penjurian from "./components/Penjurian";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cara />
      <Penjurian />
      <Cocok />
      <CatatanTeaser />
    </main>
  );
}
