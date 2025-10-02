import React from 'react'
import { Label } from './ui/label'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { ChevronDownIcon } from 'lucide-react'
import { Calendar } from './ui/calendar'

type DatePickerProps = {
    date: Date | undefined,
    setDate: (date: Date) => void
    label: string
}
const DatePicker = ({date, setDate, label}: DatePickerProps) => {

    const [open, setOpen] = React.useState(false)

    return (
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          {label}
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-48 justify-between font-normal"
            >
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                if(date){
                    setDate(date)
                }
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    )
}

export default DatePicker