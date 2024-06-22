import Image from "next/image"

export default function Navbar () {
  const links = [
    {
      name: 'Create',
      link: '/',
    },
    {
      name: 'Contribute',
      link: '/add-templates',
    },
  ]

  return (
    <div className="flex flex-row items-center justify-between w-lvw max-w-screen-lg bg-slate-800">
      <div className="flex items-center">
        <Image 
          src='/logo.png' 
          alt="logo" 
          width={40}
          height={40}
          className="m-2"
        />
        <div className="text-slate-200 m-2">Make memes</div>
      </div>
      <div className="flex flex-row">
        {
          links.map(link => {
            return (
              <div className="text-slate-200 m-3" key={link.name}>{link.name}</div>
            )
          })
        }
      </div>
    </div>
  )
}