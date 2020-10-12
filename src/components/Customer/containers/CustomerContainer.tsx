import React, { Component } from 'react';
import CustomerList from './CustomerList/CustomerList';

class CustomerContainer extends Component <any, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
            return <CustomerList />
    }
}

export default CustomerContainer