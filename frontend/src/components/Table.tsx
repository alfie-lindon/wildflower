import { useState, useMemo } from "react";
import { 
  LuSearch,
  LuRefreshCcw,
  LuPlus,
  LuChevronLeft,
  LuChevronRight,
  LuCircleEllipsis 
} from "react-icons/lu";

interface Column {
  key: string
  label: string
  render?: (value: unknown) => React.ReactNode
}

interface Action {
  label: string
}

interface TableProps {
  data: Record<string, unknown>[]
  columns: Column[],
  actions: Action[]
  onRefresh?: () => void
}

const Table = ({data, columns, onRefresh, actions}: TableProps) => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const itemsPerPage = 8
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [isRefreshing, setIsRefreshing] = useState(false)

  const filteredItems = useMemo(() => {
    return data.filter((row) =>
      columns.some((col) =>
        String(row[col.key] ?? '').toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [data, columns, search])

  const sortedItems = useMemo(() => {
    return [...filteredItems]
  }, [filteredItems])

  const totalPages = Math.ceil(sortedItems.length / itemsPerPage)

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * itemsPerPage
    return sortedItems.slice(start, start + itemsPerPage)
  }, [sortedItems, page])

  const handleSelectAll = () => {
    if (selectedIds.size === paginatedItems.length && paginatedItems.length > 0) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(paginatedItems.map((row) => String(row.id))))
    }
  }

  const handleSelectRow = (id: string) => {
    setSelectedIds((prev) => {
      const updated = new Set(prev)
      if (updated.has(id)) {
        updated.delete(id)
      } else {
        updated.add(id)
      }
      return updated
    })
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setPage(1)  // reset to page 1 on search
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    onRefresh?.()
    setTimeout(() => {
      setIsRefreshing(false)
    }, 800)
  }

  return (
    <div className="w-full mx-auto bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
      {/* Header & Toolbar */}
      <div className="p-5 border-b border-gray-200 space-y-4">
        <div className="flex sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LuSearch size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              className="btn btn-sm rounded-lg"
            >
              <LuRefreshCcw size={18} className={isRefreshing ? 'animate-spin text-burgundy': ''} />
            </button>
            <button
              onClick={()=>document.getElementById('my_modal_2').showModal()}
              className="btn bg-burgundy text-white rounded-lg"
            >
              <LuPlus size={16} />
              Add User
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 h-108">
        <table className="table">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12">
                <label>
                  <input 
                    type="checkbox" 
                    className="checkbox"
                    checked={
                      paginatedItems.length > 0 &&
                      selectedIds.size === paginatedItems.length
                    }
                    onChange={handleSelectAll}
                  />
                </label>
              </th>
              {columns.map((col) => (
                <th className="px-6 py-3 text-left" key={col.key}>
                  {col.label}
                </th>
              ))}
              <th className="px-6 py-3 text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedItems.length > 0 ? (     // ← use paginatedItems not data
              paginatedItems.map((row, index) => {
                const rowId = String(row.id)
                return (
                  <tr key={index} className={selectedIds.has(rowId) ? 'bg-blue-50' : ''}>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={selectedIds.has(rowId)}
                          onChange={() => handleSelectRow(rowId)}
                        />
                      </label>
                    </th>
                    {columns.map((col) => (
                      <td key={col.key} className="px-6 py-4 whitespace-nowrap">
                        {col.render
                          ? col.render(row[col.key])
                          : String(row[col.key] ?? '')}
                      </td>
                    ))}
                    <th>
                      <div className="dropdown dropdown-end float-right">
                        <div tabIndex={0} role="button" className="btn btn-ghost"><LuCircleEllipsis /></div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
                          {actions.map((action) => (
                            <li key={action.label}>
                              <a>{action.label}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </th>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <p className="text-base font-medium text-gray-900">No data found</p>
                    <p className="text-sm mt-1">Try adjusting your search or filters.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing{' '}
            <span className="font-medium">
              {sortedItems.length === 0 ? 0 : (page - 1) * itemsPerPage + 1}
            </span>{' '}
            to{' '}
            <span className="font-medium">
              {Math.min(page * itemsPerPage, sortedItems.length)}
            </span>{' '}
            of <span className="font-medium">{sortedItems.length}</span> results
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="relative inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <LuChevronLeft size={16} className="mr-1" />
            Previous
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages || totalPages === 0}
            className="relative inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <LuChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Table