import { BsSearch } from 'react-icons/bs'

const Hero = () =>
{
  return (
    <div className="relative w-full h-52 bg-blue-500 bg-center bg-[url('../../../public/images/hero.jpg')]">
      <div className="relative w-full h-52 bg-gradient-to-t from-slate-900">
        <div className="max-w-xs py-10 mx-auto">
          <h1 className="font-bold text-white text-3xl text-center capitalize">gaming marketplace for all gamers</h1>
          <p className="py-2 text-white text-sm text-center capitalize">buy, sell and earn with our services</p>
        </div>
        <div className="sm:container md:container flex absolute left-2/4 bottom-[-25px] min-w-80 transform translate-x-[-50%]">
          <input className="text-white w-full h-14 pl-5 pr-16 outline-none hover:ring-1 hover:ring-sky-500 bg-slate-800 rounded-full" type="text" placeholder="Telusuri akun yang anda impikan..." autoComplete="off" autoFocus/>
          <div className="absolute top-1.5 right-2 flex items-center justify-center text-white size-11 bg-sky-500 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full hover:ring-1 ring-sky-800/80"><BsSearch size={25}/></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
