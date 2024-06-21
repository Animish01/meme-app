'use client'

import { useState, useRef, useEffect } from "react";
import { toPng } from "html-to-image";

export default function Meme () {
  const [upperText, setUpperText] = useState('Upper text');
  const [lowerText, setLowerText] = useState('Lower text');
  const [memes, setMemes] = useState([]);

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

  // useEffect(() => {
  //   const imageRes = async () => {
  //     const memes = await fetch('/api');
  //     const memeNames = await memes.json();
  //     setMemes(memeNames);
  //   }
  //   imageRes();
  // }, []);

  return (
    <div className="flex flex-row w-screen justify-between">
      <div className="texts flex-1 flex flex-col justify-center">
        <label className=" max-w-60">Change upper Text</label>
        <input id="upperText" placeholder="Upper Text"  className="max-w-60" onChange={changeUpperText}/>
        <label className=" max-w-60">Change lower Text</label>
        <input id="lowerText" placeholder="Lower Text" className="max-w-60" onChange={changeLowerText}/>
      </div>
      <div className="meme flex-1 flex flex-col items-center justify-center">
        <div id="img" className="w-60 h-32 flex flex-col justify-between items-center" ref={elementRef}>
          <div id="upperImgText" className="flex items-center">{upperText}</div>
          <div id="lowerImgText" className="flex items-center">{lowerText}</div>
        </div>
        <div 
          onClick={downloadImage} 
        >Download
        </div>
      </div>
      <div className="grid grid-cols-3">
        {
          memes.map((url) => {
            const imagePath = __dirname+'images/'+url;
            console.log(imagePath);
            
            return (
              <div id="img" className="w-60 h-32 flex flex-col justify-between items-center"
                style={{background: `url(${imagePath})`}}
                key={imagePath}
              ></div>
            )
          })
        }
      </div>
    </div>
  )
}