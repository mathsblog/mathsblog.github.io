import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <Outlet {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
