import { Component, createSignal, JSX, JSXElement } from "solid-js";
import { Box, Button, Modal, Typography, TextField } from "@suid/material";
import useTheme from "@suid/material/styles/useTheme";
import { CustomersController } from "./CustomersController";

interface Props {
  title: string;
}

const CustomerModal = ({ title }: Props) => {
  const c = new CustomersController();
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  let customer: Customer = {
    contact_surname: '',
    contact_lastname: '',
    email: '',
    name: '',
    website: '',
    comment: '',
    status: ''
  }

  const sendToBack = (customer: Customer) => {
      c.addCustomer(customer);
      handleClose();
  }
  return (
    <div>
      <Button size="small" onClick={handleOpen}>{title}</Button>
      <Modal
        open={open()}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: "24px",
            display: 'flex',
            flexDirection: 'column',
            p: 4,
            alignItems: "center",
            justifyContent: 'center'
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Einen Neuen Kunden Anlegen
          </Typography>
          <TextField id="standard-basic" onChange={e => customer.contact_surname = e.target.value} label="Vorname" variant="standard" sx={{ mt: 2, width: '70%' }} />
          <TextField id="standard-basic" onChange={e => customer.contact_lastname = e.target.value} label="Nachname" variant="standard" sx={{ mt: 2 , width: '70%'}}/>
          <TextField id="standard-basic" onChange={e => customer.name = e.target.value} label="Firma" variant="standard" sx={{ mt: 2 ,width: '70%'}}/>
          <TextField id="standard-basic" onChange={e => customer.website = e.target.value} label="Webseite" variant="standard" sx={{ mt: 2,width: '70%' }} />
          <TextField id="standard-basic" onChange={e => customer.email = e.target.value} label="Email" variant="standard" sx={{ mt: 2,width: '70%' }}/>
          <TextField id="standard-basic" onChange={e => customer.comment = e.target.value} label="Beschriebung" variant="standard" sx={{ mt: 2,width: '70%' }} />
          <TextField id="standard-basic" onChange={e => customer.status = e.target.value} label="Status" variant="standard" sx={{ mt: 2 ,width: '70%'}} />
          <Button onClick={() => sendToBack(customer)}>Senden</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomerModal;
