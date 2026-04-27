import { RouterProvider } from "react-router-dom"
import router from "./router"
import { useEffect } from "react"
import { useAppDispatch } from "./store/hooks"
import { fetchUser } from "./store/slices/authSlice"

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return <RouterProvider router={router} />
}

export default App