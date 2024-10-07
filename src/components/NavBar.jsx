import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa"; 
import burger from '../assets/burger.svg'

export default function NavBar() {
  return (
    <>
      <div className="flex justify-between items-start py-3 px-8 ">
        <div className="relative w-1/2 py-1">
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg px-4 py-2 w-full bg-background pr-10" 
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary" />
        </div>
        <div className="flex px-4 py-1 items-center">
          <div className="px-4">
          <img
                src={burger}
                alt="burger"
                className="w-10 h-10 rounded-full shadow-sm"
                
              />
          </div>
          <span>Delicious Burger</span>
          <IoIosArrowDown />
          <div className="px-4">
            <FaBell />
          </div>
        </div>
      </div>
      <div className="border-b border-secondary"></div>
    </>
  );
}
