import IMG from "../../images/logo.webp"
import { useSelector } from "react-redux";
import lang from "../languageConstants";

const Footer = () => {
  const langValue = useSelector(store => store.lang.lang)
  return (
    <footer id="footer" className="bg-main/80 text-secondary px-6 py-10 2xl:py-20 flex flex-col items-center">
      <div className="w-11/12 2xl:w-9/12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14 text-center  md:text-left">

        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img className="w-10 h-10 2xl:w-17 2xl:h-18" src={IMG} alt="Logo" loading="lazy" />
            <h2 className= "text-xl lg:text-3xl 2xl:text-4xl font-Cookie text-pink-700">Dessert Shop</h2>
          </div> 
          <p className="text-xs lg:text-sm 2xl:text-lg font-Doppio text-gray-600 leading-relaxed">
           {lang[langValue].footer.description}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="lg:text-lg 2xl:text-2xl font-semibold text-pink-800 mb-3 border-b w-fit mx-auto md:mx-0 pb-1">{lang[langValue].footer.linksTitle}</h3>
          <ul className="text-xs lg:text-sm 2xl:text-lg font-Doppio space-y-2 text-purple-text">
            <li><a href="#home" className="hover:text-pink-600 transition">{lang[langValue].footer.links.home}</a></li>
            <li><a href="#new-items" className="hover:text-pink-600 transition">{lang[langValue].footer.links.new}</a></li>
            <li><a href="#desserts" className="hover:text-pink-600 transition">{lang[langValue].footer.links.desserts}</a></li>
            <li><a href="#story" className="hover:text-pink-600 transition">{lang[langValue].footer.links.story}</a></li>
            <li><a href="#contact" className="hover:text-pink-600 transition">{lang[langValue].footer.links.contact}</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h3 className="lg:text-lg 2xl:text-2xl font-semibold text-pink-800 mb-3 border-b w-fit mx-auto md:mx-0 pb-1">{lang[langValue].footer.contactTitle}</h3>
          <p className="text-xs lg:text-sm 2xl:text-xl  font-Doppio text-purple-text">{lang[langValue].footer.email}</p>
          <p className="text-xs lg:text-sm 2xl:text-lg font-Doppio text-purple-text"> {lang[langValue].footer.phone}</p>
          <div className="flex justify-center md:justify-start gap-5 text-xl 2xl:text-2xl pt-2 text-pink-600">
            <a href="#" className="hover:text-pink-800 transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-pink-800 transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-pink-800 transition"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-6 border-t border-pink-200 text-center text-[10px] lg:text-sm 2xl:text-xl font-Doppio text-purple-text">
        © {new Date().getFullYear()} {lang[langValue].footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;





    // <div className="space-x-3 flex">
    //        <div className=" relative"> 
    //         <i className="fa-solid fa-cart-shopping text-pink-700 text-xl 2xl:text-4xl hover:cursor-pointer "></i>
    //         <span className="absolute -bottom-1 -right-2 text-[10px] bg-pink-700 text-primary rounded-full border-1 px-1 py-0.1">{((total, item) => total + item.quantity, 0)}</span>
    //         </div>
    //         <i
    //          onClick={() => {
    //           handleShowOptions();
    //          }}
    //          className="fa-solid fa-bars text-purple-text "></i>
    //          </div>
    //          {showOptions && 
    //          ( <ul className="absolute top-11 right-0.5 bg-primary text-purple-text p-4 rounded-md w-2/6 flex 
    //          flex-col gap-3 text-xs">
    //           <li className="hover:cursor-pointer hover:font-semibold">{lang[langValue].home}</li>
    //           <li className="hover:cursor-pointer hover:font-semibold">{lang[langValue].desserts}</li>
    //           <li className="hover:cursor-pointer hover:font-semibold">{lang[langValue].contact}</li>
    //           <li className="hover:cursor-pointer hover:font-semibold">{lang[langValue].about}</li>
    //          <li className="hover:cursor-pointer hover:font-semibold animate-pulse text-pink-700"><Link
    //           smooth={true} duration={800}  
    //           to="new-items">{lang[langValue].new}!</Link> </li>
    //         </ul> )}