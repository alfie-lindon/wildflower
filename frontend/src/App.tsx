import { RouterProvider } from "react-router-dom"
import router from "./router"
import { useEffect } from "react"
import { useAppDispatch } from "./store/hooks"
import { fetchUser, setInitialized } from "./store/slices/authSlice"

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token){
      dispatch(fetchUser())
    }else{
      dispatch(setInitialized())
    }
  }, [dispatch])

  return <RouterProvider router={router} />
}

export default App