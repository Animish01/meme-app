import Navbar from "../../../components/Navbar";
import Upload from "../../../components/Upload";

export default function page () {
  return (
    <main className="w-screen flex flex-col items-center bg-slate-300">
      <Navbar />
      <Upload />
    </main>
  )
}