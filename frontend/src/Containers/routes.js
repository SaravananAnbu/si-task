import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import App from '../Components/App';
import history from '../history';
import requireAuth from './Auth';
import Loadable from 'react-loadable';
import Loading from '../Components/Loading';

const loadableDashboard = Loadable({
    loader: () => import('./Dashboard/Dashboard'),
    loading: Loading
})

export default class Root extends React.Component {
    render() {
        return (
            <Router history={history}>
                <App>
                    <Switch>
                        <Route path='/*' component={requireAuth(loadableDashboard)}/>
                    </Switch>
                </App>
            </Router>
        );
    }
}

