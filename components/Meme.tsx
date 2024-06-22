'use client'

import { useState, useRef, useEffect } from "react";
import { toPng } from "html-to-image";
import html2canvas from "html2canvas";

export default function Meme () {
  const [upperText, setUpperText] = useState('Upper text');
  const [lowerText, setLowerText] = useState('Lower text');
  const [memes, setMemes] = useState([]);
  const [backgroundMeme, setBackgroundMeme] = useState('');

  const changeUpperText = (e:any) => {
    setUpperText(e.target.value);
  }
  const changeLowerText = (e:any) => {
    setLowerText(e.target.value);
  }

  const elementRef = useRef(null);
  
  const downloadImage = async () => {
    if(elementRef.current) {
      try {
        const canvas = await html2canvas(elementRef.current, { useCORS: true, allowTaint: true });
        const dataUrl = canvas.toDataURL('image/png');
        console.log(dataUrl);
        
        const link = document.createElement('a');
        link.download = 'meme.png';
        link.href = dataUrl;
        link.click(); 
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('Can\'t download image');
    }
  }

  useEffect(() => {
    const imageRes = async () => {
      const memes = await fetch('/api');
      const memeNames = await memes.json();
      setMemes(memeNames);
      setBackgroundMeme(memeNames[0].url);
    }
    imageRes();
  }, []);

  const changeBackground = (url:string) => {
    setBackgroundMeme(url);
  }

  const textStyle = {
    fontWeight: 'bold',
    color: 'yellow',
    textShadow: '2px 2px 5px black',
  }

  return (
    <div className="flex flex-col justify-center  max-w-screen-lg min-h-screen bg-slate-200 p-3">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="flex flex-col text-left m-2 max-w-64">
          <label className=" max-w-60">Change Upper Text</label>
          <input id="upperText" placeholder="Upper Text"  className="max-w-60" onChange={changeUpperText}/>
          <label className=" max-w-60">Change Lower Text</label>
          <input id="lowerText" placeholder="Lower Text" className="max-w-60" onChange={changeLowerText}/>
        </div>
        <div className="meme flex flex-col m-2">
          <div 
            // id="img" 
            className="w-72 p-2 h-40 flex flex-col justify-between items-center bg-cover bg-center m-2"
            style={{backgroundImage: `url(${backgroundMeme})`}}
            ref={elementRef}
          >
            <div id="upperImgText" className="flex items-center" style={textStyle}>{upperText}</div>
            <div id="lowerImgText" className="flex items-center" style={textStyle}>{lowerText}</div>
          </div>
          <div 
            className="flex items-center mx-auto gap-5 self-start rounded-lg bg-cyan-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-600 hover:cursor-pointer md:text-base m-2"
            onClick={downloadImage} 
          >Download
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto">
        {
          memes?.map(({ url }) => {
            return (
              <div id="img" className="w-60 h-32 flex flex-col justify-between items-center bg-cover bg-center hover:cursor-pointer m-3 bg-slate-400"
                style={{backgroundImage: `url(${url})`}}
                onClick={() => changeBackground(url)}
                key={url}
              ></div>
            )
          })
        }
      </div>
    </div>
  )
}