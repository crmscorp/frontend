import React from 'react'

import {columns} from './columns'
import {customers} from '../../assets/dummy'
import PageWrapper from '../PageWrapper'
import { DataTable } from '../Customers/data-table'
const Expenses = () => {
  return (
    <PageWrapper title='Expenses' categorie='Pages'>
    <DataTable columns={columns} data={customers} />
    </PageWrapper>
  )
}

export default Expenses