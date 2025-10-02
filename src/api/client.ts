import { Configuration, ConfigurationParameters } from "../../src-gen/openapi/app/runtime";
import { OrdersApi, CustomersApi } from "../../src-gen/openapi/app";
import { http } from "./http";

const cfg: ConfigurationParameters = {
    basePath: "http://localhost:8081/app/rest"

    // Platz für zukünftige Auth-Parameter, nötig ist es durch Interceptor nicht
  };
  
  export const ordersApi = new OrdersApi(new Configuration(cfg));
  export const customersApi = new CustomersApi(new Configuration(cfg));

