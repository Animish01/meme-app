'use client'

import { useState } from "react";

export default function Meme () {
  const [upperText, setUpperText] = useState('Upper text');
  const [lowerText, setLowerText] = useState('Lower text');
  
  const changeUpperText = (e:any) => {
    setUpperText(e.target.value);
  }
  const changeLowerText = (e:any) => {
    setLowerText(e.target.value);
  }

  return (
    <div className="flex w-screen justify-around">
      <div className="texts flex-1 flex flex-col justify-center">
          <label className=" max-w-60">Change upper Text</label>
          <input id="upperText" placeholder="Upper Text"  className="max-w-60" onChange={changeUpperText}/>
          <label className=" max-w-60">Change lower Text</label>
          <input id="lowerText" placeholder="Lower Text" className="max-w-60" onChange={changeLowerText}/>
        </div>
        <div className="meme flex-1 flex flex-col items-center justify-center">
          <div id="img" className="w-60 h-32 flex flex-col justify-between items-center">
            <div id="upperImgText" className="flex items-center">{upperText}</div>
            <div id="lowerImgText" className="flex items-center">{lowerText}</div>
          </div>
          <button>Download</button>
        </div>
    </div>
  )
}