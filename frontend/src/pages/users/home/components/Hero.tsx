import wineHero from '@/assets/wine_hero.png'

const Hero = () => {
  return (
    <div className="px-10 md:px-40 pt-40 pb-20 w-full">
      <div className="flex items-center">
        <div className="text-center mr-10">
          <p className="text-[54px] md:text-[64px] font-playfair font-bold text-primaryText">The Craft of Celebration</p>
          <p className="text-[30px] md:text-[40px] font-playfair italic text-primaryText">Discover a curated collection of artisanal wines and small-batch brews</p>
          <p className="text-[15px] md:text-[25px] font-playfair text-primaryText mb-2">From cellar staples to exclusive seasonal releases, <br /> find your next perfect pour right here.</p>
          <button className="bg-burgundy p-1 px-6 rounded-lg">
              <p className="text-xl font-playfair font-bold text-brand">SHOP NOW</p>
          </button>
        </div>
        <div className="hidden md:block">
          <img src={wineHero} alt="Wine hero image" className="w-10 md:w-60"/>
        </div>
      </div>
    </div>
  )
}

export default Hero