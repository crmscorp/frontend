import { Typography } from "@suid/material";
import { Component, createEffect, createSignal, onMount, Show } from "solid-js";
import { store } from "../../Store";
import TableDash from "../Components/TableDash";
import InputForm from "./components/InputForm";
import { CustomersController } from "./CustomersController";

import './customersView.scss'

const [showTable, setShowTable] = createSignal(false);


const CustomersView: Component = () => {

  
  const c = new CustomersController();
  onMount(async () => {
    await c.getAllcustomers().then(() => setShowTable(true))
  });

  const tableHeaders: string[] = ['Name', 'Vorname', 'Nachname', 'Email Adresse', 'Webseite']

  return (
    <div>
    <div class="headline">
      <Typography id="modal-modal-title" variant="h2" component="h1">
        Erweitere dein Netzwerk
      </Typography>
      <Typography id="modal-modal-title" variant="h4" component="h2">
        Einen Neuen Kunden Anlegen
      </Typography>
      </div>
      {/* title has to be in enum table in file TableDash.tsx */}
        <TableDash title="customer" tableHeaders={tableHeaders}  />
    </div>
  );
};

export {showTable, setShowTable };
export default CustomersView;
