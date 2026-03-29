import { Link } from "react-router-dom"
import Hero from "./components/Hero"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      {/* Intro Hero */}
      <Hero />

      {/* Our Products */}
      <div id="deals" className="pt-30 w-[80%]">
        <div className="text-center pb-20">
          <p className="text-[64px] font-playfair font-bold text-primaryText">Our Products</p>
          <p className="text-[40px] font-playfair italic text-primaryText">Crafted with Precision</p>
        </div>

        <div className="flex row justify-between">
          <a href="#modal" className="p-6 rounded-xl flex flex-col items-center text-center border-transparent hover:border-[#D4D4D4] border-3 group">
            <img src="@/assets/wine_nobg.png" alt="Produc image" className="w-30" />
            <p className="text-[25px] font-lora font-bold text-primaryText">Wildflower Mead</p>
            <p className="text-[25px] font-lora text-gold">10% - 12% ABV</p>
            <p className="text-[25px] font-lora font-bold text-primaryText">₱599</p>
            <button className="p-1 px-3 rounded-lg mt-3 hidden group-hover:block bg-burgundy hover:bg-gold">
              <p className="text-xl font-playfair font-bold text-brand">ADD TO CART</p>
            </button>
          </a>

          <a href="#modal" className="p-6 rounded-xl flex flex-col items-center text-center border-transparent hover:border-[#D4D4D4] border-3 group">
            <img src="@/assets/wine_nobg.png" alt="Produc image" className="w-30" />
            <p className="text-[25px] font-lora font-bold text-primaryText">Wildflower Mead</p>
            <p className="text-[25px] font-lora text-gold">10% - 12% ABV</p>
            <p className="text-[25px] font-lora font-bold text-primaryText">₱599</p>
            <button className="p-1 px-3 rounded-lg mt-3 hidden group-hover:block bg-burgundy hover:bg-gold">
              <p className="text-xl font-playfair font-bold text-brand">ADD TO CART</p>
            </button>
          </a>

          <a href="#modal" className="p-6 rounded-xl flex flex-col items-center text-center border-transparent hover:border-[#D4D4D4] border-3 group">
            <img src="@/assets/wine_nobg.png" alt="Produc image" className="w-30" />
            <p className="text-[25px] font-lora font-bold text-primaryText">Wildflower Mead</p>
            <p className="text-[25px] font-lora text-gold">10% - 12% ABV</p>
            <p className="text-[25px] font-lora font-bold text-primaryText">₱599</p>
            <button className="p-1 px-3 rounded-lg mt-3 hidden group-hover:block bg-burgundy hover:bg-gold">
              <p className="text-xl font-playfair font-bold text-brand">ADD TO CART</p>
            </button>
          </a>

          <a href="#modal" className="p-6 rounded-xl flex flex-col items-center text-center border-transparent hover:border-[#D4D4D4] border-3 group">
            <img src="@/assets/wine_nobg.png" alt="Product image" className="w-30" />
            <p className="text-[25px] font-lora font-bold text-primaryText">Wildflower Mead</p>
            <p className="text-[25px] font-lora text-gold">10% - 12% ABV</p>
            <p className="text-[25px] font-lora font-bold text-primaryText">₱599</p>
            <button className="p-1 px-3 rounded-lg mt-3 hidden group-hover:block bg-burgundy hover:bg-gold">
              <p className="text-xl font-playfair font-bold text-brand">ADD TO CART</p>
            </button>
          </a>
        </div>

        <div className="text-center mt-10 mb-20">
          <Link to="/products" className="text-[25px] font-lora text-gold hover:underline">View More</Link>
        </div>
      </div>

      <div
        id="about"
        className="w-full min-h-[800px] bg-cover bg-center bg-no-repeat bg-fixed text-center grid place-items-center text-brand font-lora p-15"
        // :style="{ backgroundImage: `url(${bgImage})` }"
      >
        <h1 className="text-[64px] font-bold mb-10">About Wildflower Brewing Co.</h1>
        <div className="text-[35px] space-y-6">
          <p>
            At Wildflower Brewing Co., we believe the best drinks are crafted with passion
            and inspired by tradition. Founded on November 22, 2024, our journey began
            with a simple mission:<br /> to bring exceptional, flavorful beverages to our community.
          </p>

          <p>
            We specialize in a diverse and high-quality range, from smooth, traditional mead wine
            to an array of fine craft beers, including a crisp Pale Lager, a refreshing Belgian
            Witbier, and a clean Japanese Lager.
          </p>

          <p>
            <strong>Our Vision:</strong> To be the most cherished craft brewery, uniting people
            through the art of exceptional brewing and the joy of shared experience. <br />
            Raise a glass with us, and taste the difference that dedication makes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home