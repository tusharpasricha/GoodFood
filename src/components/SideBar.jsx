import utensils from '../assets/utensils.svg';
import clipboardList from '../assets/clipboard-list.svg';
import star from '../assets/star.svg';
import cog from '../assets/cog.svg';
import creditCard from '../assets/credit-card.svg';
import user from '../assets/user.svg';
import questionCircle from '../assets/question-circle.svg';
import dashboard from '../assets/dashboard.svg';
import g from '../assets/g.svg';


export default function SideBar() {
  return (
    <aside className="bg-background text-sm h-full ">
      <div className="flex items-center justify-center text-[11px] font-bold text-center text-highlight py-4">
        <img
          src={g}
          alt="burger"
          className="w-10 h-10 rounded-full px-2"
        />
        GOODFOOD
      </div>
      <div className="border-b border-border"></div>

      <div className="px-5 py-8">
        <h3 className="text-secondary px-5 py-2 text-[11px]">MENU</h3>

        <ul className="space-y-1 text-[12px]">
          <li className="flex items-center text-primary bg-[#d3d6e4] rounded py-3 px-5">
            
          <img src={dashboard} alt="Food Order" className="mr-2" />

            Dashboard
          </li>
          <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
            <img src={utensils} alt="Food Order" className="mr-2" />
            Food Order
          </li>
          <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
            <img src={clipboardList} alt="Manage Menu" className="mr-2" />
            Manage Menu
          </li>
          <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
            <img src={star} alt="Customer Review" className="mr-2" />
            Customer Review
          </li>
        </ul>
      </div>
      <div className="px-5 py-4">
        <h3 className="text-secondary px-5 py-2 text-[11px]">OTHERS</h3>
        <ul className="space-y-1 text-[12px]">
          <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
            <img src={cog} alt="Settings" className="mr-2" />
            Settings
          </li>
          <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
            <img src={creditCard} alt="Payment" className="mr-2" />
            Payment
          </li>
          <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
            <img src={user} alt="Accounts" className="mr-2" />
            Accounts
          </li>
          <li className="flex items-center hover:text-primary rounded text-secondary py-3 px-5">
            <img src={questionCircle} alt="Help" className="mr-2" />
            Help
          </li>
        </ul>
      </div>
    </aside>
  );
}
