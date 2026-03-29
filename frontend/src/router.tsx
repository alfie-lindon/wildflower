import { 
  Route,
  createBrowserRouter, 
  createRoutesFromElements,
} from "react-router-dom";
import UserLayout from './layouts/UserLayout'
import Home from "./pages/users/home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <UserLayout /> } >
      <Route index element={ <Home /> } />
    </Route>
  )
)

export default router