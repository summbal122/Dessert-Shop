import IMG from "../../images/bg-cookies.jpg";
import COOKIE_ONE from "../../images/cookie1.png";
import COOKIE_TWO from "../../images/cookie2.png";
import COOKIE_THREE from "../../images/cookie3.png";
import COOKIE_FOUR from "../../images/cookie4.png";
import { useSelector } from "react-redux";
import lang from "../languageConstants";

const NewItemsSection = () => {
    const langValue = useSelector(store => store.lang.lang)
  return (
    <div  className="relative min-h-screen bg-pink-700 bg-gradient-to-b from-pink-700 to-orange-400">

      {/* Background Image */}
      <div id="new-items"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute flex inset-0 bg-gradient-to-b from-secondary to-orange-400/60 opacity-90"></div>
      <div className="w-full relative min-h-screen flex flex-col md:justify-between text-center items-center p-5 md:p-10 2xl:py-20">
      
       <h2 className="text-xl  md:text-4xl 2xl:text-8xl font-Cookie font-semibold text-transparent bg-clip-text bg-gradient-to-t from-orange-400 to-main  mb-10 p-1 2xl:p-4">
        {lang[langValue].cookiesHeading}
        </h2>

        {/* Cookie Grid */}
        <div className="grid grid-cols-2 w-11/12 lg:w-9/12  md:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-8 text-center ">
          {/* Cookie 1 */}
          <div className="relative group bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-4">
            <img className="w-full transition-transform duration-300 group-hover:scale-105" src={COOKIE_ONE} alt="Strawberry Melting Delight" />
            <div className="absolute inset-0 bg-main/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center gap-2 lg:gap-3 p-4 rounded-xl text-black">
              <h3 className="text-xs lg:text-lg 2xl:text-3xl font-bold">{lang[langValue].cookies[0].name}</h3>
              <p className="text-[8px] lg:text-sm 2xl:text-xl ">
              {lang[langValue].cookies[0].description}
              </p>
            </div>
          </div>

          {/* Cookie 2 */}
          <div className="relative group bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-4">
            <img className="w-full transition-transform duration-300 group-hover:scale-105" src={COOKIE_TWO} alt="Chunky Chocolate Madness" />
            <div className="absolute inset-0 bg-main/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center gap-2 lg:gap-3 p-4 rounded-xl text-black">
              <h3 className="text-xs lg:text-lg 2xl:text-3xl font-bold">{lang[langValue].cookies[1].name}</h3>
              <p className="text-[8px] lg:text-sm 2xl:text-xl">
              {lang[langValue].cookies[1].description}
              </p>
            </div>
          </div>

          {/* Cookie 3 */}
          <div className="relative group bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-4">
            <img className="w-full transition-transform duration-300 group-hover:scale-105" src={COOKIE_THREE} alt="Rainbow Frosted Joy" />
            <div className="absolute inset-0 bg-main/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center gap-2 lg:gap-3 p-4 rounded-xl text-black">
              <h3 className="text-xs lg:text-lg 2xl:text-3xl font-bold">{lang[langValue].cookies[2].name}</h3>
              <p className="text-[8px] lg:text-sm 2xl:text-xl">
               {lang[langValue].cookies[2].description}
              </p>
            </div>
          </div>

          {/* Cookie 4 */}
          <div className="relative group bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-4">
            <img className="w-full transition-transform duration-300 group-hover:scale-105" src={COOKIE_FOUR} alt="Dark Drizzle Indulgence" />
            <div className="absolute inset-0 bg-main/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center gap-2 lg:gap-3 p-4 rounded-xl text-black">
              <h3 className="text-xs lg:text-lg 2xl:text-3xl font-bold">{lang[langValue].cookies[3].name}</h3>
              <p className="text-[8px] lg:text-sm 2xl:text-xl">
                {lang[langValue].cookies[3].description}
              </p>
            </div>
          </div>
        </div>
       
        <p className="p-4 2xl:p-8 text-xs lg:w-3xl 2xl:w-9/12 rounded-md bg-main/80  md:text-lg 2xl:text-4xl mt-10 md:mt-0 text-amber-900 font-Doppio shadow-xl">
        {lang[langValue].cookiesFooter}
        </p>
      </div>
      
    </div>
    
  );
};

export default NewItemsSection;
