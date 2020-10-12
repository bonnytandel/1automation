import { STORE_CUSTOMER_LIST_DATA } from "../actions/customerListAction";

  
  const initialState = {
    data: []
  };
  
  const customerListReducer = (state = initialState, action: any) => {
      debugger
    switch (action.type) {
      case STORE_CUSTOMER_LIST_DATA:
        return {
          ...state,
          error: null,
          pending: false,
          data: action.payload
        };
      default:
        return state;
    }
  }
  
  export default customerListReducer;