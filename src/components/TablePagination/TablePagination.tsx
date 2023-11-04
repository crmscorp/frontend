import React from 'react'
import { Button } from '../ui/button'
import { Table } from '@tanstack/react-table'

interface ITablePagination<TData>{
    table: Table<TData>
}
const TablePagination: <TData>({table} :ITablePagination<TData>) => JSX.Element = ({table}) => {
  return (

    <div className="flex items-center border-b-white border-t-1 justify-end space-x-2 py-4">
    <p className='mr-3 text-sm text-gray-400 tracking-tighter'>Seite {table.getState().pagination.pageIndex+1} von {table.getPageCount()}</p> 
    <Button
      variant="outline"
      size="sm"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      Previous
    </Button>
    <Button
      variant="outline"
      size="sm"
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
    >
      Next
    </Button>
    </div>
  )
}

export default TablePagination