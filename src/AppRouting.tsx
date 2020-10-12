import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Customer from './components/Customer';
// ------------------------------------------------------ //
import Dashboard from './components/Dashboard/Dashboard'

const AppRouting: any = () => {

    return (
        <>
                <Router>
                    <Switch>
                        <Redirect exact from="/" to="/dashboard" />
                    </Switch>
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/customer' component={Customer} />
                </Router>

        </>
    )
}

export default AppRouting;