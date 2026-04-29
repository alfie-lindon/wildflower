import { useAppSelector } from "../store/hooks"
import { Navigate, Outlet } from "react-router-dom"

const AdminRoute = () => {
    const user = useAppSelector(state => state.auth.user)
    const isInitialized = useAppSelector(state => state.auth.isInitialized)
    // If user is admin go to protected route, else go to home
    if (!isInitialized) return null
    if (!user) return <Navigate to="/auth/login" replace />  // not logged in
    if (!user.is_admin) return <Navigate to="/" replace />   // logged in but not admin

    return <Outlet />
}

export default AdminRoute