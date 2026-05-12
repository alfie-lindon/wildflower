import { useState } from "react"

interface FormProps {
  mode: string
  title: string
}

const Form = ({title, mode}: FormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    is_admin: 0
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value}))
  }

  const submitForm = async() => {
    
  }
  
  return (
    <dialog id="my_form" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          {mode === 'new' ? `Add ${title}` 
            : mode === 'edit' ? `Edit ${title}`
            : `View ${title}`
          }
        </h3>
        <form onSubmit={submitForm}>
          <div className="grid grid-cols-2 gap-2 my-5">
            <input name="name" value={formData.name} onChange={handleChange}
              type="text" placeholder="Name" className="input" 
            />
            <input name="email" value={formData.email} onChange={handleChange}
              type="text" placeholder="Email" className="input" 
            />
            <input name="phone" value={formData.phone} onChange={handleChange}
              type="text" placeholder="Phone" className="input" 
            />
            <select 
              name="is_admin" value={formData.is_admin} onChange={handleChange}
              className="select"
            >
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>
          <div className="modal-action">
            <form method="dialog" className="flex gap-2">
              {
                mode !== 'view' && (
                  <button 
                    type="submit"
                    className="btn bg-burgundy text-white"
                    // onClick={}
                  >
                    Save
                  </button>
                )
              }
              <button className="btn">Close</button>
            </form>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default Form