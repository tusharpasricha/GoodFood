import {
    FaHome,
    FaUtensils,
    FaClipboardList,
    FaStar,
    FaCog,
    FaCreditCard,
    FaUser,
    FaQuestionCircle,
  } from "react-icons/fa";
  
export default function SideBar(){
    return (
      <aside className="bg-background text-sm h-full ">
        <div className="text-lg font-bold  text-center text-highlight py-6">
          GOODFOOD
        </div>
        <div className="border-b border-secondary"></div>
  
        <div className="px-5 py-8">
          <h3 className="text-secondary px-5 py-2">MENU</h3>
  
          <ul className="space-y-1 ">
            <li className="flex items-center text-primary  bg-[#d3d6e4]  rounded py-3 px-5">
              <FaHome className="mr-2" />
              Dashboard
            </li>
            <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
              <FaUtensils className="mr-2 " />
              Food Order
            </li>
            <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
              <FaClipboardList className="mr-2 " />
              Manage Menu
            </li>
            <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
              <FaStar className="mr-2 " />
              Customer Review
            </li>
          </ul>
        </div>
        <div className="px-5 py-4">
          <h3 className="text-secondary  px-5 py-2">OTHERS</h3>
          <ul className="space-y-1">
            <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
              <FaCog className="mr-2 " />
              Settings
            </li>
            <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
              <FaCreditCard className="mr-2 " />
              Payment
            </li>
            <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
              <FaUser className="mr-2 " />
              Accounts
            </li>
            <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
              <FaQuestionCircle className="mr-2 " />
              Help
            </li>
          </ul>
        </div>
      </aside>
    );
  };
  
  