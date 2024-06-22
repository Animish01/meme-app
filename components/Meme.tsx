'use client'

import { useState, useRef, useEffect } from "react";
import { toPng } from "html-to-image";

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
  
  const downloadImage = () => {
    if(elementRef.current) {
      toPng(elementRef.current, { cacheBust: false })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'meme.png';
          link.href = dataUrl;
          link.click();
      })
    } else {
      console.log('Can\'t download image');
    }
  }

  useEffect(() => {
    const imageRes = async () => {
      const memes = await fetch('/api');
      const memeNames = await memes.json();
      setMemes(memeNames);
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
    <div className="flex flex-col w-screen justify-between md:flex-row">
      <div className="texts flex-1 flex flex-col justify-center">
        <label className=" max-w-60">Change Upper Text</label>
        <input id="upperText" placeholder="Upper Text"  className="max-w-60" onChange={changeUpperText}/>
        <label className=" max-w-60">Change Lower Text</label>
        <input id="lowerText" placeholder="Lower Text" className="max-w-60" onChange={changeLowerText}/>
      </div>
      <div className="meme flex-1 flex flex-col items-center justify-center">
        <div 
          id="img" 
          className="w-60 h-32 flex flex-col justify-between items-center bg-cover bg-center"
          style={{backgroundImage: `url(${backgroundMeme})`}} 
          ref={elementRef}
        >
          <div id="upperImgText" className="flex items-center" style={textStyle}>{upperText}</div>
          <div id="lowerImgText" className="flex items-center" style={textStyle}>{lowerText}</div>
        </div>
        <div 
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400 hover:cursor-pointer md:text-base"
          onClick={downloadImage} 
        >Download
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {
          memes?.map(({ url }) => {
            console.log(url);
            
            return (
              <div id="img" className="w-60 h-32 flex flex-col justify-between items-center bg-cover bg-center hover:cursor-pointer m-3"
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