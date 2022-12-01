import {store, Store} from "../../Store";

const url = "http://localhost:8000/";

export class CustomersController{
    private store: Store = new Store()
    private CustomerStore: Customer[] = store.customers;

    getCustomerStore(): Customer[]{
        return this.CustomerStore
    }



    getAllcustomers(): Promise<Customer[]>{
       return this.store.getAllCustomers()
    }
    
    addCustomer(customer: Customer){
        this.store.postCustomer(customer);
    } 
}
