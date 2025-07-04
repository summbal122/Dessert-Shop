import { Link as ScrollLink } from "react-scroll";
import LOGO_IMG from "../../images/logo.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import lang from "../languageConstants";
import Cart from "./Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const langValue = useSelector((store) => store.lang.lang);
  const cartItems = useSelector((store) => store.cart.cartItems);

  const handleShowCart = () => {
    setShowCart((prev) => {
      if (!prev) setShowOptions(false); // close menu if opening cart
      return !prev;
    });
  };

  const handleShowOptions = () => {
    setShowOptions((prev) => {
      if (!prev) setShowCart(false);
      return !prev;
    });
  };

  const handleMobileNavClick = () => {
    setShowOptions(false); // close mobile nav on link click
  };

  return (
    <div className="fixed z-70 top-3 md:top-2 2xl:top-6 w-full">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="flex justify-center">
          <div className="w-9/12 lg:w-8/12 flex items-center justify-around shadow-2xl bg-primary py-1 rounded-md 2xl:rounded-xl">
            <img className="w-14 2xl:w-36" alt="logo" src={LOGO_IMG} />
            <ul className="text-purple-text font-Doppio flex gap-4 2xl:gap-8 text-xs lg:text-sm 2xl:text-3xl">
              <li className="hover:cursor-pointer hover:font-semibold">
                <ScrollLink to="main" smooth={true} duration={800} offset={-100}>
                    {lang[langValue].home}
                  </ScrollLink></li>
              <li className="hover:cursor-pointer hover:font-semibold">
                <ScrollLink to="desserts-section" smooth={true} duration={800} offset={-100}>
                  {lang[langValue].desserts}
                </ScrollLink>
              </li>
              <li className="hover:cursor-pointer hover:font-semibold">
                <ScrollLink to="footer" smooth={true} duration={800} offset={-100}>
                  {lang[langValue].contact}
                </ScrollLink>
              </li>
              <li className="hover:cursor-pointer hover:font-semibold">
                <ScrollLink to="about" smooth={true} duration={800} offset={-100}>
                  {lang[langValue].about}
                </ScrollLink>
              </li>
              <li className="hover:cursor-pointer hover:font-semibold animate-pulse text-pink-700">
                <ScrollLink to="new-items" smooth={true} duration={800} offset={-100}>
                  {lang[langValue].new}!
                </ScrollLink>
              </li>
            </ul>
            <div onClick={handleShowCart} className="relative hover:cursor-pointer">
              <i className="fa-solid fa-cart-shopping text-pink-700 text-xl 2xl:text-5xl"></i>
              <span className="absolute -bottom-1 -right-2 text-[10px] 2xl:text-lg 2xl:px-2 bg-pink-700 text-primary rounded-full border-1 px-1 py-0.1">
                {cartItems.reduce((total, item) => total + item.quantity, null)}
              </span>
            </div>
          </div>
        </div>
        {showCart && <Cart />}
      </div>

      {/* Mobile Header */}
      <div className="block md:hidden">
        <div className="ml-10">
          <div className="w-4/6 flex items-center justify-between shadow-2xl bg-primary rounded-md px-4">
            <img className="w-10" alt="logo" src={LOGO_IMG} />

            <div className="space-x-4 flex items-center">
              <div onClick={handleShowCart} className="relative hover:cursor-pointer">
                <i className="fa-solid fa-cart-shopping text-pink-700 text-md"></i>
                <span className="absolute bottom-0.5 -right-1 text-[7px] bg-pink-700 text-primary rounded-full px-1 ">
                  {cartItems.reduce((total, item) => total + item.quantity, null)}
                </span>
              </div>
              <i onClick={handleShowOptions} className="fa-solid fa-bars text-purple-text text-sm"></i>
            </div>

            {showOptions && (
              <ul className="absolute top-11 right-5 -z-50 bg-primary text-purple-text p-4 rounded-md w-2/6 flex flex-col gap-3 text-xs">
                <li onClick={handleMobileNavClick} className="hover:cursor-pointer hover:font-semibold">
                  <ScrollLink to="main" smooth={true} duration={800} offset={-100}>
                    {lang[langValue].home}
                  </ScrollLink>
                </li>
                <li onClick={handleMobileNavClick} className="hover:cursor-pointer hover:font-semibold">
                  <ScrollLink to="desserts-section" smooth={true} duration={800} offset={-100}>
                    {lang[langValue].desserts}
                  </ScrollLink>
                </li>
                <li onClick={handleMobileNavClick} className="hover:cursor-pointer hover:font-semibold">
                  <ScrollLink to="footer" smooth={true} duration={800} offset={-100}>
                    {lang[langValue].contact}
                  </ScrollLink>
                </li>
                <li onClick={handleMobileNavClick} className="hover:cursor-pointer hover:font-semibold">
                  <ScrollLink to="about" smooth={true} duration={800} offset={-100}>
                    {lang[langValue].about}
                  </ScrollLink>
                </li>
                <li onClick={handleMobileNavClick} className="hover:cursor-pointer hover:font-semibold animate-pulse text-pink-700">
                  <ScrollLink to="new-items" smooth={true} duration={800} offset={-100}>
                    {lang[langValue].new}!
                  </ScrollLink>
                </li>
              </ul>
            )}

            {showCart && <Cart />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
