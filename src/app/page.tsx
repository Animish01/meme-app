import Meme from "../../components/Meme";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <main className="w-screen flex flex-col items-center bg-slate-300">
      <Navbar />
      <Meme />
    </main>
  );
}
