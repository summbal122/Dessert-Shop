import IMG from "../../images/muffin.png";
import { useSelector } from "react-redux";
import lang from "../languageConstants";

const Footer = () => {
  const langValue = useSelector(store => store.lang.lang)
  return (
    <footer className="bg-main/80 text-secondary px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 text-center md:text-left">

        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img className="w-10 h-10 rounded-full shadow-lg" src={IMG} alt="Logo" />
            <h2 className= "text-xl lg:text-3xl font-Cookie text-pink-700">Dessert Shop</h2>
          </div>
          <p className="text-xs lg:text-sm font-Doppio text-gray-600 leading-relaxed">
           {lang[langValue].footer.description}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="lg:text-lg font-semibold text-pink-800 mb-3 border-b w-fit mx-auto md:mx-0 pb-1">{lang[langValue].footer.linksTitle}</h3>
          <ul className="text-xs lg:text-sm font-Doppio space-y-2 text-purple-text">
            <li><a href="#home" className="hover:text-pink-600 transition">{lang[langValue].footer.links.home}</a></li>
            <li><a href="#new-items" className="hover:text-pink-600 transition">{lang[langValue].footer.links.new}</a></li>
            <li><a href="#desserts" className="hover:text-pink-600 transition">{lang[langValue].footer.links.desserts}</a></li>
            <li><a href="#story" className="hover:text-pink-600 transition">{lang[langValue].footer.links.story}</a></li>
            <li><a href="#contact" className="hover:text-pink-600 transition">{lang[langValue].footer.links.contact}</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h3 className="lg:text-lg font-semibold text-pink-800 mb-3 border-b w-fit mx-auto md:mx-0 pb-1">{lang[langValue].footer.contactTitle}</h3>
          <p className="text-xs lg:text-sm font-Doppio text-purple-text">📧 {lang[langValue].footer.email}</p>
          <p className="text-xs lg:text-sm font-Doppio text-purple-text">📞 {lang[langValue].footer.phone}</p>
          <div className="flex justify-center md:justify-start gap-5 text-xl pt-2 text-pink-600">
            <a href="#" className="hover:text-pink-800 transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-pink-800 transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-pink-800 transition"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-6 border-t border-pink-200 text-center text-[10px] lg:text-sm font-Doppio text-purple-text">
        © {new Date().getFullYear()} {lang[langValue].footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
