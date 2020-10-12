import React from 'react';
import { Link } from 'react-router-dom';

const DashboardView = () => {
    return (
            <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">1Automation</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/customer'} className="nav-link">Customer</Link>
                </li>
              </ul>
            </div>
          </nav>
          </div>
    )
}

export default DashboardView