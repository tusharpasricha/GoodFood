import MostOrderedFood from "./components/MostOrderedFood";
import Order from "./components/Order";
import OrderTime from "./components/OrderTime";
import Revenue from "./components/Revenue";
import YourRating from "./components/YourRating";

export default function Dashboard(){
  return (
    <div className=" mx-1 my-1">
    <h1 className="pt-10 pb-2 mx-10 text-[18px]" >Dashboard</h1>
    <div className="flex flex-col w-full">
        <div className="flex w-full">
          <div className="w-[60%] ">
            <Revenue/> 
          </div>
          <div className="w-[40%]  border-l border-border">
            <OrderTime/>
          </div>
        </div>
        <div className="border-b border-border"></div>

        <div className="flex w-full">
          <div className="w-[30%] ">
            <YourRating/>
          </div>
          <div className="w-[30%] border-l border-border">
            <MostOrderedFood/>
          </div>
          <div className=" w-[40%] border-l border-border">
            <Order/>
          </div>
        </div>
    </div>
    </div>
  );
};
