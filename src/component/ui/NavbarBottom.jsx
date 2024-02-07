import { BsHouse, BsSearch, BsChatSquareDots, BsPersonCircle } from "react-icons/bs"

const MenuItem = ({ icon, label }) =>
{
  return (
    <li className="flex gap-1.5 flex-col justify-center text-slate-50/50 w-full h-16 text-xs text-center capitalize hover:font-bold hover:text-sky-500 hover:bg-slate-800/70 transition ease-in-out duration-[.3s]">
      <p className="mx-auto text-[22px]">{ icon }</p>
      <p>{ label }</p>
    </li>
  )
}

const NavbarBottom = () =>
{
  return (
    <nav className="fixed bottom-0 w-full h-16 bg-slate-950/50 backdrop-blur-md">
      <ul className="flex items-center justify-center">
        <MenuItem label="home" icon={<BsHouse />}/>
        <MenuItem label="telusuri" icon={<BsSearch />}/>
        <MenuItem label="pesan" icon={<BsChatSquareDots />}/>
        <MenuItem label="profile" icon={<BsPersonCircle />}/>
      </ul>
    </nav>
  )
}

export default NavbarBottom
