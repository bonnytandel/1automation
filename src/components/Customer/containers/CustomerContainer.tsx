import React, { Component } from 'react';
import CustomerRouting from '../CustomerRouting';

class CustomerContainer extends Component <any, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
            return <CustomerRouting />
    }
}

export default CustomerContainer