import React from "react";


import {customers} from '../../assets/dummy'
import { useNavigate } from "react-router-dom";
import PageWrapper from "../PageWrapper";
import { columns } from "./columns";
import { DataTable } from "../Customers/data-table";
const Orders = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper title='Orders' categorie='Pages'>
      {/* <button onClick={() => navigate("/")}>test navigator</button> */}
      <DataTable columns={columns} data={customers} />
      </PageWrapper>
  );
};

export default Orders;
