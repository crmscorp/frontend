"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, MoreVertical,  ArrowUpDown } from "lucide-react";
import { ICustomers, IOrders } from "@/assets/dummy";
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
import { OpenSheetButtom } from "../../../components/Buttons/OpenSheetButtom";
import { useNavigate } from "react-router-dom";

export const sheetInputs = [{value: "name", type:"string"}]
export const columns: ColumnDef<IOrders>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="pl-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },

  },
  {
    accessorKey: "status",
    size: 50,
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="pl-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    id: "actions",
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
            <DropdownMenuItem onClick={() => navigate(`/orders/${data.orderId}`)}>Mehr Anzeigen</DropdownMenuItem>
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
