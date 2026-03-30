import { useState } from "react"
import { Link } from "react-router-dom"
import logo from '@/assets/wf_logo.png'
import {
  FaCartShopping,
  FaRegCircleUser,
} from 'react-icons/fa6'
import { MdMenu } from 'react-icons/md'

const UserNavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="mx-auto flex justify-between items-center p-5">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-12 md:w-10" />
          </Link>
        </div>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex gap-10 font-didone text-xl text-primaryText">
          <Link to="/products" className="hover:underline">Products</Link>
          <a href="#about" className="hover:underline">About</a>
          <a href="#deals" className="hover:underline">Deals</a>
          <a href="#footer" className="hover:underline">Location</a>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-6">
          <button>
            <FaCartShopping className="text-2xl" />
          </button>
          <button>
            <FaRegCircleUser className="text-2xl" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button>
            <FaCartShopping className="text-2xl" />
          </button>

          <button>
            <FaRegCircleUser className="text-2xl" />
          </button>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="font-didone text-primaryText md:hidden flex flex-col items-center gap-4 py-4 border-t bg-white">
          <Link to="#products" onClick={() => setOpen(false)}>Products</Link>
          <Link to="#about" onClick={() => setOpen(false)}>About</Link>
          <Link to="#deals" onClick={() => setOpen(false)}>Deals</Link>
          <Link to="#location" onClick={() => setOpen(false)}>Location</Link>
        </div>
      )}
    </nav>
  )
}

export default UserNavBar