import { Link } from 'react-router-dom'
import { FaEnvelope } from 'react-icons/fa'

const ResetPassword = () => {
  return (
    <>
      <div className="pb-5 flex flex-col gap-5">
        <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input type="email" placeholder="johndoe@email.com" className="bg-[#D4D4D4] p-2 pl-10 rounded-3xl shadow-sm font-lora text-primaryText w-70 h-10" />
        </div>

        <button className="bg-burgundy hover:bg-gold p-1 px-6 rounded-2xl shadow-sm">
            <p className="font-lora text-brand">Reset password</p>
        </button>

        <Link to="/auth/login" className="font-lora text-primaryText text-center hover:underline">Back to Log in</Link>
      </div>
    </>
  )
}

export default ResetPassword