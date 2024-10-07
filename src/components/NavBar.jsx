import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa"; 
import burger from '../assets/images/Emoticon.jpg'
import noti from "../assets/noti.svg"


export default function NavBar() {
  return (
    <>
      <div className="flex justify-between items-start py-3 px-8  ">
        <div className="relative w-1/2 py-1">
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg px-4 py-2 w-full bg-background pr-10 text-[12px]" 
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary" />
        </div>
        <div className="flex px-4 py-1 items-center text-sm text-secondary">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-beigee shadow-sm">
          <img
                src={burger}
                alt="burger"
                className="w-5 h-5"
                
              />
          </div>
          <span className="px-3 text-[12px]">Delicious Burger</span>
          <IoIosArrowDown />
          <div className="px-4">
          <img
          src={noti}
          alt="noti"
          className="w-7 h-7 rounded-full px-2"
        />
          </div>
        </div>
      </div>
      <div className="border-b border-border"></div>
    </>
  );
}
