import IMG from "../../images/sauce.png";
import DESSERT_ONE from "../../images/cone.png";
import DESSERT_TWO from "../../images/donut.png";
import DESSERT_THREE from "../../images/muffin.png";
import DESSERT_FOUR from "../../images/cheese-cake.png";
const MainSection = () => {
  return (
 
    <div className="flex bg-main min-h-screen items-center md:items-end justify-center">
      <div className="flex flex-col gap-3 p-6">
      <button className="bg-secondary text-primary p-3 md:p-5 2xl:p-12 rounded-md 2xl:rounded-2xl  text-xs md:text-sm lg:text-md 2xl:text-4xl 
       hover:cursor-pointer hover:opacity-80">Explore Desserts</button>
      <div className="flex justify-center gap-4 items-center">
        <img className="w-4 md:w-5" alt="Dessert" src={DESSERT_ONE} />
        <img className="w-8 md:w-10" alt="Dessert" src={DESSERT_TWO} />
        <img className="w-5 md:w-8" alt="Dessert" src={DESSERT_THREE} />
        <img className="w-6 md:w-8" alt="Dessert" src={DESSERT_FOUR} />
     </div>
     </div>
     <img
      className="w-screen absolute md:h-full top-[-10px] md:mt-[-50px] "
       src={IMG} alt="main" />
  
    </div>
    
  );
};

export default MainSection;