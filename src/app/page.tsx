import Meme from "../../components/Meme";

export default function Home() {
  let upperText = 'Upper text';
  let lowerText = 'Lower text';
  const changeUpperText = (e:any) => {
    upperText = e.target.value;
  }
  const changeLowerText = (e:any) => {
    lowerText = e.target.value;
  }

  return (
    <main className="w-screen">
      
        <Meme />
    </main>
  );
}
