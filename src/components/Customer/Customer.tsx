import React, { Component } from 'react';
import CustomerList from './containers/CustomerList';


class Customer extends Component <any, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
            return <CustomerList />
    }
}

export default Customer