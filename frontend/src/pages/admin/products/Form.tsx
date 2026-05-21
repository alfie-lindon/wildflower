import { useEffect, useRef, useState } from "react"
import api from "../../../lib/axios"
import Spinner from '../../../components/Spinner'
import { 
  LuPhilippinePeso,
  LuTrash,
  LuCloudUpload,
  LuImage 
} from 'react-icons/lu'

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
  url: string
  onSuccess: () => void
}

const initFormData = {
  name: '',
  description: '',
  price: '',
  quantity: 1,
  image_url: ''
}

const Form = ({row, title, url, mode, onSuccess}: FormProps) => {
  const [formData, setFormData] = useState(initFormData)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [quantity, setQuantity] = useState<number>(1)
  const [loading, setLoading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value}))
  }

  const handleFile = (file: File) => {
    setImageFile(file)
    setPreviewUrl(URL.createObjectURL(file))
  }

  const handleRemoveImage = () => {
    setImageFile(null)
    setPreviewUrl(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  useEffect(() => {
    const loadForm = async () => {
      if (mode === 'new'){
        setFormData(initFormData)
        setPreviewUrl(null) // clear preview on new
        setImageFile(null)  // clear file on new
      }else{
        setLoading(true)
        try {
          const { data } = await api.get(`/product/getProductById/${row?.id}`)
          setFormData({
            name: data.product.name ?? '',
            description: data.product.description ?? '',
            price: data.product.price ?? '',
            quantity: data.product.quantity ?? 1,
            image_url: data.product.image_url ?? ''
          })
          // Set preview from existing image
          setPreviewUrl(
            data.product.image_url 
              ? `http://localhost:8000/storage/${data.product.image_url}` 
              : null
          )
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
    setLoading(true)
    try {
      const type = mode === 'new'
        ? '/store'
        : `/update/${row?.id}`

      const payload = new FormData()
      payload.append('name', formData.name)
      payload.append('description', formData.description)
      payload.append('price', formData.price)
      payload.append('quantity', String(formData.quantity))
      if (imageFile) payload.append('image', imageFile)

      await api.post(url + type, payload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      onSuccess()
    } catch (error) {
      console.log(`Something went wrong ${error}`)
    } finally{
      setLoading(false)
    }
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
              {/* Name */}
              <div className="space-y-2 my-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  value={formData.name} 
                  onChange={handleChange}
                  name="name"
                  type="text" 
                  placeholder="e.g. Pale Lager" 
                  disabled={mode === 'view'}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-shadow placeholder:text-slate-400"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-slate-700"
                >
                  Description
                </label>
                <textarea
                  value={formData.description} 
                  onChange={handleChange}
                  name="description"
                  placeholder="Describe the product..."
                  disabled={mode === 'view'}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-shadow placeholder:text-slate-400 resize-none"
                />
              </div>

              {/* Price and Quantity Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Price Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Price <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LuPhilippinePeso className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      value={formData.price} 
                      onChange={handleChange}
                      name="price"
                      type="text" 
                      placeholder="0.00"
                      disabled={mode === 'view'}
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-shadow placeholder:text-slate-400"
                    />
                  </div>
                </div>
                {/* Quantity Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Quantity
                  </label>
                  <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-burgundy focus-within:border-transparent transition-shadow">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(0, quantity - 1))}
                      disabled={mode === 'view'}
                      className="p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <span className="font-bold">-</span>
                    </button>
                    <input
                      id="quantity"
                      type="number"
                      min="0"
                      step="1"
                      value={quantity}
                      disabled={mode === 'view'}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                      className="w-full text-center py-2 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={mode === 'view'}
                      className="p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <span className="font-bold">+</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Upload */}
              {!formData.image_url && mode === 'view' ? (
                null
              ):(
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Product Image
                  </label>

                  {!previewUrl ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-xl cursor-pointer transition-colors border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                    >
                      <div className="space-y-2 text-center">
                        <LuCloudUpload className="mx-auto h-10 w-10 text-slate-400" />
                        <div className="flex text-sm text-slate-600 justify-center">
                          <span className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                            Upload a file
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-2 relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 group">
                      <div className="aspect-video w-full relative flex items-center justify-center bg-slate-100">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      {mode !== 'view' &&
                        (
                          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button
                              type="button"
                              onClick={handleRemoveImage}
                              className="flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-red-600 rounded-lg font-medium shadow-sm transition-colors"
                            >
                              <LuTrash className="w-4 h-4" />
                              Remove Image
                            </button>
                          </div>
                        )
                      }
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <div className="flex items-center gap-2 text-white">
                          <LuImage className="w-4 h-4" />
                          <span className="text-sm font-medium truncate">
                            {imageFile?.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFile(e.target.files[0])
                      }
                    }}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              )}
              <div className="modal-action">
                <form method="dialog" className="flex gap-2">
                  {
                    mode !== 'view' && (
                      <button onClick={submitForm} type="button" className="btn bg-burgundy text-white rounded-lg">Save</button>
                    )
                  }
                  <button className="btn rounded-lg">Close</button>
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