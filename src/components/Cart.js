import { useSelector, useDispatch } from "react-redux";
import lang from "../languageConstants";
import { increaseQty, decreaseQty, clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const langValue = useSelector((store) => store.lang.lang);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItems())
  }
  return (
    <div className="w-5/8 md:w-5/12 lg:w-4/12 2xl:w-3/12 border border-pink-200 bg-main/98 absolute top-11 md:top-17 lg:top-18 2xl:top-40 right-24 md:right-24 lg:right-45 z-80 shadow-xl rounded-md 2xl:rounded-xl p-1  py-3 md:p-3 lg:p-5 2xl:p-8 ">
      <h1 className="text-xs md:text-lg lg:text-2xl 2xl:text-4xl font-Cookie text-pink-700 mb-2 md:mb-4 text-center">{lang[langValue].cart}</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 italic text-[10px] md:text-xs lg:text-sm 2xl:text-xl text-center">
          {lang[langValue].emptyCart}
        </p>
      ) : (
        <ul className="space-y-3 max-h-70 overflow-y-auto pr-1">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-white shadow-sm border border-gray-100 rounded-lg p-1 md:p-2 2xl:p-4 hover:shadow-md transition" >
              <img
                src={item.img}
                alt={item.translations[langValue].title}
                className="w-6 md:h-6 lg:w-7 lg:p-1 lg:h-8 2xl:h-24 2xl:w-18 rounded-lg border border-pink-200 object-cover"  />
              <div className="flex-1 flex flex-col items-start">
                <span className="font-semibold text-pink-600 text-[7px] md:text-xs 2xl:text-lg">
                  {item.translations[langValue].title}
                </span>
                <span className="text-[7px] md:text-[11px] 2xl:text-lg text-purple-text font-medium">
                  ${item.price}
                </span>
              </div>
             
              <div className="flex items-center gap-1 md:gap-2">
                <button
                  onClick={() => dispatch(decreaseQty(item))}
                  className="px-1 md:px-2 md:py-0.5 lg:py-0 bg-pink-100 hover:bg-pink-200 text-pink-700 text-[10px] md:text-xs lg:text-md 2xl:text-2xl rounded"  >
                  −
                </button>
                <span className="text-[8px] md:text-xs 2xl:text-xl font-bold">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQty(item))}
                  className="px-1 md:px-2 md:py-0.5 lg:py-0 bg-pink-100 hover:bg-pink-200 text-pink-700 text-[10px] md:text-xs lg:text-md 2xl:text-2xl rounded" >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length> 0 && (
      <h2
      onClick={() => {
        handleClearCart();
      }} className="text-pink-700 text-[10px] md:text-xs 2xl:text-xl hover:underline text-center mt-2">{lang[langValue].clearCart}</h2> )}

    </div>
  );
};

export default Cart;
