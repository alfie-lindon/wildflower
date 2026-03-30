import TestimonialCard from "./components/TestimonialCard"

const Testimonial = () => {
  return (
    <>
      <div className="text-center py-20">
        <p className="text-[44px] md:text-[54px] font-playfair font-bold text-primaryText">Testimonials</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-9 md:px-20 mb-20">
        <TestimonialCard
          name="Kang Peñas"
          starCount={5}
          title="Hoping to order again!"
          details="Tried all 3 of their craft beers and loved each one! The Japanese lager is a personal favorite. Ordering was very easy and straightforward as well."
        />
        <TestimonialCard
          name="Donita Garcia"
          starCount={4}
          title="Perfect for parties"
          details="The self-serve tap bar and their wine were a total hit!  Our guests absolutely loved it! Highly recommended for parties! We’ll surely book them again."
        />
        <TestimonialCard
          name="Alfie Adrales"
          starCount={5}
          title="Top-notch"
          details="Wildflower Brewing Co. is a fantastic find! Their mead wine is wonderfully smooth, and the craft beers especially the Pale Lager are top-notch."
        />
      </div>
    </>
  )
}

export default Testimonial