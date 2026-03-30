import { 
  Route,
  createBrowserRouter, 
  createRoutesFromElements,
} from "react-router-dom";
import UserLayout from './layouts/UserLayout'
import Home from "./pages/users/home/Home";
import Products from "./pages/users/products/Products";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ResetPassword from "./pages/auth/ResetPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={ <UserLayout /> } >
        <Route index element={ <Home /> } />
        <Route path="/products" element={ <Products /> } />
      </Route>

      <Route path="/auth" element={ <AuthLayout /> } >
        <Route path="login" element={ <Login /> } />
        <Route path="signup" element={ <SignUp /> } />
        <Route path="reset-password" element={ <ResetPassword /> } />
      </Route>
    </>
  )
)

export default router