import React, { Component, Suspense } from 'react';
import '../scss/app.scss';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import AlertMessage from '../Containers/AlertMessage';
import Loadable from 'react-loadable';
import Loading from '../Components/Loading';

const loadableLogin = Loadable({
    loader: () => import('../Containers/Login'),
    loading: Loading,
})

const loadableHome = Loadable({
    loader: () => import('./Home'),
    loading: Loading,
});

class App extends Component {
    render() {
        return (
            <div>
                <AlertMessage/>
                { this.props.isAuth ?  this.props.children : 
                    <Switch>
                        <Route exact path='/' component={loadableHome}/>
                        <Route path='/login' component={loadableLogin}/>
                    </Switch>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.UserReducer.isAuth
    }
}

export default connect(mapStateToProps)(App);

