import React from 'react'
import Table from 'react-bootstrap/Table';


class CustomerListPresentation extends React.Component <any, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div>
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>PhoneNumber</th>
                        <th>roles</th>
                        {/* <th>Action</th>
                        <th>Delete</th> */}
                    </tr>
                </thead>
                <tbody>
                    {this.props.customers && this.props.customers.map((customer: any) =>
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.username}</td>
                            <td>{customer.fullname}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phonenumber}</td>
                            <td>{customer.Roles}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
        ) 
    }
}

export default CustomerListPresentation