import MostOrderedFood from "./components/MostOrderedFood";
import YourRating from "./components/YourRating";

export default function Dashboard(){
  return (
    <div className=" mx-1 my-1">
    <h1 className="py-5 mx-10" >Dashboard</h1>
    <div className="flex flex-col w-full">
        <div className="flex w-full">
          <div className="w-2/3 ">
            Revenue 
          </div>
          <div className="w-1/3  border-l-2 border-secondary">
            OrderTime
          </div>
        </div>
        <div className="border-b border-secondary"></div>

        <div className="flex w-full">
          <div className="w-1/3 ">
            <YourRating/>
          </div>
          <div className="w-1/3 border-l-2 border-secondary">
            <MostOrderedFood/>
          </div>
          <div className=" w-1/3 border-l-2 border-secondary">
            Order
          </div>
        </div>
    </div>
    </div>
  );
};

