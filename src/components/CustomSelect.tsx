import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "./ui/label"

type CustomSelectProps = {
    label?: string,
    options: string[],
    value: string,
    onValueChange: (value:string) => void
    placeholder: string
    customWidth: string
}

export function CustomSelect({label, onValueChange, options, value, placeholder, customWidth}:CustomSelectProps) {
  return (
    <div className={`flex flex-col ${customWidth} gap-3`} >
        {label && 
            <Label htmlFor="date" className="px-1">
            {label}
          </Label>
          }

    <Select onValueChange={onValueChange} defaultValue={value}>
      <SelectTrigger >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options.map((option) => {
                return (
                    <SelectItem value={option}>{option}</SelectItem>
                )
            })}
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}
