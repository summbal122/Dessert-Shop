import { Link } from "react-scroll";
import LOGO_IMG from "../../images/logo.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import lang from "../languageConstants";
const Header = () => {
  const langValue = useSelector(store => store.lang.lang)
  const [showOptions, setShowOptions] = useState(false);
  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  }
  return (
    <div className="absolute z-70 top-3 md:top-2 2xl:top-6 w-full">
       <div className="hidden md:block">
        <div className="flex  justify-center">
          <div className="w-10/12 lg:w-8/12 flex items-center justify-around shadow-2xl bg-primary py-1 rounded-md 2xl:rounded-xl">
            <img className="w-14 2xl:w-36" alt="logo" src={LOGO_IMG}/>

            <ul className=" text-purple-text font-Doppio flex gap-4 2xl:gap-8 text-xs lg:text-sm 2xl:text-3xl">
              <li className="hover:cursor-pointer hover:font-semibold">{lang[langValue].home}</li>
              <li className="hover:cursor-pointer hover:font-semibold">{lang[langValue].desserts}</li>
              <li className="hover:cursor-pointer hover:font-semibold">{lang[langValue].contact}</li>
              <li className="hover:cursor-pointer hover:font-semibold">{lang[langValue].about}</li>
              <li className="hover:cursor-pointer hover:font-semibold animate-pulse text-pink-700"><Link
              smooth={true} duration={800}  
              to="new-items">{lang[langValue].new}!</Link> </li>
            </ul>
            <i className="fa-solid fa-cart-shopping text-pink-700 text-lg 2xl:text-4xl hover:cursor-pointer "></i>
      </div>
      </div>
    </div>
    {/* Header for mobile screens */}
      <div className="block md:hidden">
        <div className="flex justify-center  ">
          <div className="w-5/6 flex items-center justify-between shadow-2xl bg-primary rounded-md px-4 ">
            <img className="w-10 md:w-14 2xl:w-28" alt="logo" src={LOGO_IMG}/>
          
         
            <div className="space-x-3 flex">
           <i className="fa-solid fa-cart-shopping text-pink-700 text-lg 2xl:text-3xl"></i>
            <i
             onClick={() => {
              handleShowOptions();
             }}
             className="fa-solid fa-bars text-purple-text "></i>
             </div>
             {showOptions && 
             ( <ul className="absolute top-11 right-0.5 bg-primary text-purple-text p-4 rounded-md w-2/6 flex 
             flex-col gap-3 text-xs">
              <li className="hover:cursor-pointer hover:font-semibold">{lang[langValue].home}</li>
              <li className="hover:cursor-pointer hover:font-semibold">{lang[langValue].desserts}</li>
              <li className="hover:cursor-pointer hover:font-semibold">{lang[langValue].contact}</li>
              <li className="hover:cursor-pointer hover:font-semibold">{lang[langValue].about}</li>
             <li className="hover:cursor-pointer hover:font-semibold animate-pulse text-pink-700"><Link
              smooth={true} duration={800}  
              to="new-items">{lang[langValue].new}!</Link> </li>
            </ul> )}
           </div>
        
      </div>
      </div>
    </div>
  

  )
}

export default Header
