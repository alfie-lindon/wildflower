interface ProductProps {
  productImage: string,
  name: string,
  details: string,
  price: number
} 

const ProductCard = ({productImage, name, details, price}: ProductProps) => {
  return (
    <>
      <a href="#modal" className="text-[20px] md:text-[25px] p-6 rounded-xl flex flex-col items-center text-center border-transparent hover:border-[#D4D4D4] border-3 group">
        <img src={productImage} alt="Product image" className="w-30" />
        <p className="font-lora font-bold text-primaryText">{name}</p>
        <p className="font-lora text-gold">{details}</p>
        <p className="font-lora font-bold text-primaryText">₱{price}</p>
        <button className="p-2 px-4 rounded-lg mt-3 hidden group-hover:flex items-center justify-center bg-burgundy hover:bg-gold">
          <span className="text-[20px] md:text-[25px] font-playfair font-bold text-brand">
            ADD TO CART
          </span>
        </button>
      </a>
    </>
  )
}

export default ProductCard