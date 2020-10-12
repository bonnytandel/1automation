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

/**
 * This function checks for the presence or criteria and constructs the query params object accordingly.
 * This function should be inside shared/utils
 * @param tableProperty The model which needs to be mapped to the criteria that is accepted by the API.
 */
const paramProcess = (tableProperty: any) => {
  let params: any = {};
  tableProperty.pageNumber || tableProperty.pageNumber === 0
    ? (params.page = tableProperty.pageNumber.toString())
    : "";
  tableProperty.pageLimit
    ? (params.perPage = tableProperty.pageLimit.toString())
    : "";
  tableProperty.sort
    ? (params.sort = tableProperty.order + "" + tableProperty.sort)
    : "";
  tableProperty.search ? (params.q = tableProperty.search) : "";

  return params;
};
