import IMG from "../../images/sauce.png";
import DESSERT_ONE from "../../images/cone.png";
import DESSERT_TWO from "../../images/donut.png";
import DESSERT_THREE from "../../images/muffin.png";
import DESSERT_FOUR from "../../images/cheese-cake.png";
import lang from "../languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/langSlice";
const MainSection = () => {
  const langValue = useSelector(store => store.lang.lang)
  const dispatch =  useDispatch();
 const handleChangeLang= (e) => {
    dispatch(changeLanguage(e.target.value))
    console.log(e.target.value);
 }
  return (
 
    <div className="flex bg-main h-96 md:min-h-screen items-end justify-center "
    style={{ backgroundImage: `url(${IMG})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>

      {/* language selector */}
     <div className=" top-3 right-6 bg-main px-4 py-3 rounded-lg shadow-md text-center fixed z-100">
        <h1 className="text-pink-700 font-Cookie text-lg mb-2">Language</h1>
        <form>
          <select
          onChange={(e) => {
              handleChangeLang(e)}}
            className="bg-white text-pink-700 border-2 border-pink-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          >
            <option value="en">English</option>
            <option  value="de">Deutsch</option>
            <option  value="fr">Français</option>
          </select>
        </form>
    </div>
      <div className="flex flex-col gap-3 2xl:gap-7 p-6 2xl:p-12">
      <button className="bg-pink-700 text-primary font-semibold p-3  md:p-4 lg:px-14 lg:py-4 2xl:px-24 2xl:py-12 rounded-md 2xl:rounded-2xl  
      text-xs md:text-sm lg:text-md 2xl:text-4xl hover:cursor-pointer hover:opacity-80">
      {lang[langValue].button}</button>
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