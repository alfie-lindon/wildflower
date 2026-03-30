import logo from '@/assets/wf_logo.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const UserFooter = () => {
  return (
    <footer id='footer' className="bg-white py-6 md:py-12 px-4 md:px-30">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-8">

        {/* Left Section */}
        <div className="flex flex-col justify-between gap-6 items-center md:items-start">

          <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center md:items-start">

            {/* Follow Us */}
            <div className='hidden md:block'>
              <p className="font-playfair">
                <b>Follow us</b><br />
                Facebook<br />
                Instagram
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="font-playfair">
                <b>Contact</b><br />
                09754463215<br />
                johndoe@gmail.com
              </p>
            </div>

            {/* Location */}
            <div>
              <p className="font-playfair">
                <b>Location</b><br />
                701 N Washington Ave Suite 700,<br />
                Metro Manila, Quezon City 1127
              </p>
            </div>

          </div>

          {/* Social icons for mobile */}
          <div className='md:hidden flex gap-4 text-2xl'>
            <FaFacebookF />
            <FaInstagram />
          </div>

          <p className="md:mt-30">
            @2025 Wildflower Brewing Co.
          </p>
        </div>

        {/* Right Section */}
        <div className="hidden md:block">
          <img
            src={logo}
            alt="Footer logo"
            className="w-40"
          />
        </div>

      </div>
    </footer>
  )
}

export default UserFooter