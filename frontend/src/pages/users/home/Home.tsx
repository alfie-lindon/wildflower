import Hero from "./components/Hero"
import OurProducts from "./components/OurProducts"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      {/* Intro Hero */}
      <Hero />

      {/* Our Products */}
      <OurProducts />

      {/* <div
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
      </div> */}
    </div>
  )
}

export default Home