import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import PageWrapper from '../../PageWrapper'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
//import { toast } from "sonner"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { DataTable } from '../../../components/ui/data-table'
import { columns } from '../../Orders/columns'
import { CustomerRequest } from 'src-gen/openapi/app'
import { useCreateCustomer, useCustomer, useUpdateCustomer } from '../customerController'
import { Label } from '@/components/ui/label'
import { useAppSelector } from '@/store/hooks'
import { settingSelector } from '@/store/settingsSlice'
import { useOrderByCustomerId } from '@/pages/Orders/ordersController'


type CustomerInformationProps ={
  newCustomer?: boolean
}

const CustomerInformation = ({newCustomer}: CustomerInformationProps) => {
    const { id } = useParams()
    const { data, isLoading } = useCustomer(id);
    const updateCustomer = useUpdateCustomer();
    const createCustomer = useCreateCustomer();
    const navigate = useNavigate();

    const { data: orders, isLoading: ordersIsLoading } = useOrderByCustomerId(id);

    const settingsStore = useAppSelector(settingSelector);

    const [customer, setCustomer] = useState<CustomerRequest>({} as CustomerRequest)


    useEffect(() => {

      if(id && data && !newCustomer){
        setCustomer(data)
      }
    }, [data])
    
    if(!newCustomer ){
      if(isLoading || ordersIsLoading || !orders){
          return <>ist am laden</>
        }
    }

    const handleOnChange = (
      e:React.ChangeEvent<HTMLInputElement>,
    ) => {
      const {name, value} = e.target

      setCustomer((prev) => ({
        ...prev,
        [name]: value
      }))
    }

    const handleSubmit = async (cus: CustomerRequest) => {
      try {
        
        if(newCustomer){
           createCustomer.mutate({customer: customer})
           navigate('/customers')
        }else{
          id && updateCustomer.mutate({customer: customer, id: id})
        }
      } catch (error) {
        console.log(error)
      }
    }
    
  return (
    <PageWrapper title={newCustomer ? "Neuen Kunden Anlegen" : customer.companyName ??  '' } categorie={newCustomer ? "" :`#${id}`} >
      <div className='mt-6 mb-10'>
        <h2 className='font-bold text-xl'>BasicData</h2>
      </div>
      <div style={{gap: '5%', rowGap: '30px', columnGap: '5%'}} className='flex flex-row flex-wrap'>
      {
        newCustomer && 
        <div  style={{width: '47.5%'}}className="grid w-4/5 items-center gap-3">
        <Label htmlFor="companyName">Firmenname</Label>
        <Input id="companyName" name='companyName' value={customer.companyName} onChange={(e) => handleOnChange(e)}/>
      </div>
      }
        <div  style={{width: '47.5%'}}className="grid w-2/5 items-center gap-3">
          <Label htmlFor="surname">Vorname</Label>
          <Input id="surname" name='surname' value={customer.surname} onChange={(e) => handleOnChange(e)}/>
        </div>
        <div style={{width: '47.5%'}} className="grid w-2/5 items-center gap-3">
          <Label htmlFor="lastname">Nachname</Label>
          <Input id="lastname" name='lastname' value={customer.lastname} onChange={(e) => handleOnChange(e)}/>
        </div>
        <div style={{width: '47.5%'}} className="grid w-2/5 items-center gap-3">
          <Label htmlFor="email">E-Mail</Label>
          <Input id="email" name='email' value={customer.email} onChange={(e) => handleOnChange(e)}/>
        </div>
        <div style={{width: '47.5%'}} className="grid w-2/5 items-center gap-3">
          <Label htmlFor="telephoneNumber">Nummer</Label>
          <Input type='number' id="telephoneNumber" name='telephoneNumber' value={customer.telephoneNumber} onChange={(e) => handleOnChange(e)}/>
        </div>
        <div style={{width: '47.5%'}} className="grid w-1/5 items-center gap-3">
          <Label htmlFor="street">Starße und Hausnummer</Label>
          <Input id="street" name='street' value={customer.street} onChange={(e) => handleOnChange(e)}/>
        </div>
        <div style={{width: newCustomer ? '30%' : '47.5%'}} className="grid w-1/6 items-center gap-3">
          <Label htmlFor="plz">PLZ</Label>
          <Input id="plz" name='plz' value={customer.plz} onChange={(e) => handleOnChange(e)}/>
        </div>
        <div style={{width: '30%'}} className="grid w-1/5 items-center gap-3">
          <Label htmlFor="city">Stadt</Label>
          <Input id="city" name='city'  value={customer.city} onChange={(e) => handleOnChange(e)} />
        </div>
        <div style={{width: '30%'}} className="grid w-1/5 items-center gap-3">
          <Label htmlFor="country">Land</Label>
          <Input id="country" name='country' value={customer.country} onChange={(e) => handleOnChange(e)}/>
        </div>
      </div>
      

      {
        !newCustomer &&      
        <> 
          <div className='mb-10 mt-20'>
            <h2 className='font-bold text-xl'>Orders</h2>
          </div>
          <DataTable columns={columns} data={orders!} filterParameter='title'/>
        </>
      }

      <div className='flex flex-row justify-end mt-20' >
        <Button onClick={() => handleSubmit(customer)} style={{backgroundColor: settingsStore.currentColor}} >{newCustomer ? 'Kunde Anlegen' : 'Speichern'}</Button>
      </div>
      
    </PageWrapper>
  )
}

export default CustomerInformation