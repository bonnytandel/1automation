import axios from "axios";
import { storeCustomerListData } from "../actions/customerListAction";
// -------------------------------------//



const baseUrl: string = "http://localhost:4500/customers";


export const fetchCustomers = () => {
    debugger
  return (dispatch: any) => {
    axios.get(baseUrl).then(
      (response: any) => {
        const customers = response && response.data;
        dispatch(storeCustomerListData(customers));
      },
    );
  };
};


