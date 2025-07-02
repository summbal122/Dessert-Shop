import IMG from "../../images/bg-cookies.jpg";
import COOKIE_ONE from "../../images/cookie1.png";
import COOKIE_TWO from "../../images/cookie2.png";
import COOKIE_THREE from "../../images/cookie3.png";
import COOKIE_FOUR from "../../images/cookie4.png";

const NewItemsSection = () => {
  return (
    <div  className="relative min-h-screen bg-secondary bg-gradient-to-b from-secondary to-orange-400">

      {/* Background Image */}
      <div id="new-items"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute flex inset-0 bg-gradient-to-b from-secondary to-orange-400/60 opacity-90"></div>
      <div className="w-full relative min-h-screen flex flex-col md:justify-between text-center items-center p-5 md:p-10 2xl:py-20">
      
       <h2 className="text-xl  md:text-4xl 2xl:text-8xl font-Doppio font-semibold text-transparent bg-clip-text bg-gradient-to-t from-orange-400 to-main  mb-10 p-1 2xl:p-4">
        Fresh Bakes – 4 New Cookies to Crave!
        </h2>

        {/* Cookie Grid */}
        <div className="grid grid-cols-2 lg:px-20 md:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-8 text-center ">
          {/* Cookie 1 */}
          <div className="relative group bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-4">
            <img className=":w-full transition-transform duration-300 group-hover:scale-105" src={COOKIE_ONE} alt="Strawberry Melting Delight" />
            <div className="absolute inset-0 bg-main/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center gap-2 lg:gap-3 p-4 rounded-xl text-black">
              <h3 className="text-xs lg:text-lg 2xl:text-3xl font-bold">Strawberry Melting Delight</h3>
              <p className="text-[8px] lg:text-sm 2xl:text-xl ">
                A blissful duo of pink strawberry and golden vanilla cookie halves, sandwiched together with a luscious strawberry cream filling.
              </p>
            </div>
          </div>

          {/* Cookie 2 */}
          <div className="relative group bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-4">
            <img className="w-full transition-transform duration-300 group-hover:scale-105" src={COOKIE_TWO} alt="Chunky Chocolate Madness" />
            <div className="absolute inset-0 bg-main/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center gap-2 lg:gap-3 p-4 rounded-xl text-black">
              <h3 className="text-xs lg:text-lg 2xl:text-3xl font-bold">Chunky Chocolate Madness</h3>
              <p className="text-[8px] lg:text-sm 2xl:text-xl">
                Packed to the brim with chunky chocolate chips, this bold cookie is a dream come true for chocoholics.
              </p>
            </div>
          </div>

          {/* Cookie 3 */}
          <div className="relative group bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-4">
            <img className="w-full transition-transform duration-300 group-hover:scale-105" src={COOKIE_THREE} alt="Rainbow Frosted Joy" />
            <div className="absolute inset-0 bg-main/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center gap-2 lg:gap-3 p-4 rounded-xl text-black">
              <h3 className="text-xs lg:text-lg 2xl:text-3xl font-bold">Rainbow Frosted Joy</h3>
              <p className="text-[8px] lg:text-sm 2xl:text-xl">
                Bright, playful, and covered in glossy blue icing with colorful candy sprinkles, this cookie brings joy at first sight.
              </p>
            </div>
          </div>

          {/* Cookie 4 */}
          <div className="relative group bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-4">
            <img className="w-full transition-transform duration-300 group-hover:scale-105" src={COOKIE_FOUR} alt="Dark Drizzle Indulgence" />
            <div className="absolute inset-0 bg-main/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center gap-2 lg:gap-3 p-4 rounded-xl text-black">
              <h3 className="text-xs lg:text-lg 2xl:text-3xl font-bold">Dark Drizzle Indulgence</h3>
              <p className="text-[8px] lg:text-sm 2xl:text-xl">
                Drenched in thick, glossy dark chocolate ganache, this cookie is pure indulgence.
              </p>
            </div>
          </div>
        </div>
       
        <p className="p-4 2xl:p-8 text-xs lg:w-3xl 2xl:w-9/12 rounded-md bg-main/80  md:text-lg 2xl:text-4xl mt-10 md:mt-0 text-amber-900 font-Doppio shadow-xl">
        "Indulge in our latest cookie creations — oven-fresh, perfectly gooey, and crafted to delight every kind of sweet tooth. From rich chocolate bursts to fruity cream-filled surprises, each bite is a moment of pure dessert bliss.
        </p>
      </div>
      
    </div>
    
  );
};

export default NewItemsSection;
