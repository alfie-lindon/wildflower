import { Link } from "react-router-dom"
import logo from '@/assets/wf_logoword.png'

const AuthNavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white">
      <div className="container mx-auto flex justify-between items-center p-3">

        {/* Logo */}
        <div className="flex">
          <Link to="/">
            <img alt="logo" src={logo} className="w-40" />
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default AuthNavBar