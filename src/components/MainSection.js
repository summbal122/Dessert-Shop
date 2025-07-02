import IMG from "../../images/sauce.png";
import DESSERT_ONE from "../../images/cone.png";
import DESSERT_TWO from "../../images/donut.png";
import DESSERT_THREE from "../../images/muffin.png";
import DESSERT_FOUR from "../../images/cheese-cake.png";
const MainSection = () => {
  return (
 
    <div className="flex bg-main h-96 md:min-h-screen items-end justify-center "
    style={{ backgroundImage: `url(${IMG})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
      <div className="flex flex-col gap-3 2xl:gap-7 p-6 2xl:p-12">
      <button className="bg-pink-700 text-primary font-semibold p-3  md:p-4 lg:px-14 lg:py-4 2xl:px-24 2xl:py-12 rounded-md 2xl:rounded-2xl  
      text-xs md:text-sm lg:text-md 2xl:text-4xl hover:cursor-pointer hover:opacity-80">
      Explore Desserts</button>
      <div className="flex justify-center gap-2 md:gap-3 2xl:gap-6 items-center">
        <img className="w-4 md:w-5 2xl:w-10" alt="Dessert" src={DESSERT_ONE} />
        <img className="w-8 md:w-10 2xl:w-20" alt="Dessert" src={DESSERT_TWO} />
        <img className="w-5 md:w-8 2xl:w-16" alt="Dessert" src={DESSERT_THREE} />
        <img className="w-6 md:w-8 2xl:w-16" alt="Dessert" src={DESSERT_FOUR} />
     </div>
     </div>
  
    </div>
    
  );
};

export default MainSection;