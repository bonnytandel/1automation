export const STORE_CUSTOMER_LIST_DATA = 'STORE_CUSTOMER_LIST_DATA';

export const storeCustomerListData = (customers: any) => {
    return {
        type: STORE_CUSTOMER_LIST_DATA,
        payload: customers
    }
}