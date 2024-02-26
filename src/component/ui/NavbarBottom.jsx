import { NavLink } from 'react-router-dom'
import { BsHouse, BsSearch, BsChatSquareDots, BsPersonCircle } from "react-icons/bs"

const MenuItem = ({ icon, label, link }) =>
{
  return (
    <NavLink to={ link } className={({ isActive }) => (isActive ? 'group w-full bg-slate-800/90' : 'w-full' )}>
      <li className="group-first:text-sky-500 group-first:font-bold flex gap-1.5 flex-col justify-center text-slate-50/50 w-full h-16 text-xs text-center capitalize hover:font-bold hover:text-sky-500 transition ease-in-out duration-[.3s]">
        <p className="mx-auto text-[22px]">{ icon }</p>
        <p>{ label }</p>
      </li>
    </NavLink>
  )
}

const NavbarBottom = () =>
{
  return (
    <nav className="fixed bottom-0 w-full h-16 bg-slate-950/50 backdrop-blur-md">
      <ul className="flex items-center justify-center">
        <MenuItem
          label="home"
          icon={<BsHouse />}
          link='/'
        />
        <MenuItem
          label="telusuri"
          icon={<BsSearch />}
          link='/telusuri'
        />
        <MenuItem
          label="pesan"
          icon={<BsChatSquareDots />}
          link='/pesan' />
        <MenuItem
          label="profile"
          icon={<BsPersonCircle />}
          link='/profile' />
      </ul>
    </nav>
  )
}

export default NavbarBottom
