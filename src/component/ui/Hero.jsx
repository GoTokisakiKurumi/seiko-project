import { BsSearch, BsPersonCircle, BsController } from 'react-icons/bs'

const Hero = () =>
{  
  return (
    <div className="relative w-full h-52 bg-blue-500 bg-center bg-[url('../../../public/images/hero.jpg')]">
      <div className="relative w-full h-52 bg-gradient-to-t from-slate-900">
        <div className="md:max-w-xs lg:max-w-lg py-10 mx-auto">
          <h1 className="font-bold text-white text-3xl text-center capitalize">
            gaming marketplace for all gamers
          </h1>
          <p className="py-2 text-white text-sm text-center capitalize">
            buy, sell and earn with our services
          </p>
        </div>
        <div className="md:max-w-md lg:max-w-lg flex absolute left-2/4 bottom-[-25px] w-full px-5 transform translate-x-[-50%]">
          <form  className="w-full">
            <input className="text-white w-full h-14 p-5 pr-14 outline-none hover:ring-1 hover:ring-sky-500 bg-slate-800 rounded-full" name='search' type="text" placeholder="Telusuri akun yang anda impikan..." autoComplete="off" autoFocus/>
            <button type="submit" className="absolute top-1.5 right-1.5 flex items-center justify-center mx-5 text-white size-11 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full hover:ring-1 ring-sky-800/80"><BsSearch size={25}/></button>
          </form>
        </div>
      </div>
      <div className="md:max-w-2xl container flex gap-5 flex-wrap items-center justify-center my-16 px-5 mx-auto">
        <HeroCategory 
          icon={<BsPersonCircle />}
          text="akun"
        />
        <HeroCategory 
          icon={<BsController />}
          text="joki akun"
        />
      </div>
    </div>
  )
}

const HeroCategory = ({ icon, text }) =>
{
  return (
    <div className='flex gap-2 items-center text-white w-[150px] max-w-48 h-16 p-3 bg-slate-800/50 rounded-xl'>
      <div className='p-1 bg-transparent ring-1 rounded-full *:text-[30px] *:p-1 *:bg-gradient-to-r *:from-blue-500 *:to-sky-500 *:rounded-full'>
        { icon }
      </div>
      <p className='text-sm capitalize'>
        { text }
      </p>
    </div>
  )
}

export default Hero
