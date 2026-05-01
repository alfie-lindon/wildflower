import { useEffect, useState } from "react"
import Table from "../../../components/Table"
import api from "../../../lib/axios"

interface User {
  [key: string]: unknown
  id: number,
  name: string,
  email: string,
  is_admin: boolean
}

const Index = () => {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
  const { data } = await api.get('/admin/users')
    setUsers(data.users)
  }

  useEffect(() => { fetchUsers() }, []) //Call fetch on mount

  const actions = [
    { label: 'View' },
    { label: 'Edit' },
    { label: 'Delete' },
  ]

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'is_admin', label: 'Role' },
  ]

  return (
    <Table 
      data={users} 
      columns={columns} 
      onRefresh={fetchUsers} 
      actions={actions}
    />
  )
}

export default Index