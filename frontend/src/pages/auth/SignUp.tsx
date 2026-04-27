import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { 
  FaUserCircle,
  FaEnvelope,
  FaLock,
  FaGoogle, 
  FaFacebook

} from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import api from "../../lib/axios"
import axios from 'axios'
import { setUser } from "../../store/slices/authSlice"
import { useAppDispatch } from "../../store/hooks"

const SignUp = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { data } = await api.post('/register', formData)
      dispatch(setUser(data.user))
      localStorage.setItem('token', data.token)
      navigate('/') //Back to home
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Something went wrong')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="pb-5">
        {error && <p className="text-red-500 text-sm font-lora mb-3">{error}</p>}
        <form onSubmit={submitForm} className="flex flex-col gap-5">
          <div className="relative">
            <FaUserCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input name="name" value={formData.name} onChange={handleChange}
              type="text" 
              placeholder="John Doe" 
              className="bg-[#D4D4D4] p-2 pl-10 rounded-3xl shadow-sm font-lora text-primaryText w-70 h-10" 
            />
          </div>
          <div className="relative">
            <BsTelephone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input name="phone" value={formData.phone} onChange={handleChange}
              placeholder="1234-456-7890" 
              className="bg-[#D4D4D4] p-2 pl-10 rounded-3xl shadow-sm font-lora text-primaryText w-70 h-10" 
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input name="email" value={formData.email} onChange={handleChange}
              type="email" placeholder="johndoe@email.com"
              className="bg-[#D4D4D4] p-2 pl-10 rounded-3xl shadow-sm font-lora text-primaryText w-70 h-10" 
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input name="password" value={formData.password} onChange={handleChange}
              type={show ? 'text' : 'password'} placeholder="Password" 
              className="bg-[#D4D4D4] p-2 pl-10 rounded-3xl shadow-sm font-lora text-primaryText w-70 h-10" 
            />
            <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 font-lora text-sm text-gray-600"
            >
                { show ? 'Hide' : 'Show' }
            </button>
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input name="password_confirmation" value={formData.password_confirmation} onChange={handleChange}
              type={show ? 'text' : 'password'} placeholder="Confirm Password" 
              className="bg-[#D4D4D4] p-2 pl-10 rounded-3xl shadow-sm font-lora text-primaryText w-70 h-10" 
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-1/2 -translate-y-1/2 font-lora text-sm text-gray-600"
          >
              { show ? 'Hide' : 'Show' }
          </button>
        </div>
        <button type="submit" disabled={loading}
          className="bg-burgundy hover:bg-gold p-1 px-6 rounded-2xl shadow-sm">
          <p className="font-lora text-brand">{loading ? 'Signing up...' : 'Sign up'}</p>
        </button>
      </form>
    </div>

    <div className="flex justify-between">
      <button onClick={() => navigate('/auth/login')} className="text-sm font-lora text-primaryText">Log in</button>
    </div>

    <hr className="border-[#2C473C] my-3" />
    <p className="font-lora text-primaryText text-center">or sign up with</p>

    <div className="flex justify-center gap-2 my-3">
      <FaGoogle className="text-burgundy hover:text-gold" />
      <FaFacebook className="text-burgundy hover:text-gold" />
    </div>
    </>
  )
}

export default SignUp