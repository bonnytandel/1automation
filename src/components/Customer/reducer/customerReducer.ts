import { combineReducers } from 'redux';
import customerListReducer from '../containers/CustomerList/reducer/customerListReducer';
// ------------------------------------------------------------ //


const customerReducer = combineReducers({
    customerList: customerListReducer
});

export default customerReducer;