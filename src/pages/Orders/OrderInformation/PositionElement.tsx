import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Positions } from 'src-gen/openapi/app'

type PositionElementProps = {
    positions: Positions[]
    setPosition: (position: Positions) => void
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void
}
const PositionElement = ({positions, setPosition, handleOnChange}: PositionElementProps) => {

    function getTotal() {
        return positions.reduce((acc, p) => {
          const amount = p.amount ?? 0;
          const qty = p.quantity ?? 0;
          return acc + amount * qty;
        }, 0);
      }
  return (
    <>
                    <div className='gap-6 flex flex-row mb-6'>
                <Input className='w-10/12' disabled value={"Titel"}/>
                <Input className='w-1/12' disabled value={"Anzahl"}/>
                <Input className='w-1/12' disabled value={"Preis"}/>
            </div>
    {
        positions.map((position, index) => {
            return (
                <div className='gap-6 flex flex-row mb-6'>
                <Input className='w-10/12' name='title' value={position.title} onChange={(e) => handleOnChange(e, index)}/>
                <Input type='number' className='w-1/12' name="quantity" value={position.quantity} onChange={(e) =>handleOnChange(e, index)}/>
                <Input type='namber' className='w-1/12' name='amount' value={position.amount} onChange={(e) => handleOnChange(e,index)}/>
            </div>
            )
        })
    }
    <div className='gap-6 flex flex-row mb-6'>
        <div className='w-11/12'/>
    <Input disabled className='w-1/12' value={getTotal()}/>
</div>

<div className='gap-6 flex flex-row mb-6'>
    <Button className='w-full' variant={"outline"} onClick={() => setPosition({amount:0, quantity:0,title:"", description:""})}>Position Hinzufügen</Button>
</div>
    </>
  )
}

export default PositionElement