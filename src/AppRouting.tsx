import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// ------------------------------------------------------ //
import Dashboard from './components/Dashboard/Dashboard'
import CustomerList from './components/Customer/containers/CustomerList/CustomerList'

const AppRouting: any = () => {

    return (
        <>
                <Router>
                    <Switch>
                        <Redirect exact from="/" to="/dashboard" />
                    </Switch>
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/customer' component={CustomerList} />
                </Router>

        </>
    )
}

export default AppRouting;