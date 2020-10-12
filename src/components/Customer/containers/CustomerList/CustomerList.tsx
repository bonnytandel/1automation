import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TableProperty } from '../../model/customer.model';
import { fetchCustomers } from './middleware/customerListMiddleware';

import CustomerListPresentation from './presentation/CustomerListPresentation/CustomerListPresentation';


class CustomerList extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        // this.props.getRepairOrder();
        console.log(this.props);
    }
    render() {
        return (
            <CustomerListPresentation />
        )
    }
}

const mapStateToProps = (state: any) => ({
    customers: state.customer.customerList.data
})

// const mapDispatchToProps = (dispatch: any) => ({

//     fetchCustomer: () => dispatch(fetchCustomers()),
// })
const mapDispatchToProps = (dispatch: any) => ({
    getRepairOrder: () => dispatch(fetchCustomers()),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerList);

// const customerList = connect(mapStateToProps, mapDispatchToProps)(CustomerList);

// export { customerList as CustomerList };

