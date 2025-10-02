"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, MoreVertical,  ArrowUpDown } from "lucide-react";
import { ICustomers } from "@/assets/dummy";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { OpenSheetButtom } from "../../components/Buttons/OpenSheetButtom";
import { useNavigate } from "react-router-dom";
import { CustomerRequest } from "src-gen/openapi/app";

export const sheetInputs = [{value: "name", type:"string"}]
export const columns: ColumnDef<CustomerRequest>[] = [
  {
    accessorKey: "customerId",
    header: "ID",
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("customerId")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "companyName",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="pl-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Company Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },

  },
  {
    accessorKey: "email",
    size: 50,
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="pl-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    id: "actions",
    header: ({ column }) => {
      const navigate = useNavigate();
        return (
            <div className="flex justify-end w-auto" >
                <Button onClick={() => navigate(`/customers/create`)} variant="outline">Kunde Hinzufügen</Button>
          </div>
        )
      },
    cell: ({ row }) => {
      const data = row.original
      const navigate = useNavigate();
      return (
        <div style={{width: '100%'}} className="w-full flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex justify-end w-[100px]" asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => navigate(`/customers/${data.customerId}`)}>Mehr Anzeigen</DropdownMenuItem>
              <div>
            <OpenSheetButtom className=" pl-2 py-1.5 " variant="ghost" buttonTitle="Bearbeiten" sheetTitle="Kunde Bearbeiten" underSheetText="Hier haben Sie die Möglichkeit, den Kunden zu bearbeiten."/>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Löschen</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      )
    }
  }
];
