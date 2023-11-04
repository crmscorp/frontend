import React from 'react'
import { Button } from "@/components/ui/button"
import { DataTable } from './data-table'
import {columns} from './columns'
import {customers} from '../../assets/dummy'
import PageWrapper from '../PageWrapper'

const Customers = () => {
  return (
    <PageWrapper title='Customers' categorie='Pages'>
    <DataTable columns={columns} data={customers} />
    </PageWrapper>
  )
}

export default Customers