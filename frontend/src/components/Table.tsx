import { 
  LuSearch,
  LuRefreshCcw,
  LuPlus,
} from "react-icons/lu";

const Table = () => {
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
              placeholder="Search by name or email..."
              // value={search}
              // onChange={(e) => {
              //   setSearch(e.target.value)
              //   setPage(1)
              // }}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              // onClick={handleRefresh}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              title="Refresh data"
            >
              <LuRefreshCcw
                size={18}
                // className={isRefreshing ? 'animate-spin text-blue-600' : ''}
              />
            </button>
            <button
              // onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-burgundy text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm"
            >
              <LuPlus size={16} />
              Add User
            </button>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left w-12">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                    // checked={
                    //   paginatedUsers.length > 0 &&
                    //   selectedIds.size === paginatedUsers.length
                    // }
                    // onChange={handleSelectAll}
                  />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer group hover:bg-gray-100 transition-colors"
                // onClick={() => handleSort('name')}
              >
                <div className="flex items-center gap-1">
                  Name
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table