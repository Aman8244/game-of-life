import GameBoard from "@/components/GameBoard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">
      <header>
        <Navbar />
      </header>
      <section className="mx-12">
        <GameBoard />
      </section>
    </main>
  );
}
