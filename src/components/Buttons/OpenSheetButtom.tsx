import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


interface IOpenSheetButton {
  buttonTitle: string;
  variant: "link" | "default" | "destructive" | "outline" | "ghost" | null | undefined;
  className?: string,
  id?: string,
  sheetTitle?: string,
  underSheetText?: string,
  fields?: {value: string, type:string}[]
  

}
// title: string, variant: "link" | "default" | "destructive" | "outline" | "ghost" | null | undefined
export const OpenSheetButtom: ({buttonTitle, variant, className, id, sheetTitle, underSheetText, fields} :IOpenSheetButton) => JSX.Element =({buttonTitle, variant,className, id, sheetTitle, underSheetText, fields}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={className} variant={variant}>{buttonTitle}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{sheetTitle}</SheetTitle>
          <SheetDescription>
            {underSheetText}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Vorname
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Nachname
            </Label>
            <Input id="name"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Unternehmen
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              E-mail Adresse
            </Label>
            <Input id="username" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Telefon Nummer
            </Label>
            <Input id="username"  className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant={"default"} type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
