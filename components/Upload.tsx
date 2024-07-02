'use client'

import React, { useState } from "react";

export default function Upload () {
  // const navigate = us
  // const [image, setImage] = useState(null);
  const [file, setFile] = useState('');

  const handleFileChange = async (e:any) => {
    // setFile(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    // console.log(file);
  }
  
  const uploadImage = async () => {
    try {
      const formData = new FormData();
      
      formData.append('file', file);
      console.log(formData);
      console.log(formData.get('file'));


      // const res = await fetch('/api/upload-image', {
      //   method: 'POST',
      //   body: formData,
      // });
      // console.log(res.body);
      

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center max-w-screen-lg min-h-screen bg-slate-200 px-10 md:px-24">
      <div className="text-center mb-8 text-base font-bold md:text-lg flex flex-row">Work in progress  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>
</div>
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-slate-400 border-dashed rounded-lg cursor-pointer bg-slate-300 hover:bg-slate-200 p-5">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500">PNG, JPG or JPEG Templates (16x9)</p>
        </div>
        
        <input 
          id="dropzone-file" 
          type="file" onChange={handleFileChange}
          className="hidden"
        />
        {/* <img src={file} alt="Preview" className="max-w-full h-auto" /> */}
      </label>
      <div 
        className="flex items-center mx-auto my-5 gap-5 rounded-lg bg-cyan-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-600 hover:cursor-pointer md:text-base m-2"
        onClick={uploadImage}
        >Upload
      </div>
    </div>
  )
}