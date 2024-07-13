import GameBoard from "@/components/GameBoard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section>
        <GameBoard />

      </section>
    </main>
  );
}
