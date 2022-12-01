import { Component } from 'solid-js';
import { createStore } from 'solid-js/store'
import axios, { AxiosResponse } from "axios";



const [store, setStore] = createStore({
    customers: [] as Customer[],

});

const url = 'http://localhost:8000/';
const getAllCustomers = 'customer/';

export class Store {

    
    public async getAllCustomers() : Promise<Customer[]>{  
        const res = await fetch(`${url}${getAllCustomers}`);
        const customers = await res.json();
        setStore('customers',() => [...customers]);
        return store.customers;
    }

    public postCustomer(data: Customer){
        axios.post(`${url}customer/`, data);
        setStore('customers', () => [data, ...store.customers]);
      };
    }

export {store}
 