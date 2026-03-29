import { Link } from "react-router-dom"
import logo from '@/assets/wf_logoword.png'
import {
  FaCartShopping,
  FaRegCircleUser
} from 'react-icons/fa6'

const UserNavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white">
      <div className="container mx-auto flex justify-between items-center p-7">

        {/* Logo */}
        <div className="flex">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-40" />
          </Link>
        </div>

        {/* NavLinks */}
        <div className="flex gap-18 pr-20 font-didone text-xl text-primaryText">
          <Link to="#products" className="relative hover:underline">Products</Link>
          <Link to="#about" className="relative hover:underline">About</Link>
          <Link to="#deals" className="relative hover:underline">Deals</Link>
          <Link to="#location" className="relative hover:underline">Location</Link>
        </div>

        {/* Cart and User */}
        <div className="relative flex gap-6">
          <button>
            <FaCartShopping className="text-2xl" />
          </button>
          <button >
            <FaRegCircleUser className="text-2xl" />
          </button>

          {/* <div 
            v-if="isOpen"
            className="absolute right-0.5 mt-12 w-40 bg-white border border-gray-300 rounded-lg shadow-lg p-2 flex flex-col"
          >
            <Link to="/auth/login" className="text-left px-3 py-2 hover:bg-gray-100 rounded">Sign In</Link>
            <Link to="/auth/signup" className="text-left px-3 py-2 hover:bg-gray-100 rounded">Sign Up</Link>
          </div> */}
        </div>

      </div>
    </nav>
  )
}

export default UserNavBar