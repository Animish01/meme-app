import Image from "next/image"
import Link from "next/link"

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
        <div className="text-slate-200 m-2 font-bold">MemeMaker</div>
      </div>
      <div className="flex flex-row">
        {
          links.map(link => {
            return (
              <Link href={ link.link } className="transition ease-in-out text-slate-200 m-3 cursor-pointer hover:scale-110 duration-200" key={link.name}>{link.name}</Link>
            )
          })
        }
      </div>
    </div>
  )
}