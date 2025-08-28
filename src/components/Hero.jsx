import heroImg from "/burger.png"; 

function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 bg-white">
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-8xl font-extrabold text-green-800">
          FRESH<span className="text-red-500"> FOOD</span>
        </h1>
        <p className="text-gray-600 max-w-md">
          Fresh burgers, crispy fries, and the best fast food in town. 
          Taste the difference today!
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg">
            Add to Cart
          </button>
          <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl shadow-lg">
            Book a Table
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={heroImg}
          alt="Hero Food"
          className="max-w-sm md:max-w-lg "
        />
      </div>
    </section>
  );
}

export default Hero;
