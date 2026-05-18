import { useEffect, useState } from "react"
import api from "../../../lib/axios"
import Spinner from '../../../components/Spinner'

interface Product {
  id: number
  name: string
  description: string
  price: number
  quantity: number
  image_url: string
}

interface FormProps {
  row: Product | null
  mode: string
  title: string
}

const initFormData = {
  name: '',
  description: '',
  price: '',
  quantity: 1,
  image_url: ''
}

const Form = ({row, title, mode}: FormProps) => {
  const [formData, setFormData] = useState(initFormData)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value}))
  }

  useEffect(() => {
    const loadForm = async () => {
      if (mode === 'new'){
        setFormData(initFormData)
      }else{
        setLoading(true)
        try {
          const { data } = await api.get(`/product/getProductById/${row?.id}`)
          setFormData({
            name: data.product.name,
            description: data.product.description,
            price: data.product.price,
            quantity: data.product.quantity,
            image_url: data.product.image_url ?? ''
          })
        } catch (error) {
          console.log(`Something went wrong ${error}`)
        } finally{
          setLoading(false)
        }
      }
    }
    loadForm()
  }, [mode, row])

  const submitForm = async(e: React.FormEvent) => {
    e.preventDefault()
    // To follow
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
          { loading ?
            <Spinner loading={loading} />
            :
            <>
              <div className="grid grid-cols-2 gap-2 my-5">
                <div className="flex flex-col gap-2">
                  <input 
                    value={formData.name} 
                    onChange={handleChange}
                    name="name"
                    type="text" 
                    placeholder="Name" 
                    className="input" 
                    readOnly={mode === 'view'}
                  />
                  <input 
                    value={formData.price} 
                    onChange={handleChange}
                    name="price"
                    type="text" 
                    placeholder="Price" 
                    className="input" 
                    readOnly={mode === 'view'}
                  />
                  <input 
                    value={formData.quantity} 
                    onChange={handleChange}
                    name="quantity"
                    type="text" 
                    placeholder="Quantity" 
                    className="input" 
                    readOnly={mode === 'view'}
                  />
                  {mode !== 'view' &&
                    (
                      <input 
                        value={formData.image_url} 
                        onChange={handleChange}
                        name="image_url" 
                        type="file" 
                        className="file-input" 
                      />
                    ) 
                  }
                </div>

                <textarea 
                  value={formData.description} 
                  onChange={handleChange}
                  name="description"
                  placeholder="Description" 
                  className="textarea h-full" rows={4}
                  readOnly={mode === 'view'}
                />
              </div>
              <div className="modal-action">
                <form method="dialog" className="flex gap-2">
                  {
                    mode !== 'view' && (
                      <button type="submit" className="btn bg-burgundy text-white">Save</button>
                    )
                  }
                  <button className="btn">Close</button>
                </form>
              </div>
            </>
          }
        </form>
      </div>
    </dialog>
  )
}

export default Form