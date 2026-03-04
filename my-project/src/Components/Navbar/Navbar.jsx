import React from 'react'
import Logo from '../../assets/logo.png' 
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const NavLinks = [
    {
        id: 1,
        name: 'Home',
        link: '#',
    },
    {
        id: 2,
        name: 'Products',
        link: '#products',
    },
    {
        id: 3,
        name: 'Pricing',
        link: '#pricing',
    },
    {
        id: 4,
        name: 'Contact',
        link: '#contact',
    }
]
const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    const handleLinkClick = () => {
        setShowMenu(false);
    }
  return (
    <div className='navbar relative z-50 shadow-md duration-300 bg-gray-900'>
        <div className="container py-2 md:py-0">
            <div className="flex justify-between items-center">
                {/*logo section*/}
                <div className='flex items-center gap-3'>
                    <img src={Logo} alt="UTE NCKH Logo" className="h-16" />
                    <p className='text-3xl text-white'> 
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
                                            <a 
                                              href={link} 
                                              className="text-xl font-semibold text-white
                                              hover:text-primary py-2 hover:border-b-2 hover:border-secondary 
                                              transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-primary rounded px-2"
                                            >
                                              {name}
                                            </a>
                                    </li>
                                    );
                                })
                                }
                        </ul>
                    </nav>
                    {/*Mobile view side bar*/}
                    <div className='md:hidden block'>
                        <button
                            onClick={toggleMenu}
                            className='cursor-pointer text-white focus:outline-none focus:ring-2 focus:ring-primary rounded p-1'
                            aria-label="Toggle mobile menu"
                            aria-expanded={showMenu}
                        >
                            {showMenu ? <HiOutlineMenuAlt1 size={30}/> : <HiOutlineMenuAlt3 size={30}/>}
                        </button>
                    </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${showMenu ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className='bg-gray-800 py-4'>
                    <ul className='space-y-2'>
                        {NavLinks.map(({id, name, link}) => (
                            <li key={id} className='px-4'>
                                <a 
                                  href={link}
                                  onClick={handleLinkClick}
                                  className='block py-2 text-lg font-semibold text-white
                                  hover:text-primary transition-colors duration-300
                                  focus:outline-none focus:ring-2 focus:ring-primary rounded px-2'
                                >
                                  {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar