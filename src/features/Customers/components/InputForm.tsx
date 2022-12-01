import { Component } from "solid-js";
import { Box, Button, Typography, TextField } from "@suid/material";
import useTheme from "@suid/material/styles/useTheme";
import { CustomersController } from "../CustomersController";

import './inputForm.scss'

const InputForm: Component = () => {
  const c = new CustomersController();

  let customer: Customer = {
    contact_surname: "",
    contact_lastname: "",
    email: "",
    name: "",
    website: "",
    comment: "",
    status: "",
  };
  const sendToBack = (customer: Customer) => {
    c.addCustomer(customer);
    customer = {
      contact_surname: "",
      contact_lastname: "",
      email: "",
      name: "",
      website: "",
      comment: "",
      status: "",
    };
  };
  return (
    <div>
      <div class="inputContainer">
      <div class="headline">
      <Typography id="modal-modal-title" variant="h2" component="h1">
        Erweitere dein Netzwerk
      </Typography>
      <Typography id="modal-modal-title" variant="h4" component="h2">
        Einen Neuen Kunden Anlegen
      </Typography>
      </div>
      <div class="inputcontainer_inner">
        <TextField
          value={customer.contact_surname}
          id="standard-basic"
          onChange={(e) => (customer.contact_surname = e.target.value)}
          label="Vorname"
          variant="standard"
          sx={{ mt: 2, width: "40%" }}
        />
        <TextField
          value={customer.contact_lastname}
          id="standard-basic"
          onChange={(e) => (customer.contact_lastname = e.target.value)}
          label="Nachname"
          variant="standard"
          sx={{ mt: 2, width: "40%" }}
        />
      </div>
      <div class="inputcontainer_inner">
        <TextField
          value={customer.name}
          id="standard-basic"
          onChange={(e) => (customer.name = e.target.value)}
          label="Firma"
          variant="standard"
          sx={{ mt: 2, width: "40%" }}
        />
        <TextField
          value={customer.website}
          id="standard-basic"
          onChange={(e) => (customer.website = e.target.value)}
          label="Webseite"
          variant="standard"
          sx={{ mt: 2, width: "40%" }}
        />
      </div>
      <div class="inputcontainer_inner">
        <TextField
          value={customer.email}
          id="standard-basic"
          onChange={(e) => (customer.email = e.target.value)}
          label="Email"
          variant="standard"
          sx={{ mt: 2, width: "40%" }}
        />
        <TextField
          value={customer.status}
          id="standard-basic"
          onChange={(e) => (customer.status = e.target.value)}
          label="Status"
          variant="standard"
          sx={{ mt: 2, width: "40%" }}
        />
      </div>
      <div class="inputcontainer_inner">
      <TextField
          id="filled-multiline-flexible"
          label="Beschreibung"
          multiline
          rows={4}
        sx={{ mt: 2, width: "40%" }}
      />
      <div class="buttonContainer">
      <Button onClick={() => sendToBack(customer)} variant="outlined" size="large">Kunde Anlegen</Button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default InputForm;
