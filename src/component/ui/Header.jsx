import logo from '../../../public/images/kurumi.jpg'

const Header = () =>
{
  return (
    <header className="z-50 sticky top-0 flex items-center justify-between px-5 py-3.5 backdrop-blur-sm bg-slate-900/95">
      <img className='size-11 rounded-md' src={logo} alt=""/>
      <div className='flex gap-x-2 items-center text-md'>
        <button type='button' className='text-white font-semibold h-10 px-4 capitalize bg-gradient-to-r from-blue-500 to-sky-500 ring-1 ring-blue-500 rounded-md'>beli akun</button>
        <button type='button' className='text-sky-500 font-semibold h-10 px-4 capitalize border-[0.5px] border-sky-500 bg-gradient-to-r bg-transparent ring-1 ring-inset ring-blue-500 rounded-md'>masuk</button>
      </div>
    </header>
  )
}

export default Header
