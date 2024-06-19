export default function Home() {
  return (
    <main className="w-screen">
      <div className="flex w-screen justify-around">
        <div className="texts flex-1 flex flex-col justify-center">
          <label className=" max-w-60">Change upper Text</label>
          <input id="upperText" placeholder="Upper Text"  className="max-w-60"/>
          <label className=" max-w-60">Change lower Text</label>
          <input id="lowerText" placeholder="Lower Text" className="max-w-60" />
        </div>
        <div className="meme flex-1 flex flex-col items-center justify-center">
          <div id="img" className="w-60 h-32 flex flex-col justify-between items-center">
            <div id="upperImgText" className="flex items-center">Upper Text</div>
            <div id="lowerImgText" className="flex items-center">Lower Text</div>
          </div>
          <button>Download</button>
        </div>
      </div>
    </main>
  );
}
