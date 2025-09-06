import IMG from "../../images/sauce.png";
import DESSERT_ONE from "../../images/cone.png";
import DESSERT_TWO from "../../images/donut.png";
import DESSERT_THREE from "../../images/muffin.png";
import DESSERT_FOUR from "../../images/cheese-cake.webp";
import lang from "../languageConstants";
import { Link as ScrollLink } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/langSlice";
const MainSection = () => {
  const langValue = useSelector(store => store.lang.lang)
  const dispatch =  useDispatch();
 const handleChangeLang= (e) => {
    dispatch(changeLanguage(e.target.value))
    
 }
  return (
 
    <main id="main"
     className="flex bg-main h-96 md:min-h-screen items-end justify-around"
    style={{ backgroundImage: `url(${IMG})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
      {/* language selector */}
     <div className="top-3 md:top-2 lg:top-2 2xl:top-8 right-5 md:right-2 lg:right-6 2xl:right-36 bg-main p-1 md:px-2 md:py-2 lg:px-4 2xl:px-5 lg:py-3 2xl:py-5 rounded-lg shadow-md text-center fixed z-40">
        <h1 className="text-pink-700 font-Cookie text-[9px] md:text-sm lg:text-lg 2xl:text-3xl mb-1 lg:mb-2 2xl:mb-4">{lang[langValue].language}</h1>
        <form>
          <select
          onChange={(e) => {
              handleChangeLang(e)}}
            className="bg-white text-pink-700 border-2 border-pink-300 rounded-md 2xl:rounded-xl lg:px-3 2xl:py-2 2xl:px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-[8px] md:text-[10px] lg:text-sm 2xl:text-lg " >
            <option value="en">English</option>
            <option  value="de">Deutsch</option>
            <option  value="fr">Français</option>
          </select>
        </form>
    </div>
      <div className="flex flex-col gap-3 2xl:gap-7 p-6 2xl:p-12">
      <button className="bg-pink-700 text-primary font-semibold p-3  md:p-4 lg:px-14 lg:py-4 2xl:px-24 2xl:py-12 rounded-md 2xl:rounded-2xl  
      text-xs md:text-sm lg:text-md 2xl:text-4xl hover:cursor-pointer hover:opacity-80">
        <ScrollLink to="desserts-section" smooth={true} offset={-100}>
        {lang[langValue].button}
        </ScrollLink>
      </button>
      <div className="flex justify-center gap-2 md:gap-3 2xl:gap-6 items-center">
        <img className="w-4 md:w-5 2xl:w-10" alt="Dessert" src={DESSERT_ONE} width={100} height={100} />
        <img className="w-8 md:w-10 2xl:w-20" alt="Dessert" src={DESSERT_TWO} width={100} height={100} />
        <img className="w-5 md:w-8 2xl:w-16" alt="Dessert" src={DESSERT_THREE} width={100} height={100} />
        <img className="w-6 md:w-8 2xl:w-16" alt="Dessert" src={DESSERT_FOUR} width={100} height={100} />
     </div>
     </div>
    </main>
    
  );
};

export default MainSection;