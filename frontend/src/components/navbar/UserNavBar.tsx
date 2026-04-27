import { Link, useNavigate } from "react-router-dom"
import logo from '@/assets/wf_logo.png'
import {
  FaCartShopping,
  FaRegCircleUser,
} from 'react-icons/fa6'
import { MdMenu } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { logoutUser } from "../../store/slices/authSlice"

const UserNavBar = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.auth.user)

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
          <div className="dropdown dropdown-end">
            <div tabIndex={0}>
              <FaRegCircleUser className="text-2xl" />
            </div>
            <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm mt-5">
              {user ? (
                <>
                  <li><Link to="">Profile</Link></li>
                  <li><Link to="">Settings</Link></li>
                  <li>
                    <button
                      onClick={async () => {
                        await dispatch(logoutUser())
                        localStorage.removeItem('token') 
                        navigate('/auth/login')
                      }}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li><Link to="/auth/login">Login</Link></li>
                  <li><Link to="/auth/signup">Register</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button>
            <FaCartShopping className="text-2xl" />
          </button>
          <div className="dropdown dropdown-center">
            <div tabIndex={0}>
              <FaRegCircleUser className="text-2xl" />
            </div>
            <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm mt-5">
              {
                user ?
                  (
                    <>
                      <li><Link to="">Profile</Link></li>
                      <li><Link to="">Settings</Link></li>
                      <li>
                        <button 
                          onClick={async () => {
                              await dispatch(logoutUser())
                              localStorage.removeItem('token') 
                              navigate('/auth/login')
                          }}>
                            Logout
                        </button>
                      </li>
                    </>
                  )
                :
                  (
                    <>
                      <li><Link to="/auth/login">Login</Link></li>
                      <li><Link to="/auth/signup">Register</Link></li>
                    </>
                  )
              }
              
            </ul>
          </div>

          <div className="md:hidden dropdown dropdown-end">
            <div tabIndex={0}>
              <MdMenu className="text-3xl" />
            </div>
            <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm mt-5">
              <li><Link to="#products">Products</Link></li>
              <li><Link to="#about">About</Link></li>
              <li><Link to="#deals">Deals</Link></li>
              <li><Link to="#location">Location</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default UserNavBar