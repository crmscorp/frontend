import React from "react";


import {customers} from '../../assets/dummy'
import { useNavigate } from "react-router-dom";
import PageWrapper from "../PageWrapper";
import { columns } from "./columns";
import { DataTable } from "../../components/ui/data-table";
import {  useOrders } from "./ordersController";
const Orders = () => {
  const { data: orders, isLoading } = useOrders();

  if(!orders){
    return <>problem beim laden</>
  }
  return (
    <PageWrapper title='Orders' categorie='Pages'>
      {/* <button onClick={() => navigate("/")}>test navigator</button> */}
      <DataTable columns={columns} data={orders}  filterParameter="title"/>
      </PageWrapper>
  );
};

export default Orders;
