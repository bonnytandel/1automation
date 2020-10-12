import { combineReducers, Reducer } from "redux";
import customerReducer from "../components/Customer/reducer/customerReducer";
// ---------------------------------------------- //


const _getAppReducers = (): any => ({
  customer: customerReducer

});

export const rootReducer = combineReducers(
  _getAppReducers()
);

export type RootState = ReturnType<typeof rootReducer>;
