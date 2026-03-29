import { Link } from "react-router-dom"
import productImage from '@/assets/wine_nobg.png'
import ProductCard from "../../../../components/ProductCard"

const OurProducts = () => {
  return (
    <div id="deals" className="pt-30 w-[80%]">
      <div className="text-center pb-20">
        <p className="text-[54px] md:text-[64px] font-playfair font-bold text-primaryText">Our Products</p>
        <p className="text-[30px] md:text-[40px] font-playfair italic text-primaryText">Crafted with Precision</p>
      </div>

      {/* Will loop through latest products from backend in future */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6 md:col-span-3">
          <ProductCard 
            productImage={productImage}
            name="Pale Lager"
            details="10% - 12% ABV"
            price={599}
          />
        </div>

        <div className="col-span-6 md:col-span-3">
          <ProductCard 
            productImage={productImage}
            name="Pale Lager"
            details="10% - 12% ABV"
            price={599}
          />
        </div>

        <div className="col-span-6 md:col-span-3">
          <ProductCard 
            productImage={productImage}
            name="Pale Lager"
            details="10% - 12% ABV"
            price={599}
          />
        </div>

        <div className="col-span-6 md:col-span-3">
          <ProductCard 
            productImage={productImage}
            name="Pale Lager"
            details="10% - 12% ABV"
            price={599}
          />
        </div>
      </div>

      <div className="text-center mt-10 mb-20">
        <Link to="/products" className="text-[25px] font-lora text-gold hover:underline">View More</Link>
      </div>
    </div>
  )
}

export default OurProducts