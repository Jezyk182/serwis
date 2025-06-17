import { useState } from 'react';


const NavLinks = () => {
    return ( 
    <>
        <div>
            <a href="#oferty" className="text-white text-xl hover:text-blue-200 transition-all duration-200 uppercase font-bold">Oferty</a>
        </div>
        <div>
            <a href="#doswiadczenie" className="text-white text-xl hover:text-blue-200 transition-all duration-200 uppercase font-bold">Doświadczenie</a>
        </div>
        <div>
            <a href="#cennik" className="text-white text-xl hover:text-blue-200 transition-all duration-200 uppercase font-bold">Cennik</a>
        </div>
        <div>
            <a href="#kontakt" className="text-white text-xl hover:text-blue-200 transition-all duration-200 uppercase font-bold">Kontakt</a>
        </div>
    </>
     );
}



const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <div className='w-full bg-second text-white shadow sticky top-0 z-50 flex-wrap'>
            <nav>
                <div className="container m-auto flex justify-between items-center px-4 py-3 h-full">
                    <div>
                        <a href="#" className="text-2xl uppercase font-bold">Logo</a>
                    </div>
                    <div className='md:hidden'>
                        <button
                        className="lg:hidden flex flex-col gap-1"
                        onClick={toggleNavbar}
                        aria-label="Toggle menu"
                        >
                            <span className="w-6 h-0.5 bg-white"></span>
                            <span className="w-6 h-0.5 bg-white"></span>
                            <span className="w-6 h-0.5 bg-white"></span>
                        </button>

                    </div>
                    <div className="align-middle items-center gap-8 lg:gap-13 flex-wrap hidden md:flex">
                        <NavLinks />
                    </div>
                </div>
            </nav> 

            {isOpen && (
                <div className='bg-second flex flex-col items-center basis-full gap-2 absolute w-full pb-3'>
                    <NavLinks />
                </div>
            )}

        </div>
     );
}
 
export default Header;