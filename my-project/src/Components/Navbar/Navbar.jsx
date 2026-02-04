import React from 'react'
import Logo from '../../assets/logo.png' 
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import DrakMode from './DrakMode';
const NavLinks = [
    {
        id: 1,
        name: 'Home',
        link: '',
    },
    {
        id: 2,
        name: 'Products',
        link: '',
    },
    {
        id: 3,
        name: 'Pricing',
        link: '',
    },
    {
        id: 4,
        name: 'Contact',
        link: '',
    }
]
const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
  return (
    <div className='navbar relative z-10 shadow-md duration-300'>
        <div className="container py-2 md:py-0">
            <div className="flex justify-between items-center">
                {/*logo section*/}
                <div className='flex items-center gap-3'>
                    <img src={Logo} alt="" className="h-16" />
                    <p className='text-3xl'> 
                    UTE  <span className="font-bold">NCKH</span>
                </p>
                </div>
                {/* desktop section*/}
                    <nav className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {
                                NavLinks.map(({id, name, link}) => {
                                    return (
                                        <li key={id} className='py-4'>
                                            <a href={link} className="text-xl font-semibold  
                                        hover:text-[#00ccff] py-2 hover:border-b-2 hover:border-[#ff00ff] transition-colors duration-500">{name}</a>
                                    </li>
                                    );
                                })
                                }
                                 {/*Dark mode toggle button*/}
                                <DrakMode />
                        </ul>
                    </nav>
                    {/*Mobile view side bar*/}
                    <div className='md:hidden block'>
                        <div className='flex items-center gap-4'>
                           <DrakMode />
                        {
                            showMenu ? <HiOutlineMenuAlt1 onClick={toggleMenu} className='cursor-pointer' size={30}/> : <HiOutlineMenuAlt3 onClick={toggleMenu} className='cursor-pointer text-black dark:text-white' size={30}/>
                        } 
                        </div>
                        
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar