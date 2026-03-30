import { FaStar } from "react-icons/fa"

interface CardProp {
  name: string,
  starCount: number,
  title: string,
  details: string
}

const TestimonialCard = ({
  name,
  starCount,
  title,
  details
}: CardProp) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(word => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase()
  }
  return (
    <div className="border-3 border-gray-400 bg-white rounded-2xl p-4">
      <div className="flex items-center gap-2">
        <div className="bg-gold p-2 rounded-full text-brand font-didone size-12 flex items-center justify-center"> 
          {getInitials(name)}
        </div>
        <div className="font-didone text-primaryText text-2xl">{name}</div>
      </div>
      
      <div className="my-3 flex gap-1">
        {Array.from({ length: starCount }, (_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      </div>
      
      <div className="text-primaryText font-didone">
        <p className="font-bold text-lg">{title}</p>
        <p className="font-sans">{details}</p>
      </div>

    </div>
  )
}

export default TestimonialCard