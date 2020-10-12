import * as React from 'react';
import { Route } from 'react-router';
// ------------------------------------------------ //
import CustomerList from '../Customer/containers/CustomerList/CustomerList';


const CustomerRouting: React.FC<any> = () => {

    return (
        <>
            <Route exact path="/customer" component={CustomerList} />
        </>
    )
}

export default CustomerRouting;
