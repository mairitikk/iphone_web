import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    
    <header className="w-full min-h-[96px] sm:px-10 px-5 flex justify-between items-center">
      
      <nav className="flex w-full h-full items-center screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center items-center gap-x-12 max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="text-sm cursor-pointer text-custom-grayd hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

     
        <div className="flex items-center gap-x-3 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;