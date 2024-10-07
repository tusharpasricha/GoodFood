import FreshSalad from '../assets/images/freshsalad.jpg';
import ChickenNoodles from '../assets/images/chickennoodles.jpg';
import HotChickenWings from '../assets/images/hotchickenwings.jpg';
import SmoothieFruits from '../assets/images/smoothiefruits.jpg';

export default function MostOrderedFood() {
  const foodItems = [
    { name: 'Fresh Salad Bowl ', price: 'IDR 45.000', image: FreshSalad },
    { name: 'Chicken Noodles', price: 'IDR 75.000', image: ChickenNoodles },
    { name: 'Smoothie Fruits', price: 'IDR 45.000', image: SmoothieFruits },
    { name: 'Hot Chicken Wings', price: 'IDR 45.000', image: HotChickenWings },
  ];

  return (
    <div className="mx-1 my-1 py-8 px-12 text-sm">
      <h2 className="text-[14px] py-1">Most Ordered Food</h2>
      <p className="text-secondary py-2 text-[12px">Lorem ipsum dolor sit amet consectetur.</p>
      <ul className="space-y-2 py-1 text-xs">
        {foodItems.map((item, index) => (
          <li key={index} className="flex items-center justify-between border-b border-border py-4">
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-7 h-7 rounded-full shadow-lg"
              />
              <span className="text-fonty">{item.name}</span>
            </div>
            <span className="text-secondary">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
