import { AboutUs } from "../about/AboutUs"
import Testimonial from "../testimonials/Testimonial"
import Hero from "./components/Hero"
import OurProducts from "./components/OurProducts"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Hero />
      <OurProducts />
      <AboutUs />
      <Testimonial />
    </div>
  )
}

export default Home