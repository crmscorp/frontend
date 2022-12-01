import { For, JSX, Match, Show, Switch, createSignal, createEffect } from "solid-js";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@suid/material";
import CustomerModal from "../Customers/CustomerModal";
import { showTable, setShowTable} from "../Customers/CustomersView";
import { store } from "../../Store";
import { CustomersController } from "../Customers/CustomersController";

interface Props {
  title: string;
  tableHeaders: string[];
  data?: Customer[];
  loading?: boolean
}

enum tables {
  CUSTOMER = "customer",
  ASSIGNMENTS = "assignments",
}


const TableDash: ({ title, tableHeaders, data }: Props) => JSX.Element = ({
  title,
  tableHeaders,
  data,
}: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <Switch fallback={<p>test</p>}>
              <Match when={title === tables.CUSTOMER}>
                <For each={tableHeaders}>
                  {(tableHead: string) => <TableCell>{tableHead}</TableCell>}
                </For>
              </Match>
            </Switch>
            <TableCell>
              <CustomerModal title="Kunde Anlegen"/>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Show when={showTable()} fallback={<p>test</p>}>
            <For each={store.customers}>
              {(data: Customer) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.contact_surname}</TableCell>
                  <TableCell>{data.contact_lastname}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.website}</TableCell>
                </TableRow>
              )}
            </For>
          </Show>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDash;
