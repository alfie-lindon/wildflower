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
    console.log('openModal called:', mode, row)
    setFormMode(mode)
    setRow(row ? row as unknown as Product : null);
    (document.getElementById('my_form') as HTMLDialogElement)?.showModal();
  }

  const actions = [
    { label: 'View', mode: 'view' },
    { label: 'Edit', mode: 'edit' },
    { label: 'Delete', mode: null },
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