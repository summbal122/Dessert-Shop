import { useState } from "react";
import IMG from "../../images/muffin.png";

const reviews = [
  {
    name: "Alice",
    text: "Loving all the desserts, but my most favourite is the strawberry cake!",
  },
  {
    name: "Hamza",
    text: "Absolutely in love with the chocolate fudge! Will be back for more.",
  },
  {
    name: "Nida",
    text: "The presentation, the taste, the texture – perfect in every bite.",
  },
  {
    name: "Tariq",
    text: "A fantastic variety of treats. Everything is fresh and flavorful.",
  },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      className="bg-pink-700/80 text-secondary px-3 md:px-6 py-16"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Carousel */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 border border-pink-200 text-center">
          <img
            src={IMG}
            alt="Dessert Icon"
            className="w-14 h-14 mx-auto mb-2"
          />
          <h3 className=" text-lg lg:text-2xl font-Cookie text-pink-700">What People Say</h3>
          <p className="text-xs lg:text-sm font-Doppio text-purple-text min-h-[100px]">
            “{reviews[current].text}”
          </p>
          <p className="font-bold font-Doppio text-pink-800">- {reviews[current].name}</p>
          <div className="flex justify-center gap-4 pt-3">
            <button
              onClick={handlePrev}
              className="bg-pink-200 hover:bg-pink-300 text-pink-800 rounded-full w-8 h-8 font-bold"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="bg-pink-200 hover:bg-pink-300 text-pink-800 rounded-full w-8 h-8 font-bold"
            >
              ›
            </button>
          </div>
        </div>

        {/* Write a Review Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-5 border border-pink-200">
          <h3 className="text-lg lg:text-xl font-semibold text-pink-700 text-center">
            Write a Review
          </h3>
          <form className="space-y-4 font-Doppio">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border text-xs lg:text-sm border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border border-gray-300 text-xs lg:text-sm rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Your Review"
              className="w-full border border-gray-300 text-xs md:text-sm rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-2 text-xs lg:text-sm rounded-full hover:bg-pink-700 transition"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
