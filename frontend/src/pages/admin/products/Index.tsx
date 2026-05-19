import { useEffect, useState } from "react"
import Table from "../../../components/Table"
import api from "../../../lib/axios"
import Form from "./Form"

interface Product {
  [key: string]: unknown
  id: number
  name: string
  description: string
  price: number
  quantity: number
  image_url: string
}

const Index = () => {
  const title = 'Product'
  const [products, setProducts] = useState<Product[]>([])
  const [formMode, setFormMode] = useState("new")
  const [row, setRow] = useState<Product | null>(null)

  const getData = async () => {
    const { data } = await api.get('/product/index')
    setProducts(data.products)
  }

  useEffect(() => { 
    const fetchData = async () => {
      await getData()  // we can directly call getData in useEffect but linter is OA
    }
    fetchData()
  }, []) //Call fetch on mount

  const openModal = (mode: string, row?: Record<string, unknown>) => {
    if (mode === 'delete') {
      handleDelete([String(row?.id)])
      return
    }
    setFormMode(mode)
    setRow(row ? row as unknown as Product : null);
    (document.getElementById('my_form') as HTMLDialogElement)?.showModal();
  }

  const handleDelete = async(ids: string[]) => {
    if (ids.length === 0) return
    
    const multiple = ids.length > 1

    try {
      if (multiple) {
        await api.post(`/product/destroy`, {
          multiple: true,
          ids: ids
        })
      } else {
        await api.post(`/product/destroy/${ids[0]}`)
      }
      await getData() // Re-fetch data after deletion of items
    } catch (error) {
      console.error('Delete failed', error)
    }
  }

  const actions = [
    { label: 'View', mode: 'view' },
    { label: 'Edit', mode: 'edit' },
    { label: 'Delete', mode: 'delete' },
  ]

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description' },
    { key: 'price', label: 'Price' },
    { key: 'quantity', label: 'Quantity' },
  ]

  return (
    <>
      <Table 
        data={products} 
        columns={columns} 
        actions={actions}
        onRefresh={getData}
        onDelete={handleDelete}
        formOpen={openModal}
      />
      
      <Form 
        row={row}
        title={title}
        mode={formMode}
      />
    </>
  )
}

export default Index