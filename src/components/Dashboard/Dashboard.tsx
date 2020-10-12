import React, { Component } from 'react'
import DashboardView from './DashboardView';

class Dashboard extends Component <any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
        <DashboardView />
        ) 
    }
}

export default Dashboard