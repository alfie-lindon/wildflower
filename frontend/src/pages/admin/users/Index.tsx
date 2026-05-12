import { useEffect, useState } from "react"
import Table from "../../../components/Table"
import api from "../../../lib/axios"
import Form from "./Form"

interface User {
  [key: string]: unknown
  id: number,
  name: string,
  email: string,
  is_admin: boolean
}

const Index = () => {
  const title = 'User'
  const [users, setUsers] = useState<User[]>([])
  const [formMode, setFormMode] = useState("new");

  const getData = async () => {
    const { data } = await api.get('/admin/users')
    setUsers(data.users)
  }

  useEffect(() => { 
    const fetchData = async () => {
      await getData()  // we can directly call getData in useEffect but linter is OA
    }
    fetchData()
  }, []) //Call fetch on mount

  const openModal = (mode: string) => {
    setFormMode(mode);
    (document.getElementById('my_form') as HTMLDialogElement)?.showModal();
  }

  const actions = [
    { label: 'View', mode: 'view' },
    { label: 'Edit', mode: 'edit' },
    { label: 'Delete', mode: null },
  ]

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'is_admin', label: 'Role' },
  ]

  return (
    <>
      <Table 
        data={users} 
        columns={columns} 
        actions={actions}
        onRefresh={getData}
        formOpen={openModal}
      />
      
      <Form 
        title={title}
        mode={formMode}
      />
    </>
  )
}

export default Index