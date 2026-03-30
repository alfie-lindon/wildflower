import { motion } from 'motion/react'
interface BrewCardProps {
  title: string
  description: string
  image: string
  delay?: number
}
export function BrewCard({
  title,
  description,
  image,
  delay = 0,
}: BrewCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-50px',
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      className="group flex flex-col bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brandLight"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brew-dark/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      <div className="p-8 flex flex-col flex-grow text-center bg-white relative">
        {/* Decorative top border for the text area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gold" />

        <h3 className="font-playfair text-2xl text-primaryText mb-4 mt-2">
          {title}
        </h3>
        <p className="text-primaryText/80 font-sans leading-relaxed text-sm flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
