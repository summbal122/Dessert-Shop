import IMG from "../../images/chef.png"
const OurStorySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4  bg-main/80 p-10 px-5 lg:px-20 2xl:px-30 place-items-center ">
     
     <img className="w-36 md:w-lg 2xl:w-2xl col-span-2 "   src={IMG}/>
      <div className="flex flex-col items-center gap-4 col-span-2">
        <div className="space-y-1 2xl:space-y-5 text-center ">
         <h1 className="text-xl md:ext-4xl 2xl:text-6xl font-bold">
          Our Story
         </h1>
         <h2 className="text-xs md:text-sm 2xl:text-xl">
          Since 2015
         </h2>
        </div>

        <p className="text-xs lg:text-lg 2xl:text-4xl">
          What started in a cozy home kitchen by Sumbal Ijaz, with a single tray of chocolate chip cookies, has now become a haven for dessert lovers across the city. Born from her passion for sweet creations and a love for sharing joy, Sumbal founded our bakery in 2015 with one heartfelt goal — to bring handcrafted, heartwarming desserts to every table.
          From gooey cookies and creamy cheesecakes to soft sponge cakes topped with fresh fruit, every treat we bake is made with love, quality ingredients, and a sprinkle of happiness.
          We believe dessert isn’t just food — it’s a memory waiting to happen.
        </p>
      </div>

    </div>
  )
}

export default OurStorySection;
