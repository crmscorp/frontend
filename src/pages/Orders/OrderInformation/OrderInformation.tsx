import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Input } from '@/components/ui/input'
import { useCustomer, useUpdateCustomer, useCreateCustomer, useCustomers } from '@/pages/Customers/customerController'
import PageWrapper from '@/pages/PageWrapper'
import { useAppSelector } from '@/store/hooks'
import { settingSelector } from '@/store/settingsSlice'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CustomerRequest, OrderRequest, Positions } from 'src-gen/openapi/app'
import { columns } from '../columns'
import { useOrder, useOrderByCustomerId } from '../ordersController'
import { Label } from '@/components/ui/label'
import DatePicker from '@/components/DatePicker'
import { Textarea } from '@/components/ui/textarea'
import { CustomSelect } from '@/components/CustomSelect'
import PositionElement from './PositionElement'

type OrderInformationProps = {
    newOrder?: boolean
}
const OrderInformation = ({newOrder}: OrderInformationProps) => {

    const { id } = useParams()
    const { data, isLoading } = useOrder(id);
    const navigate = useNavigate();
 

    const settingsStore = useAppSelector(settingSelector);

    const [order, setOrder] = useState<OrderRequest>({} as OrderRequest)
    const [selectableCustomers, setSelectableCustomers] = useState<string[]>([])
    const {data: customer, isLoading: customerIsLoading} = useCustomer(order.customerId)
    const {data: customers, isLoading: customersIsLoading} = useCustomers()

    

   
    useEffect(() => {

      if(id && data && !newOrder){
        setOrder(data)
      }
    }, [data,customer,customers])
    


    if(!newOrder ){
      if(isLoading || !data || customerIsLoading || customersIsLoading){
          return <>ist am laden</>
        }
    }

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index?: number
      ) => {
        const { name, value } = e.target;
      
        // Index korrekt prüfen (0 ist erlaubt!)
        if (index === undefined) {
          // Felder auf Order-Ebene
          setOrder(prev => ({
            ...prev,
            [name]: value,
          }));
          return;
        }
      
        setOrder(prev => {
          const positions = [...(prev.positions ?? [])];
          if (!positions[index]) return prev;
      
          // amount & quantity sind Zahlen, Rest bleibt String

      
          positions[index] = {
            ...positions[index],
            [name]: value as any, // falls TS meckert, s. Option B
          };
      
          return { ...prev, positions };
        });
      };
      

    const handleSubmit = async (cus: CustomerRequest) => {
      try {
        
      } catch (error) {
        console.log(error)
      }
    }

    const setStartDate = (date:Date) => {
        setOrder({...order, startDate: date})
    }

    const setEndDate = (date: Date) => {
        setOrder({...order, endDate: date})
    }


   const options = ["OPEN", "COMPLETED", "IN_PROGRESS", "ACTIVE"]
    
  return (
    <PageWrapper title={'Order' } categorie={newOrder ? "new" :`#${id}`} >
      <div className='mt-6 mb-10'>
        <h2 className='font-bold text-xl'>BasicData</h2>
      </div>
      <div style={{rowGap: '45px', columnGap: '1%'}} className='flex flex-row flex-wrap'>
      <div  className="grid w-3/5 items-centerg gap-3">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name='title' value={order.title} onChange={(e) => handleOnChange(e)}/>
        </div>
        <CustomSelect customWidth='w-2/5' placeholder='OPEN' label='Status' options={options} onValueChange={(e) => setOrder({...order, status: e})} value={order.status}  />
        <DatePicker date={order.startDate} setDate={setStartDate}  label='Startdatum' />
        <DatePicker date={order.endDate} setDate={setEndDate}  label='Enddatum' />
        <div  className="grid w-full items-center gap-3">
          <Label htmlFor="description">Hinweis</Label>
          <Textarea id="description" name='description' value={order.title} onChange={(e) => handleOnChange(e)}/>
        </div>
      </div>
      <div className='mt-10 mb-4'>
        <h2 className='font-bold text-xl'>Kunde</h2>
      </div>
      <div className='gap-3 flex flex-row'>
      <CustomSelect customWidth='w-1/2' placeholder='Kunde auswählen' options={customers!
        .map(c => c.companyName)
        .filter((v): v is string => !!v)} onValueChange={(e) => setOrder({...order, customerId: customers?.find((customer) => customer.companyName === e)?.customerId ?? ''})} value={customer?.companyName ?? ''}  />
        <a href='' style={{color: settingsStore.currentColor}} className='w-2/5 self-center'>Kunde noch nicht im System ? Hier klicken zum anlegen.</a>
        </div>  
      <div className='mt-10 mb-10'>
        <h2 className='font-bold text-xl'>Positionen</h2>
      </div>
      <PositionElement handleOnChange={handleOnChange} positions={order.positions ?? []} setPosition={(e) => setOrder({...order, positions:[...order.positions ?? [], e]})} />
      <div className='flex flex-row justify-end mt-20' >
        <Button  onClick={() => handleSubmit(order)} style={{backgroundColor: settingsStore.currentColor}} >{newOrder ? 'Kunde Anlegen' : 'Speichern'}</Button>
      </div>
      
    </PageWrapper>
  )
}

export default OrderInformation