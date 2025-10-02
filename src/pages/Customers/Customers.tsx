import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { DataTable } from '../../components/ui/data-table'
import {columns} from './columns'
import {customers} from '../../assets/dummy'
import PageWrapper from '../PageWrapper'
import { useCustomer, useCustomers } from './customerController'
import { CustomerRequest } from 'src-gen/openapi/app'

const Customers = () => {

  const { data: customers, isLoading } = useCustomers();

  
  if(isLoading){
    return <>wird geladen</>
  }

  if(!customers){
    return <>Problem beim Laden</>
  }
  return (
    <PageWrapper title='Customers' categorie='Pages'>
    <DataTable columns={columns} data={customers} filterParameter='companyName'/>
    </PageWrapper>
  )
}

export default Customers