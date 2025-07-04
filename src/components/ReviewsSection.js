import { useState } from "react";
import IMG from "../../images/logo.png"
import { useSelector } from "react-redux";
import lang from "../languageConstants";

const ReviewsSection = () => {
   const langValue = useSelector(store => store.lang.lang)
   const [current, setCurrent] = useState(0);
   const reviews = lang[langValue].reviews;
   const handleNext = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      className="bg-pink-700/80 text-secondary px-3 md:px-6 py-16 2xl:py-24"
      id="reviews" >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Carousel */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 border border-pink-200 text-center">
          <img
            src={IMG} alt="logo"
            className="w-14 h-14 mx-auto mb-2"/>
          <h3 className=" text-lg lg:text-3xl font-Cookie text-pink-700">{lang[langValue].reviewsTitle}</h3>
          <p className="text-xs lg:text-sm 2xl:text-lg font-Doppio text-purple-text min-h-[100px]">
            “{reviews[current].text}”
          </p>
          <p className="font-bold 2xl:text-xl font-Doppio text-pink-800">- {reviews[current].name}</p>
          <div className="flex justify-center gap-4 pt-3">
            <button
              onClick={handlePrev}
              className=" text-pink-800 hover:bg-pink-300 2xl:text-4xl"
            >
             <i className="fa-regular fa-circle-left"></i>
            
            </button>
            <button
              onClick={handleNext}
              className="hover:bg-pink-300 text-pink-800  2xl:text-4xl "
            >
              <i className="fa-regular fa-circle-right"></i>
            </button>
          </div>
        </div>

        {/* Write a Review Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 2xl:p-12 space-y-5 border border-pink-200">
          <h3 className="text-lg lg:text-xl 2xl:text-3xl font-semibold text-pink-700 text-center">
            {lang[langValue].writeReview}
          </h3>
          <form className="space-y-4 font-Doppio">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder={lang[langValue].firstName}
                className="w-1/2 border text-xs lg:text-sm 2xl:text-lg border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="text"
                placeholder={lang[langValue].lastName}
                className="w-1/2 border border-gray-300 text-xs lg:text-sm 2xl:text-lg rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <textarea
              rows="4"
              placeholder={lang[langValue].reviewPlaceholder}
              className="w-full border border-gray-300 text-xs md:text-sm 2xl:text-lg rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-2 text-xs lg:text-sm 2xl:text-xl rounded-full hover:bg-pink-700 transition hover:cursor-pointer"
              >
               {lang[langValue].submitButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
