'use client'

import { useState, useRef } from "react";
import { toPng } from "html-to-image";

export default function Meme () {
  const [upperText, setUpperText] = useState('Upper text');
  const [lowerText, setLowerText] = useState('Lower text');

  const changeUpperText = (e
  ) => {
  setUpperText(e.target.value);
  }
  const changeLowerText = (e
  ) => {
  setLowerText(e.target.value);
  }

  const elementRef = useRef(null);

  const downloadImage = () => {
  toPng(elementRef.current, { cacheBust: false })
  .then((dataUrl) => {
  const link = document.createElement('a');
  link.download = 'meme.png';
  link.href = dataUrl;
  link.click();
  })
  }

  return (
    <div className="flex flex-row w-screen justify-around">
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
    </div>
  )
}