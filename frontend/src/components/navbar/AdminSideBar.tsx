import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { MdOutlineSpaceDashboard, MdLogout } from "react-icons/md"
import { FaUsers } from "react-icons/fa"
import { LuPackage } from "react-icons/lu"
import { IoReceiptOutline, IoSettingsOutline  } from "react-icons/io5"
import { FiSidebar } from "react-icons/fi";
import logoWord from '@/assets/wf_logoword.png'
import { useAppDispatch } from "../../store/hooks"
import { logoutUser } from "../../store/slices/authSlice"

const navItems = [
  { to: "/admin/dashboard", icon: MdOutlineSpaceDashboard, label: "Dashboard" },
  { to: "/admin/users",     icon: FaUsers, label: "Users"     },
  { to: "/admin/products",  icon: LuPackage, label: "Products"  },
  { to: "/admin/orders",    icon: IoReceiptOutline, label: "Orders"    },
  { to: "/admin/settings",  icon: IoSettingsOutline, label: "Settings"  },
]

const AdminSideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <aside
      className={`flex flex-col h-full bg-white border-r border-gray-300 shadow-sm text-primaryText p-2
        transition-all duration-300 ease-in-out
        ${isExpanded ? "w-56" : "w-16"}`}
    >
      <div className={`flex items-center p-3
        ${isExpanded ? "justify-between" : "flex-col gap-2 justify-center"}`}
      >
        {isExpanded &&
          <img
            src={logoWord}
            alt="Logo"
            className={isExpanded ? "w-28" : "w-8"}
          />
        }
        <button
          onClick={() => setIsExpanded(prev => !prev)}
          className="p-1 rounded hover:bg-gray-100"
        >
          {<FiSidebar className="text-lg shrink-0" />}
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-2 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon

          return(
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition-colors
              ${isExpanded ? "justify-start" : "justify-center"}`}
            >
              <Icon className="text-xl shrink-0" />
              {isExpanded && (
                <span className="text-sm font-medium whitespace-nowrap overflow-hidden">
                  {item.label}
                </span>
              )}
            </Link>
          )
        })}
      </nav>
      
      <div className="flex flex-col gap-6 p-2 border-t border-gray-300">
        <div className="flex items-center gap-3">
          <img 
            src="https://i.pravatar.cc" 
            alt="Admin photo" 
            className="rounded-full w-8 h-8 shrink-0"
          />
          <div className={`overflow-hidden transition-all duration-300 ease-in-out
            ${isExpanded ? "w-36 opacity-100" : "w-0 opacity-0"}`}
          >
            <p className="font-bold leading-tight whitespace-nowrap">Admin</p>
            <span className="text-sm text-gray-500 whitespace-nowrap">Admin Manager</span>
          </div>
        </div>
        <button 
          className={`flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition-colors
          ${isExpanded ? "justify-start" : "justify-center"}`}
          onClick={async () => {
            await dispatch(logoutUser())
            localStorage.removeItem('token')
            navigate('/auth/login')
          }}
        >
          <MdLogout className="text-xl shrink-0" />
          <span className={`text-sm font-medium whitespace-nowrap overflow-hidden
            transition-all duration-300 ease-in-out
            ${isExpanded ? "w-16 opacity-100" : "w-0 opacity-0"}`}
          >
            Log out
          </span>
        </button>
      </div>

    </aside>
  )
}

export default AdminSideBar