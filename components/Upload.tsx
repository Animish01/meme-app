export default function Upload () {
  return (
    <div className="flex flex-col justify-center max-w-screen-lg min-h-screen bg-slate-200 px-24">
      <div className="text-center mb-8 text-base font-bold md:text-lg">Contribute Templates Here</div>
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-slate-400 border-dashed rounded-lg cursor-pointer bg-slate-300 hover:bg-slate-200 p-5">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500">PNG, JPG or JPEG Templates (16x9)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
      <div 
        className="flex items-center mx-auto my-5 gap-5 self-start rounded-lg bg-cyan-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-600 hover:cursor-pointer md:text-base m-2"
        >Upload
      </div>
    </div>
  )
}