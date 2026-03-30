import { motion } from 'motion/react'
import { LuWheat, LuQuote } from 'react-icons/lu'
import { BrewCard } from './components/BrewCard'
export function AboutUs() {
  return (
    <div id='about' className="bg-brand w-full font-sans selection:bg-gold selection:text-white">

      {/* Section 1: Intro */}
      <section className="relative bg-primaryText text-brand overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-gold" />
                <span className="text-gold uppercase tracking-widest text-sm font-semibold">
                  Our Story
                </span>
              </div>
              <h1 className="font-serif text-5xl lg:text-7xl mb-8 leading-tight">
                Crafted with{' '}
                <span className="text-gold italic">passion.</span>
                <br />
                Inspired by{' '}
                <span className="text-gold italic">tradition.</span>
              </h1>
              <p className="text-lg text-brandLight/80 leading-relaxed mb-10 font-light">
                At Wildflower Brewing Co., we believe the best drinks are
                crafted with passion and inspired by tradition. Founded on
                November 22, 2024, our journey began with a simple mission: to
                bring exceptional, flavorful beverages to our community.
              </p>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/30 text-gold">
                <LuWheat size={24} strokeWidth={1.5} />
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="relative h-[400px] lg:h-[700px] rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1559526642-c3f001ea68ee?w=1200&q=80"
                alt="Brewery interior with wooden barrels"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-burgundyDark/20 mix-blend-multiply" />
              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-brandLight/30" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-brandLight/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Brew */}
      <section className="py-24 lg:py-32 bg-brand relative">
        {/* Subtle background texture/pattern could go here */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <LuWheat
              className="mx-auto text-gold mb-6"
              size={36}
              strokeWidth={1}
            />
            <h2 className="font-didone text-4xl lg:text-5xl text-primaryText mb-6">
              What We Brew
            </h2>
            <p className="text-primaryText/80 text-lg leading-relaxed">
              We specialize in a diverse and high-quality range, from smooth,
              traditional mead wine to an array of fine craft beers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <BrewCard
              title="Traditional Mead"
              description="Smooth, honey-based wine crafted with ancient techniques for a rich, timeless flavor profile."
              image="https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?w=800&q=80"
              delay={0.1}
            />
            <BrewCard
              title="Belgian Witbier"
              description="A refreshing, cloudy wheat beer brewed with coriander and orange peel for a bright, citrusy finish."
              image="https://images.unsplash.com/photo-1436076863939-06870fe779c2?q=80"
              delay={0.2}
            />
            <BrewCard
              title="Crisp Lagers"
              description="Featuring our signature Pale Lager and a clean, perfectly balanced Japanese Lager."
              image="https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Section 3: Vision */}
      <section className="relative py-32 bg-burgundy text-brand overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold blur-[100px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gold blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <LuQuote
              className="mx-auto text-gold/50 mb-10 w-16 h-16"
              strokeWidth={1}
            />
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl leading-relaxed lg:leading-tight mb-14 italic font-light text-brandLight">
              "To be the most cherished craft brewery, uniting people through
              the art of exceptional brewing and the joy of shared experience.
              Raise a glass with us, and taste the difference that dedication
              makes."
            </h2>

            <div className="flex flex-col items-center justify-center gap-6">
              <div className="h-[1px] w-24 bg-gold/50" />
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gold/20 bg-burgundyDark backdrop-blur-sm shadow-xl">
                <span className="text-gold text-xs font-bold tracking-widest uppercase">
                  Founded
                </span>
                <span className="w-1 h-1 rounded-full bg-gold/50" />
                <span className="text-brandLight text-sm font-medium tracking-wide">
                  November 22, 2024
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}