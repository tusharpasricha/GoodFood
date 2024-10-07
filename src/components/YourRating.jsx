import Rating from '../assets/images/rating.jpg'
export default function YourRating() {
  return (
    <>
      <div className="mx-1 my-1 px-10 py-8  h-full">
        <h2 className="text-sm py-2 ">Your Rating</h2>
        <p className="text-secondary text-[12px] py-2">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <img src={Rating} alt='img'>
      </img>
      </div>
      
    </>
  );
}
