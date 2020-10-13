import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TableProperty } from '../../model/customer.model';
import { fetchCustomers } from './middleware/customerListMiddleware';

import CustomerListPresentation from './presentation/CustomerListPresentation/CustomerListPresentation';


class CustomerList extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.props.fetchCustomer();
    }

    render() {
        const { customers } = this.props;
        return (
            <CustomerListPresentation customers={customers}/>
        )
    }
}

const mapStateToProps = (state: any) => ({
    customers: state.customer.customerList.data
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchCustomer: () => dispatch(fetchCustomers()),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerList);


